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

/* ===================== 全局交互、动效与机器人逻辑 ===================== */
// 🌍 双语数据源
const dialogData_EN = {
    "start": { text: "Hi! I'm the Connector Guardian. I protect your neural interfaces.", options: [ { text: "🎬 Watch Demo Video", next: "play_video" }, { text: "🚀 Let's start!", next: "root_menu" } ] },
    "play_video": { text: "Initiating Cinema Mode... Loading visual data.", options: [ { text: "Close Video", next: "start" } ] },
    "root_menu": { text: "Select a category to inspect:", options: [ { text: "🌟 What's Special? (ACE & Zero Force)", next: "innovation" }, { text: "📊 Specifications (Weight/Noise)", next: "specs_menu" }, { text: "🛡️ Reliability & Protection", next: "reliability_menu" }, { text: "🔧 Modular Usage", next: "usage_menu" }, { text: "🌍 Open Source Vision", next: "open_source" }, { text: "Just browsing", next: "close" } ] },
    "innovation": { text: "I use an Anisotropic Conductive Elastomer (ACE). It shifts the paradigm from 'Rigid Pins' to 'Soft Interconnects'.", options: [ { text: "Why is 'Zero Insertion Force' better?", next: "zero_force" }, { text: "What is the 'Sandwich' design?", next: "modularity" }, { text: "Can it scale up?", next: "scalability" }, { text: "Back to Menu", next: "root_menu" } ] },
    "zero_force": { text: "Traditional pin-connectors require high force and micro-alignment, risking bent pins. My threaded cap converts manual rotation into gentle, uniform pressure. No pushing, no damage!", options: [ { text: "Cool! Back.", next: "innovation" } ] },
    "modularity": { text: "It's a modular 'sandwich' structure. Housing, Adapter PCB, and Headstage can be replaced independently. You don't need to discard the whole setup if one part breaks, saving significant costs.", options: [ { text: "Smart design. Back.", next: "innovation" } ] },
    "scalability": { text: "Traditional pins struggle with density. Thanks to the ~100 µm pitch elastomer, I offer a clear scaling roadmap: 256 -> 512 -> 1024 channels within the same footprint!", options: [ { text: "Future-proof! Back.", next: "innovation" } ] },
    "specs_menu": { text: "Checking Diagnostics... Which parameter concerns you?", options: [ { text: "Is it heavy? (Weight)", next: "weight" }, { text: "Does it get hot? (Thermal)", next: "thermal" }, { text: "How clean is the signal? (Noise)", next: "noise" }, { text: "Back to Menu", next: "root_menu" } ] },
    "weight": { text: "Ultra-light! Detached core is only 2.8g. Fully housed, I am 6.6g, vastly reducing the burden on freely moving animals.", options: [ { text: "Good for mice/rats.", next: "specs_menu" } ] },
    "thermal": { text: "I stay cool. Steady-state temperature is 30.5°C, well below the 37°C biological threshold. No active cooling required.", options: [ { text: "Safe confirmed.", next: "specs_menu" } ] },
    "noise": { text: "Crystal clear. Through optimized shielding, my RMS noise floor is 2.68 µV, practically matching the amplifier chip's theoretical limit.", options: [ { text: "Great specs.", next: "specs_menu" } ] },
    "reliability_menu": { text: "I act as physical armor for delicate probes. What is your concern?", options: [ { text: "Lifespan (Cycles)", next: "cycles" }, { text: "What if I align it wrong?", next: "misalignment" }, { text: "Environmental Protection?", next: "protection" }, { text: "Back to Menu", next: "root_menu" } ] },
    "cycles": { text: "Proven by a third-party tester, the system maintains a connection yield of >97% after hundreds of high-intensity mating cycles. The conductive elastomer demonstrates outstanding fatigue resistance and mechanical longevity.", options: [ { text: "Solid.", next: "reliability_menu" } ] },
    "misalignment": { text: "I am self-aligning! The elastomer has 'structural redundancy' (pitch < pad size), naturally forgiving minor manual misalignments.", options: [ { text: "Very forgiving.", next: "reliability_menu" } ] },
    "protection": { text: "The threaded base and potting create a closed isolation chamber. It blocks fluids, dust, and stays rock-solid even if the animal scratches it.", options: [ { text: "True armor.", next: "reliability_menu" } ] },
    "usage_menu": { text: "Designed for researchers. Ask me about usage:", options: [ { text: "Is assembly difficult?", next: "assembly" }, { text: "Compatible Systems?", next: "system" }, { text: "For freely moving animals?", next: "animal" }, { text: "Back to Menu", next: "root_menu" } ] },
    "assembly": { text: "Extremely easy. It's a 'plug-and-play' twist assembly. The built-in foam washer automatically balances the pressure.", options: [ { text: "User friendly.", next: "usage_menu" } ] },
    "system": { text: "High integration! Packs 4 Intan RHD2164 chips. Seamlessly compatible with Intan, Open-Ephys, and NeuroNexus DAQ systems.", options: [ { text: "Perfect.", next: "usage_menu" } ] },
    "animal": { text: "Absolutely. The low profile fits mechanical commutators, allowing natural behavior without cable twisting.", options: [ { text: "Show me the files!", next: "show_badges" } ] },
    "open_source": { text: "E-Link is more than a connector; it's an Open Source infrastructure for neuroengineering. We solve the 'packaging' bottleneck so you can focus on brain science!", options: [ { text: "Awesome! Show me the repo.", next: "show_badges" } ] },
    "show_badges": { text: "Scroll down to the bottom! 👇 Those icons are your gateway to the Code, Fabrication Files, and Full System CAD.", options: [ { text: "Thanks, Guardian!", next: "close" } ] }
};

