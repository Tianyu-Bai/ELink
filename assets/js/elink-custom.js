/* ===================== assets/js/elink-custom.js ===================== */
document.addEventListener("DOMContentLoaded", () => {
  
  // ===================== 弱网探测核心逻辑 =====================
  const isSlowNetwork = () => {
    if ('connection' in navigator) {
      const conn = navigator.connection;
      return conn.saveData || /^[23]g$/.test(conn.effectiveType);
    }
    return false;
  };

  // ===================== E-Link 动态数据面板逻辑 =====================
    const dashboardObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const card = entry.target;
        const fgRing = card.querySelector('.fg-ring');
        const numberEl = card.querySelector('.count-up');
        
        const targetValue = parseFloat(card.dataset.value);
        const isFloat = card.dataset.isFloat === "true";
        const circumference = 283; 
        
        if (entry.isIntersecting) {
          card.dataset.dashboardInView = "true";
          let startTimestamp = null;
          
          const cycleTime = 6000; 
          const growTime = 2500;  

          const step = (timestamp) => {
            if (card.dataset.dashboardInView !== "true") return; 

            if (!startTimestamp) startTimestamp = timestamp;
            const elapsed = (timestamp - startTimestamp) % cycleTime;
            
            let progress = 0;
            
            if (elapsed < growTime) {
              let p = elapsed / growTime;
              progress = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
            } else {
              progress = 1;
            }

           const currentValue = isNaN(progress * targetValue) ? 0 : progress * targetValue;
           
            if (isFloat) {
              numberEl.innerText = currentValue.toFixed(1);
            } else {
              if (targetValue > 100) {
                if (progress > 0.99) {
                    numberEl.innerText = targetValue;
                } else {
                    numberEl.innerText = Math.round(currentValue);
                }
              } else {
                numberEl.innerText = Math.round(currentValue);
              }
            }
            fgRing.style.strokeDashoffset = circumference - (circumference * progress);
            card.dashboardAnimFrame = window.requestAnimationFrame(step);
          };

          card.dashboardAnimFrame = window.requestAnimationFrame(step);
          
        } else {
          card.dataset.dashboardInView = "false";
          if (card.dashboardAnimFrame) {
            window.cancelAnimationFrame(card.dashboardAnimFrame);
            card.dashboardAnimFrame = null;
          }
          fgRing.style.strokeDashoffset = circumference;
          numberEl.innerText = "0";
        }
      });
    }, { threshold: 0.1 }); 

    document.querySelectorAll('.metric-card').forEach(card => {
      dashboardObserver.observe(card);
    });
    
    // ===================== 3D 模型交互与弱网防闪退逻辑 =====================
    const models = Array.from(document.querySelectorAll('model-viewer'));
    if (!models.length) return;

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    let isScrolling = false;
    let scrollEndTimer = null;
    let initCheckTimer = null; 

    models.forEach(viewer => {
        viewer.addEventListener('click', () => {
             if (viewer.dataset.loaded !== "true") {
                 activateViewer(viewer, true); 
             }
        });
    });

    const checkAndActivateBestModel = () => {
        if (isSlowNetwork()) return;

        let bestModel = null;
        let minDistance = Infinity;
        const viewportCenter = window.innerHeight / 2;

        models.forEach(viewer => {
            if (viewer.dataset.inView === "true") {
                const rect = viewer.getBoundingClientRect();
                const modelCenter = rect.top + rect.height / 2;
                const distance = Math.abs(modelCenter - viewportCenter);
                
                if (distance < minDistance) {
                    minDistance = distance;
                    bestModel = viewer;
                }
            }
        });

        if (bestModel) {
            activateViewer(bestModel);
        }
    };

    window.addEventListener('scroll', () => {
        isScrolling = true;
        clearTimeout(scrollEndTimer);
        scrollEndTimer = setTimeout(() => {
            isScrolling = false;
            checkAndActivateBestModel();
        }, 120);
    }, { passive: true });

    let isAnyModelLoading = false;

    const activateViewer = async (viewer, force = false) => {
        if (isScrolling && !force) return; 

        models.forEach(m => {
            if (m !== viewer && !m.paused) {
                m.pause();
            }
        });

        if (viewer.getAttribute('reveal') === 'manual' && viewer.dataset.loaded !== "true") {
            if (isAnyModelLoading && !force) return; 
            
            isAnyModelLoading = true;
            try {
                viewer.dismissPoster();
                viewer.dataset.loaded = "true";
                
                await new Promise(resolve => {
                    viewer.addEventListener('load', resolve, { once: true });
                    setTimeout(resolve, 2500); 
                });
            } catch (e) {
                console.warn("3D 模型加载被打断:", e);
            } finally {
                isAnyModelLoading = false;
            }
        }
        
        if (viewer.paused && !isAnyModelLoading) {
            try { viewer.play(); } catch(e) {}
        }

        if (viewer.dataset.overlayDisabled !== "true") {
            clearTimeout(viewer.hudTimer); 
            viewer.hudTimer = setTimeout(() => {
                viewer.querySelectorAll('.gesture-overlay').forEach(el => el.classList.add('gesture-active'));
            }, 600);
        }
    };

    models.forEach((viewer) => {
        viewer.setAttribute('auto-rotate', '');
        viewer.minimumRenderScale = isMobile ? 0.5 : 1; 
        viewer.autoRotateDelay = 1000;
        
        if (isMobile) {
            viewer.setAttribute('interpolation-decay', '30'); 
        }
        
        let hintsHidden = false; 
        const hideHints = () => {
            if (hintsHidden) return; 
            hintsHidden = true;
            viewer.querySelectorAll('.gesture-overlay, .gesture-hud').forEach(el => el.classList.add('gesture-hidden'));
            viewer.dataset.overlayDisabled = "true";
        };
        
        ['mousedown', 'wheel', 'touchstart'].forEach(evt => {
            viewer.addEventListener(evt, hideHints, { passive: true });
        });
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const viewer = entry.target;

            if (entry.isIntersecting) {
                viewer.dataset.inView = "true";
                if (!isScrolling) {
                    clearTimeout(initCheckTimer);
                    initCheckTimer = setTimeout(() => {
                        checkAndActivateBestModel();
                    }, 50);
                }
            } else {
                viewer.dataset.inView = "false";
                clearTimeout(viewer.hudTimer);
                viewer.pause();
                viewer.querySelectorAll('.gesture-overlay').forEach(el => el.classList.remove('gesture-active'));
            }
        });
    }, {
        threshold: 0.05, 
        rootMargin: "50px 0px" 
    });

    models.forEach(model => observer.observe(model));
});