const dialogData_ZH = {
    "start": { text: "你好！我是易链的问答向导，我致力于为高密度柔性神经探针提供稳健、可靠的信号传输解决方案", options: [ { text: "🎬 观看组装演示视频", next: "play_video" }, { text: "🚀 开启硬核探索！", next: "root_menu" } ] },
    "play_video": { text: "正在启动影院模式，调取视觉数据中...", options: [ { text: "关闭视频", next: "start" } ] },
    "root_menu": { text: "系统已就绪。请选择想要咨询的类别：", options: [ { text: "🌟 核心亮点 (弹性互连与零插拔)", next: "innovation" }, { text: "📊 规格参数 (重量/噪音/温度)", next: "参数菜单" }, { text: "🛡️ 可靠性与物理防护", next: "可靠性菜单" }, { text: "🔧 模块化使用与兼容", next: "usage_menu" }, { text: "🌍 了解本开源项目", next: "open_source" }, { text: "随便看看", next: "close" } ] },
    "innovation": { text: "我引入了各向异性导电弹性体 (ACE)。实现了从“刚性针脚”到“弹性中介层”的范式重构", options: [ { text: "“零插拔力”有什么好处？", next: "零插拔力" }, { text: "什么是“三明治”模块化结构？", next: "模块化" }, { text: "通道数能扩展吗？", next: "可拓展性" }, { text: "返回主菜单", next: "root_menu" } ] },
    "零插拔力": { text: "传统插针不仅难对准，插拔力还会损伤探针。利用“拧瓶盖”原理，将扭矩转化为均匀的轴向压力，物理层面彻底告别断针和弯针！", options: [ { text: "以柔克刚！", next: "innovation" } ] },
    "模块化": { text: "外壳、转接板、放大器板（Headstage）均可独立更换。局部损坏无需整套报废，能显著降低科研团队的维护成本。", options: [ { text: "经济化方案，返回", next: "innovation" } ] },
    "可拓展性": { text: "传统插针方案在极高通道下体积庞大。得益于百微米级导电柱，我在极小体积内规划了 256 → 512 → 1024 通道的演进路线。", options: [ { text: "能够拓展更多，返回", next: "innovation" } ] },
    "参数菜单": { text: "正在读取底层传感器数据... 你想了解什么？", options: [ { text: "对小鼠负担大吗？ (重量)", next: "weight" }, { text: "运行会发热吗？ (热学)", next: "thermal" }, { text: "信号保真度如何？ (噪音)", next: "noise" }, { text: "返回主菜单", next: "root_menu" } ] },
    "weight": { text: "轻量化设计！核心组件仅 2.8g，整机(含外壳)重 6.6g，大幅降低动物的头部负重。", options: [ { text: "很适合自由活动实验", next: "参数菜单" } ] },
    "thermal": { text: "运转时稳态温度仅为 30.5°C，远低于 37°C 的生物阈值，无需任何主动散热。", options: [ { text: "热安全性已确认", next: "参数菜单" } ] },
    "noise": { text: "得益于屏蔽设计，我的实测 RMS 基底噪声低至 2.68 µV，接近放大器芯片的理想数据极限，确保单细胞级的信号保真度。", options: [ { text: "参数稳健", next: "参数菜单" } ] },
    "可靠性菜单": { text: "我是脆弱探针的“防护铠甲”。你想了解哪方面的可靠性？", options: [ { text: "能扭转压合多少次？ (寿命)", next: "cycles" }, { text: "操作时候没完全对准怎么办？", next: "misalignment" }, { text: "动物抓挠和头部组织液有可能侵入？", next: "protection" }, { text: "返回主菜单", next: "root_menu" } ] },
    "cycles": { text: "经数位独立测试者实测，在历经数百次高强度的连续拧转后，我的连接良率依然坚挺在 97% 以上。弹性导电体展现出了极其卓越的抗疲劳寿命。", options: [ { text: "经久耐用", next: "可靠性菜单" } ] },
    "misalignment": { text: "自然免对齐需求，导电柱具备“结构冗余”，允许物理操作上的轻微偏差，对操作者极其友好。", options: [ { text: "容错率高", next: "可靠性菜单" } ] },
    "protection": { text: "没问题！螺纹基座构建了一个封闭的物理防护舱，阻隔体液与粉尘，有效防止动物抓挠产生的破坏。", options: [ { text: "真正的装甲", next: "可靠性菜单" } ] },
    "usage_menu": { text: "易链系统级整合方案降低实验门槛。请问：", options: [ { text: "组装难度大吗？", next: "assembly" }, { text: "可以直接接我的设备吗？", next: "system" }, { text: "动物自由活动实验表现如何？", next: "animal" }, { text: "返回主菜单", next: "root_menu" } ] },
    "assembly": { text: "非常简单。模块机械化结构即拧即用。内部泡沫垫圈会自动完成压力补偿。", options: [ { text: "省时省力", next: "usage_menu" } ] },
    "system": { text: "内部集成 4 颗 Intan的RHD2164芯片。输出信号完美兼容 Intan、Open-Ephys、NeuroNexus 等主流采集工作站。", options: [ { text: "无缝对接", next: "usage_menu" } ] },
    "animal": { text: "极佳！低剖面基座设计适配机械换向器 (Commutator)，线缆不打结，保障动物最自然的行为轨迹。", options: [ { text: "哪里可以获取开源文件？", next: "徽章指引" } ] },
    "open_source": { text: "易链是由美国达特茅斯学院Tianyu Bai主导设计开发的一项脑机探针连接技术，更是属于神经工程社区的开源基础设施。通过解决最后的“互连”短板，设计团队希望让研究者能将更多精力投入到脑科学中！", options: [ { text: "致敬！带我去看看开源仓库", next: "徽章指引" } ] },
    "徽章指引": { text: "一直滑到页面底部 👇！点击下面的GitHub徽章，你可以直接下载制造文件 (Gerber/STL)、BOM 表和完整代码。", options: [ { text: "谢谢易链向导！", next: "close" } ] }
};

// 智能判断当前页面语言 (基于 URL 路由)
const isZhPage = window.location.pathname.includes('/zh');
let currentLang = isZhPage ? 'zh' : 'en';
let dialogData = isZhPage ? dialogData_ZH : dialogData_EN;

const textsEN = ["Welcome to this webpage！", "Thanks for visiting us!", "Stay tuned!"];
const textsZH = ["欢迎访问本网页！", "感谢您的关注！", "欢迎常来访问！"];
let texts = isZhPage ? textsZH : textsEN; 

let vantaEffect;

document.addEventListener("DOMContentLoaded", function() {
    // 0. 🔥 初始化防爆级 Lenis 平滑滚动
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical', gestureDirection: 'vertical',
        smooth: true, mouseMultiplier: 1, smoothTouch: false, touchMultiplier: 2,
    });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);

    if (window.VANTA) { 
        vantaEffect = VANTA.NET({
            el: "#vanta-bg", scale: 1.00, scaleMobile: 1.00, points: 18.00, maxDistance: 28.00, spacing: 16.00, 
            mouseControls: true, touchControls: true, gyroControls: false, minHeight: 200.00, minWidth: 200.00, 
            color: 0x3b82f6, backgroundColor: 0x0a0a0f, showDots: true
        });
    }

    initMeteors();

    // 图片懒加载
    const images = document.querySelectorAll('#main_content img');
    images.forEach((img, index) => {
        if (index < 2) { img.setAttribute('loading', 'eager'); img.setAttribute('fetchpriority', 'high'); } 
        else { if(!img.getAttribute('loading')) img.setAttribute('loading', 'lazy'); }
    });

    // 页面实时访问人数动效
    (function() {
      let currentDisplay = Math.floor(Math.random() * 2) + 1; 
      function initCounter() {
        const counterEl = document.getElementById('live-counter');
        const plusEl = document.getElementById('plus-one');
        if(!counterEl || !plusEl) return;
        
        counterEl.textContent = currentDisplay;

        setInterval(() => {
          const rand = Math.random();
          if (rand > 0.8 && currentDisplay < 3) { 
            const maxCanAdd = 3 - currentDisplay;
            const delta = Math.min(maxCanAdd, (Math.random() > 0.85 ? 2 : 1)); 
            plusEl.textContent = '+' + delta;

            if (delta === 2) {
                plusEl.style.fontWeight = '900';
                plusEl.style.filter = 'brightness(1.5) drop-shadow(0 0 5px #00f2ff)';
            } else {
                plusEl.style.fontWeight = 'bold';
                plusEl.style.filter = 'none';
            }

            plusEl.classList.remove('animate-plus');
            void plusEl.offsetWidth; 
            plusEl.classList.add('animate-plus');
            
            currentDisplay += delta;
            counterEl.textContent = currentDisplay;
            
            const stayDuration = Math.floor(Math.random() * 20000) + 10000;
            setTimeout(() => {
              if (currentDisplay > 1) {
                currentDisplay -= delta;
                counterEl.textContent = currentDisplay;
              }
            }, stayDuration);

          } else if (rand < 0.15 && currentDisplay > 1) {
            currentDisplay--;
            counterEl.textContent = currentDisplay;
          }
        }, 12000); 
      }
      initCounter();
    })();
});

// 打字机效果
let textIdx = 0, charIdx = 0, isDeleting = false;
function type() {
    const currentText = texts[textIdx];
    const display = isDeleting ? currentText.substring(0, charIdx--) : currentText.substring(0, charIdx++);
    document.getElementById('typewriter-text').textContent = display;
    let speed = isDeleting ? 50 : 100;
    if (!isDeleting && charIdx === currentText.length + 1) { isDeleting = true; speed = 2000; } 
    else if (isDeleting && charIdx === 0) { isDeleting = false; textIdx = (textIdx + 1) % texts.length; speed = 500; }
    setTimeout(type, speed);
}

// 流星效果
function initMeteors() {
    const canvas = document.getElementById('meteor-canvas');
    if(!canvas) return;
    const ctx = canvas.getContext('2d');
    let width, height;
    function resizeCanvas() {
        width = window.innerWidth; height = window.innerHeight;
        const dpr = Math.min(window.devicePixelRatio || 1, 2); 
        canvas.width = width * dpr; canvas.height = height * dpr;
        canvas.style.width = `${width}px`; canvas.style.height = `${height}px`;
        ctx.scale(dpr, dpr); 
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Meteor {
        constructor() { this.reset(); }
        reset() {
            this.x = Math.random() * width; this.y = Math.random() * height;
            this.len = Math.random() * 100 + 50; this.speed = Math.random() * 1 + 1;
            this.size = Math.random() * 1 + 0.5; this.angle = (Math.PI * 0.75) + (Math.random() - 0.5) * 0.5;
            this.opacity = 0; this.state = 'fadein'; this.life = 0; this.maxLife = Math.random() * 30 + 20; 
        }
        update() {
            this.x += Math.cos(this.angle) * this.speed; this.y += Math.sin(this.angle) * this.speed;
            if(this.state === 'fadein') { this.opacity += 0.1; if(this.opacity >= 1) this.state = 'active'; } 
            else if(this.state === 'active') { this.life++; if(this.life > this.maxLife) this.state = 'fadeout'; } 
            else if(this.state === 'fadeout') { this.opacity -= 0.05; if(this.opacity <= 0) this.reset(); }
            if(this.x < -100 || this.x > width + 100 || this.y < -100 || this.y > height + 100) this.reset();
        }
        draw() {
            if(this.opacity <= 0) return;
            const tailX = this.x - Math.cos(this.angle) * this.len; const tailY = this.y - Math.sin(this.angle) * this.len;
            const gradient = ctx.createLinearGradient(this.x, this.y, tailX, tailY);
            gradient.addColorStop(0, `rgba(96, 165, 250, ${this.opacity})`); gradient.addColorStop(1, `rgba(59, 130, 246, 0)`);  
            ctx.beginPath(); ctx.moveTo(this.x, this.y); ctx.lineTo(tailX, tailY);
            ctx.strokeStyle = gradient; ctx.lineWidth = this.size; ctx.lineCap = 'round'; ctx.stroke();
        }
    }
    const meteors = []; for(let i=0; i<8; i++) { const m = new Meteor(); m.opacity = 0; m.life = Math.random() * 50; meteors.push(m); }
    function animateMeteors() {
        if(!document.body.classList.contains('modal-active')) {
            ctx.clearRect(0, 0, width, height);
            meteors.forEach(m => { m.update(); m.draw(); });
        }
        requestAnimationFrame(animateMeteors);
    }
    animateMeteors();
}

document.addEventListener("DOMContentLoaded", function() {
    type();
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    const container = document.querySelector('.container');
    const pupils = document.querySelectorAll('.bot-pupil');
    const botContainer = document.getElementById('bot-container');
    const botSpeech = document.getElementById('bot-speech');
        
    const rpgDialogue = document.getElementById('rpg-dialogue');
    const rpgText = document.getElementById('rpg-text');
    const rpgOptions = document.getElementById('rpg-options');
    const rpgClose = document.querySelector('.rpg-close');
    let typeTimer = null;

    // --- 🔥 弹窗与语言路由逻辑 ---
    const welcomeModal = document.getElementById('welcome-modal');
    const modalKeepDarkBtn = document.getElementById('modal-keep-dark-btn');
    const modalSwitchLightBtn = document.getElementById('modal-switch-light-btn');
    const modalLangCheckbox = document.getElementById('modal-lang-toggle-checkbox');
    let modalIsZh = false; 

    // 如果当前已经是中文页面，弹窗默认选中中文状态
    if (isZhPage) {
        modalLangCheckbox.checked = true;
        modalIsZh = true;
        document.querySelectorAll('.m-en').forEach(el => el.style.display = 'none');
        document.querySelectorAll('.m-zh').forEach(el => el.style.display = 'inline');
    }

    setTimeout(() => { welcomeModal.classList.add('show'); document.body.classList.add('modal-active'); }, 10); 

    let idleInterval; let tipIndex = 0;
    function startIdleTips() {
        if(idleInterval) clearInterval(idleInterval);
        const enTips = ["Click me for guide!", "I'm here to help!"];
        const zhTips = ["我是E-Link智能向导", "🤖‘戳’我脑袋与我互动吧！"];
        const runCycle = () => { botSay((currentLang === 'en' ? enTips : zhTips)[tipIndex], 3000); tipIndex = (tipIndex + 1) % 2; };
        runCycle(); idleInterval = setInterval(runCycle, 3500);
    }

    function closeModal() {
        welcomeModal.classList.remove('show');
        document.body.classList.remove('modal-active'); 
        
        // 如果用户在弹窗里切换了语言，触发全局跳转
        if (modalIsZh && currentLang !== 'zh') {
             window.location.href = window.siteBaseUrl + "/zh/";
             return; // 终止后续执行，因为页面马上要刷新了
        } else if (!modalIsZh && currentLang === 'zh') {
             window.location.href = window.siteBaseUrl + "/";
             return;
        }
        
        setTimeout(() => {
            botContainer.classList.add('attention-jump'); 
            startIdleTips();
            setTimeout(() => botContainer.classList.remove('attention-jump'), 3200);
        }, 100);
    }

    modalKeepDarkBtn.addEventListener('click', closeModal);
    modalSwitchLightBtn.addEventListener('click', () => { themeToggle.click(); closeModal(); });

    modalLangCheckbox.addEventListener('change', () => {
        const enTexts = document.querySelectorAll('.m-en');
        const zhTexts = document.querySelectorAll('.m-zh');
        modalIsZh = modalLangCheckbox.checked;
        if (modalIsZh) { enTexts.forEach(el => el.style.display = 'none'); zhTexts.forEach(el => el.style.display = 'inline'); } 
        else { zhTexts.forEach(el => el.style.display = 'none'); enTexts.forEach(el => el.style.display = 'inline'); }
    });

    // --- 主题与物理分页切换逻辑 ---
    const themeToggle = document.getElementById('theme-toggle');
    const langToggle = document.getElementById('lang-toggle');
    langToggle.textContent = isZhPage ? "中 / 英" : "EN / CN";
    
    let isLight = false;
        
    themeToggle.addEventListener('click', () => {
        isLight = !isLight;
        document.body.classList.toggle('light-mode');
        if (isLight) {
            themeToggle.textContent = "🌙"; 
            if (vantaEffect) vantaEffect.setOptions({ color: 0x2563eb, backgroundColor: 0xf1f5f9, points: 12.00, maxDistance: 24.00 });
        } else {
            themeToggle.textContent = "☀️"; 
            if (vantaEffect) vantaEffect.setOptions({ color: 0x3b82f6, backgroundColor: 0x0a0a0f, points: 18.00, maxDistance: 28.00 });
        }
    });

    // 🌟 全新物理跳转路由：点击语言按钮直接跳转到对应页面
    langToggle.addEventListener('click', () => {
        if (currentLang === 'en') {
             window.location.href = window.siteBaseUrl + "/zh/";
        } else {
             window.location.href = window.siteBaseUrl + "/";
        }
    });

    let mouseX = window.innerWidth / 2, mouseY = 100, ticking = false;
    let containerRect = container ? container.getBoundingClientRect() : null;
    window.addEventListener('resize', () => { if(container) containerRect = container.getBoundingClientRect(); });

    window.addEventListener('mousemove', (e) => {
        if (window.innerWidth <= 768 || document.body.classList.contains('modal-active')) return; 
        mouseX = e.clientX; mouseY = e.clientY;
        if (!ticking) {
            window.requestAnimationFrame(() => {
                if(cursorDot) cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
                if(cursorOutline) cursorOutline.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
                if (container) {
                    const rx = (window.innerWidth / 2 - mouseX) / 50; 
                    const ry = (window.innerHeight / 2 - mouseY) / 50;
                    container.style.transform = `rotateY(${rx * -1}deg) rotateX(${ry}deg)`;
                    if(containerRect) {
                        container.style.setProperty("--mouse-x", `${mouseX - containerRect.left}px`);
                        container.style.setProperty("--mouse-y", `${mouseY - containerRect.top}px`);
                    }
                }
                pupils.forEach(p => {
                    const rect = p.parentElement.getBoundingClientRect(); 
                    const cx = rect.left + rect.width / 2, cy = rect.top + rect.height / 2;
                    const angle = Math.atan2(mouseY - cy, mouseX - cx);
                    const dist = Math.min(6, Math.hypot(mouseX - cx, mouseY - cy) / 15);
                    p.style.transform = `translate(calc(-50% + ${Math.cos(angle) * dist}px), calc(-50% + ${Math.sin(angle) * dist}px))`;
                });
                ticking = false;
            });
            ticking = true;
        }
    });

    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if(scrollTimeout) cancelAnimationFrame(scrollTimeout);
        scrollTimeout = requestAnimationFrame(() => {
            const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            const pb = document.getElementById("progress-bar");
            if(pb) pb.style.width = scrolled + "%";
            if(botContainer && window.innerWidth > 768) {
                if(window.scrollY > 200) { botContainer.classList.add('fixed-mode'); } 
                else { botContainer.classList.remove('fixed-mode'); }
            }
        });
    }, { passive: true });

    function botSay(text, duration = 1000) {
        if(!botSpeech || !botContainer || rpgDialogue.classList.contains('active')) return; 
        botSpeech.textContent = text;
        botContainer.classList.add('speaking');
        if(botContainer.speechTimer) clearTimeout(botContainer.speechTimer);
        botContainer.speechTimer = setTimeout(() => botContainer.classList.remove('speaking'), duration);
    }

    const videoModal = document.getElementById('video-modal');
    const guardianVideo = document.getElementById('guardian-video');

    window.openVideoModal = function() {
        videoModal.classList.add('show');
        document.body.classList.add('modal-active');
    }
    window.closeVideoModal = function() {
        videoModal.classList.remove('show');
        document.body.classList.remove('modal-active');
        guardianVideo.pause(); 
    }
    videoModal.addEventListener('click', (e) => { if(e.target === videoModal) closeVideoModal(); });

    function showDialogueNode(nodeKey, isFastMode = false) {
        if (nodeKey === 'play_video') {
            botSay(currentLang === 'en' ? "Accessing Video Feed..." : "正在接入视频信号...", 1000);
            setTimeout(openVideoModal, 1000); return; 
        }
        if(nodeKey === 'close') { 
            closeDialogue(); botContainer.classList.add('interaction-done');
            botSay(currentLang === 'en' ? "Nice chatting with you!" : "很高兴与你交谈！", 3000); return; 
        }  
        
        const node = dialogData[nodeKey]; if(!node) return;
        rpgOptions.innerHTML = ''; 
        if(typeTimer) clearInterval(typeTimer);

        const showButtons = () => {
            node.options.forEach((opt, idx) => {
                const btn = document.createElement('div');
                btn.className = 'rpg-btn'; btn.textContent = '> ' + opt.text;
                const isBackAction = opt.text.includes("Back") || opt.text.includes("返回");
                if(isFastMode) { btn.style.opacity = 1; btn.style.transform = 'translateX(0)'; btn.style.animation = 'none'; } 
                else { btn.style.animationDelay = `${idx * 0.05}s`; }
                btn.onclick = (e) => { e.stopPropagation(); showDialogueNode(opt.next, isBackAction); };
                rpgOptions.appendChild(btn);
            });
        };

        if (isFastMode) { rpgText.textContent = node.text; showButtons(); } 
        else {
            rpgText.textContent = ''; let i = 0;
            typeTimer = setInterval(() => {
                rpgText.textContent += node.text.charAt(i); i++;
                if(i >= node.text.length) { clearInterval(typeTimer); showButtons(); }
            }, 20);
        }
    }

    function openDialogue() {
        if(rpgDialogue.classList.contains('active')) return;
        rpgDialogue.classList.add('active'); botContainer.classList.add('speaking', 'hint-removed'); 
        showDialogueNode('start');
    }

    function closeDialogue() {
        rpgDialogue.classList.remove('active'); botContainer.classList.remove('speaking');
        setTimeout(() => { rpgText.textContent = ''; rpgOptions.innerHTML = ''; }, 300);
    }

    if(botContainer) {
        botContainer.addEventListener('click', (e) => {
            e.stopPropagation();
            if (idleInterval) { clearInterval(idleInterval); idleInterval = null; }
            if(botContainer.speechTimer) clearTimeout(botContainer.speechTimer); 
            botSpeech.textContent = "";                    
            botContainer.classList.remove('speaking'); 
            if(rpgDialogue.classList.contains('active')) closeDialogue(); else openDialogue();
        });
    }

    setTimeout(() => botSay(currentLang === 'en' ? "Click me for guide!" : "点击我答疑解惑", 60000), 1000);

    const badges = document.querySelectorAll('.nav-badges a');
    badges.forEach(b => {
        b.addEventListener('mouseenter', () => {
            document.body.classList.add('badge-hovering', 'hovering');
            if(vantaEffect) vantaEffect.setOptions({ color: 0x60a5fa });
            botSay(currentLang === 'en' ? "Accessing..." : "正在访问...", 1500);
        });
        b.addEventListener('mouseleave', () => {
            document.body.classList.remove('badge-hovering', 'hovering');
            if(vantaEffect) vantaEffect.setOptions({ color: 0x3b82f6 });
        });
        b.addEventListener('click', function(e) {
            e.preventDefault(); const url = this.href;
            badges.forEach((sib, idx) => {
                const img = sib.querySelector('img');
                img.style.animationDelay = `${Math.abs(idx - [...badges].indexOf(this)) * 0.06}s`;
                img.classList.add('rippling');
            });
            setTimeout(() => window.location.href = url, 500);
        });
    });
    
    document.body.addEventListener('mouseover', (e) => {
        if (e.target.closest('a, button, .ctrl-btn, .rpg-btn, #bot-container, .slider')) document.body.classList.add('hovering');
    });
    document.body.addEventListener('mouseout', (e) => {
        if (e.target.closest('a, button, .ctrl-btn, .rpg-btn, #bot-container, .slider')) document.body.classList.remove('hovering');
    });
});
