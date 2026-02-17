---
layout: default
title: E-Link Home
---

<div class="lang-en" markdown="1">

<div class="github-only">
  <p align="center">
    <a href="https://tianyu-bai.github.io/E-Link">
      🌐 Click here to view the interactive website
    </a>
  </p>
</div>

<div align="center" class="nav-badges">
  <a href="#en-overview"><img src="https://img.shields.io/badge/📖_Overview-3b82f6?style=flat-square&logoColor=white" alt="Overview"></a>
  <a href="#en-features"><img src="https://img.shields.io/badge/✨_Features-3b82f6?style=flat-square&logoColor=white" alt="Features"></a>
  <a href="#en-specs"><img src="https://img.shields.io/badge/📊_Specs-3b82f6?style=flat-square&logoColor=white" alt="Specs"></a>
  <a href="#en-components"><img src="https://img.shields.io/badge/🧩_Components-3b82f6?style=flat-square&logoColor=white" alt="Components"></a>
  <a href="#en-bom"><img src="https://img.shields.io/badge/🛠_BOM-3b82f6?style=flat-square&logoColor=white" alt="BOM"></a>
  <a href="#en-downloads"><img src="https://img.shields.io/badge/🔗_Downloads-3b82f6?style=flat-square&logoColor=white" alt="Downloads"></a>
</div>
  
<div align="center">
  <h1 style="border-bottom: none; margin-bottom: 5px; color: #60a5fa; font-size: 2em;">🚀 E-Link(256)</h1>
  
<div align="center">
    <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=30&pause=100&color=60a5fa&center=true&vCenter=true&width=1100&lines=An+Open-Source,+Elastomer+Interconnection-based;Connector+for+Flexible+Neural+Interfaces" />
</div>

  <div align="center" style="margin-top: 15px;">
    <a href="https://sites.dartmouth.edu/fang-group/"><img src="https://img.shields.io/badge/Dartmouth-MINE--Lab-00693E?style=flat-square" alt="MINE Lab"></a>
    <img src="https://img.shields.io/badge/Verified-256ch-FFA500?style=flat-square" alt="Verified" />
    <a href="https://tianyu-bai.github.io/"><img src="https://img.shields.io/badge/Website-Tianyu%20Bai-0077B5?style=flat-square&logo=github&logoColor=white" alt="Website"></a>
    <a href="https://www.linkedin.com/in/tianyubai/"><img src="https://img.shields.io/badge/LinkedIn-Profile-0A66C2?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
     <a href="https://github.com/tianyu-bai/E-Link/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-A31F34?style=flat-square&logo=opensourceinitiative&logoColor=white" alt="License"></a>
  </div>

  <br />
  <div align="center">
 <br>
 <img src="Images/001.PNG" alt="E-Link(256) Exploded View" width="750">
 <p style="margin-top: 5px; font-size: 0.95em; color: #3b82f6;">
   <b>Mating Dynamics (left) and Structural Breakdown (right) of the E-Link(256) </b>
 </p>
</div>
</div>

<style>
/* ===================== 1. 核心设备感知与显隐逻辑 (去重合并版) ===================== */
/* 默认：全部隐藏 */
.pc-tip, .mobile-tip, .pc-only, .mobile-only { 
  display: none !important; 
}

/* 识别电脑 (检测到鼠标等精确指针) */
@media (pointer: fine) {
  .pc-tip, .pc-only { display: inline !important; }
}

/* 识别手机/平板 (检测到手指等粗略指针) */
@media (pointer: coarse) {
  .mobile-tip, .mobile-only { display: inline !important; }
}

/* ========================================= 2. 复杂时间轴与动作动画 (丝滑防闪烁版) ========================================= */
@keyframes timeline-drag-container {
  /* 第一次出场: 0% 到 6.25% */
  0%             { opacity: 0; z-index: 10; }
  0.5%, 5.75%    { opacity: 1; z-index: 10; }
  6.25%, 12%     { opacity: 0; z-index: -1; }
  
  /* 第二次出场: 12.5% 到 18.75% */
  12.5%, 18.25%  { opacity: 1; z-index: 10; }
  18.75%, 55.75% { opacity: 0; z-index: -1; }
  
  /* 第三次出场: 56.25% 到 62.5% */
  56.25%, 62%    { opacity: 1; z-index: 10; }
  62.5%, 100%    { opacity: 0; z-index: -1; }
}

@keyframes timeline-zoom-container {
  /* 第一次出场: 6.25% 到 12.5% */
  0%, 5.75%      { opacity: 0; z-index: -1; }
  6.25%, 12%     { opacity: 1; z-index: 10; }
  12.5%, 18.25%  { opacity: 0; z-index: -1; }
  
  /* 第二次出场: 18.75% 到 25% */
  18.75%, 24.5%  { opacity: 1; z-index: 10; }
  25%, 62%       { opacity: 0; z-index: -1; }
  
  /* 第三次出场: 62.5% 到 68.75% */
  62.5%, 68.25%  { opacity: 1; z-index: 10; }
  68.75%, 100%   { opacity: 0; z-index: -1; }
}

/* --- 手指移动动画保持你原版的内容绝对不变 --- */
@keyframes move-drag-hand {
  0% { transform: translateX(-40px) rotate(-15deg); opacity: 0; }
  20% { opacity: 1; }
  80% { opacity: 1; }
  100% { transform: translateX(40px) rotate(5deg); opacity: 0; }
}

@keyframes move-zoom-left-diagonal {
  0% { transform: translate(-30px, 15px); opacity: 0; } 
  20% { opacity: 1; }
  80% { opacity: 1; }
  100% { transform: translate(-90px, 65px); opacity: 0; } 
}

@keyframes move-zoom-right-diagonal {
  0% { transform: translate(30px, -15px); opacity: 0; } 
  20% { opacity: 1; }
  80% { opacity: 1; }
  100% { transform: translate(90px, -65px); opacity: 0; } 
}

/* ========================================= 3. 容器与图标样式 ========================================= */
.gesture-overlay {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  text-align: center;
  width: 220px; height: 150px;
  display: flex; flex-direction: column; justify-content: center; align-items: center;
}

.mode-drag { animation: timeline-drag-container 48s infinite; }
.mode-zoom { animation: timeline-zoom-container 48s infinite; }

.icon-box { position: relative; height: 80px; width: 100%; margin-bottom: 5px; }

.hand-icon {
  font-size: 50px; position: absolute; top: 20px; left: 50%;
  text-shadow: 2px 4px 0px rgba(0,0,0,0.8), 0 0 10px rgba(0,0,0,0.5);
  will-change: transform, opacity;
}

.mode-drag .hand-icon { margin-left: -25px; animation: move-drag-hand 1.5s infinite ease-in-out; }
.mode-zoom .hand-icon { margin-left: -25px; top: 15px; }
.mode-zoom .hand-left { animation: move-zoom-left-diagonal 1.5s infinite ease-in-out; }
.mode-zoom .hand-right { animation: move-zoom-right-diagonal 1.5s infinite ease-in-out; }

.gesture-text {
  color: white; font-family: sans-serif; font-weight: bold; font-size: 16px;
  text-shadow: 0 2px 4px black; background: rgba(0,0,0,0.4);
  padding: 4px 12px; border-radius: 12px; white-space: nowrap;
}

/* ===================== 4. HUD 与交互反馈 ===================== */
.gesture-hud {
  position: absolute; 
  top: 12px; 
  left: 50%;
  transform: translateX(-50%); 
  display: flex; 
  align-items: center;
  gap: 25px; /* 统一使用 25px */
  font-size: 13px; 
  font-family: system-ui, sans-serif;
  color: rgba(255, 255, 255, 0.65); 
  background: rgba(15, 23, 42, 0.45);
  border: 1px solid rgba(59,130,246,0.25); 
  padding: 6px 10px;
  border-radius: 20px; 
  white-space: nowrap; 
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px); 
  pointer-events: none; 
  transition: opacity 0.4s ease; 
  z-index: 5;
}

.gesture-hidden { opacity: 0 !important; visibility: hidden !important; pointer-events: none !important; animation: none !important; }
.gesture-hidden * { animation: none !important; }

/* 动画锁：不在屏幕里就暂停，进了屏幕再播放 */
.gesture-overlay, .gesture-overlay * { animation-play-state: paused !important; }
.gesture-overlay.gesture-active, .gesture-overlay.gesture-active * { animation-play-state: running !important; }

.reset-btn {
  position: absolute; bottom: 16px; left: 16px; z-index: 10;
  background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(59, 130, 246, 0.3);
  color: rgba(255, 255, 255, 0.8); border-radius: 8px; padding: 6px 12px;
  font-family: system-ui, sans-serif; font-size: 12px; cursor: pointer;
  backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px);
  transition: all 0.3s ease; display: flex; align-items: center; gap: 6px;
}
.reset-btn:hover { background: rgba(59, 130, 246, 0.4); color: #fff; transform: scale(1.05); }

kbd {
  background-color: rgba(255, 255, 255, 0.1); border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.3); box-shadow: 0 1px 1px rgba(0,0,0,0.2);
  font-family: inherit; font-size: 0.9em; font-weight: 600; padding: 1px 4px; margin: 0 2px; color: #60a5fa;
}

/* ===================== 5. 模型全局基础样式 ===================== */
.custom-model-viewer {
  width: 100%; max-width: 100vw; box-sizing: border-box; height: 460px;
  background: transparent; border-radius: 16px; border: 1px solid rgba(59,130,246,0.3);
  outline: none; overflow: hidden; 
  /* 使用 3D 硬件加速层，防止重绘影响 GIF */
  transform: translateZ(0); 
  backface-visibility: hidden; 
  touch-action: pan-y;
}

.custom-model-viewer:focus, .custom-model-viewer:active, .custom-model-viewer:focus-visible {
  outline: none !important; box-shadow: none !important; border: 1px solid rgba(59,130,246,0.3) !important;
}

.model-block { 
  max-width: 100vw !important; 
  /* 将原本的 40px 和 60px 缩减，消除视觉间隔 */
  margin-top: 5px !important;  
  margin-bottom: 15px !important; 
}
model-viewer::part(interaction-prompt), model-viewer::part(default-progress-bar) { display: none !important; }

.model-watermark-text {
  position: absolute; bottom: 12px; right: 16px; font-family: 'JetBrains Mono', monospace;
  font-size: 10px; color: rgba(255, 255, 255, 0.25); pointer-events: none; z-index: 5;
  system-ui, -apple-system, sans-serif;
  font-weight: 400;
}
  @keyframes text-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

  

/* 加一根淡淡的分隔线 */
.gesture-hud span + span {
  position: relative;
  padding-left: 5px;
}

.gesture-hud span + span::before {
  content: "";
  position: absolute;
  left: -12px; /* 放在 gap 的中间 */
  top: 20%;
  height: 60%;
  width: 1px;
  background: rgba(255, 255, 255, 0.2); /* 淡淡的分隔线 */
}
  
/* ===================== E-Link 动态仪表盘样式 ===================== */
/* ===================== 0. 全局防频闪保护 ===================== */
.nav-badges img, .github-only img, a img {
  transform: translateZ(0);
  backface-visibility: hidden;
  -webkit-font-smoothing: antialiased;
}

/* ===================== E-Link 动态仪表盘样式 (响应式 + 6秒循环版) ===================== */
.elink-dynamic-dashboard {
  width: 100%; max-width: 760px; margin: 20px auto; padding: 5px;
}
.metrics-grid {
  display: flex; justify-content: space-around; align-items: center; 
  flex-wrap: nowrap; /* 🚨 核心：强制不换行，实现手机端并排 */
  gap: 15px; width: 100%;
}
.metric-card.glass-panel {
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(59, 130, 246, 0.3); border-radius: 12px;
  padding: 15px 5px; width: 32%; /* 强制三等分 */
  box-sizing: border-box; box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
  transition: transform 0.3s ease; text-align: center;
}
.chart-box { position: relative; width: 120px; height: 120px; margin: 0 auto; }
.chart-box svg { width: 100%; height: 100%; transform: rotate(-90deg); }
.bg-ring { fill: none; stroke: rgba(255, 255, 255, 0.1); stroke-width: 6; }

/* 🚨 核心：纯 CSS 实现 6秒无限循环圆环绘制，不吃 JS 性能 */
.fg-ring {
  fill: none; stroke-width: 6; stroke-linecap: round;
  stroke-dasharray: 283; stroke-dashoffset: 283; 

.weight-color { stroke: #10b981; filter: drop-shadow(0 0 6px rgba(16, 185, 129, 0.6)); } 
.channel-color { stroke: #3b82f6; filter: drop-shadow(0 0 6px rgba(59, 130, 246, 0.6)); } 
.pcb-color { stroke: #f59e0b; filter: drop-shadow(0 0 6px rgba(245, 158, 11, 0.6)); }    
.inner-content { position: absolute; top: 0; left: 0; right: 0; bottom: 0; display: flex; flex-direction: column; justify-content: center; align-items: center; }
.inner-content .label { font-size: 10px; font-weight: 700; color: #94a3b8; margin-bottom: 2px; }
.inner-content .number-container { display: flex; align-items: baseline; justify-content: center; }
.inner-content .number { font-family: 'JetBrains Mono', monospace; font-size: 32px; font-weight: 800; color: #ffffff; text-shadow: 0 2px 4px rgba(0,0,0,0.5); }
.inner-content .unit { font-size: 16px; font-weight: bold; color: #cbd5e1; margin-left: 2px; }
.inner-content .sub { font-size: 10px; color: rgba(148, 163, 184, 0.8); margin-top: 2px; }

/* 🚨 核心：手机端极限优化 (解决卡顿与尺寸问题) */
@media (max-width: 600px) {
  .metrics-grid { gap: 8px; }
  .metric-card.glass-panel {
    padding: 10px 2px;
    background: rgba(15, 23, 42, 0.85); /* 稍微调暗背景 */
    backdrop-filter: none; /* 🔴 关闭毛玻璃，彻底解决手机端滚动卡顿闪烁 */
    -webkit-backdrop-filter: none;
  }
  .chart-box { width: 75px; height: 75px; } /* 缩小圆环，适应手机三列 */
  .inner-content .number { font-size: 20px; }
  .inner-content .unit { font-size: 12px; }
  .inner-content .label { font-size: 8px; font-family: sans-serif !important; letter-spacing: 0 !important; }
  .inner-content .sub { display: none; /* 隐藏副标题，让主数据在手机上更清晰 */ }
}
    
  /* ===================== 高级 3D 封面特效 (HUD) ===================== */
/* 1. 双环反向旋转加载器 */
.cyber-loader {
  position: relative;
  width: 50px; height: 50px;
}
.cyber-loader::before, .cyber-loader::after {
  content: ''; position: absolute; border-radius: 50%;
}
.cyber-loader::before {
  top: 0; left: 0; right: 0; bottom: 0;
  border: 2.5px solid transparent;
  border-top-color: #60a5fa; border-bottom-color: #60a5fa;
  animation: spin 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
  box-shadow: 0 0 10px rgba(96, 165, 250, 0.5);
}
.cyber-loader::after {
  top: 8px; left: 8px; right: 8px; bottom: 8px;
  border: 2px solid transparent;
  border-left-color: #3b82f6; border-right-color: #3b82f6;
  animation: spin-reverse 1s linear infinite;
}
@keyframes spin-reverse { to { transform: rotate(-360deg); } }

/* 2. 四角定位框 */
.hud-corner {
  position: absolute; width: 25px; height: 25px;
  border: 2px solid rgba(96, 165, 250, 0.6);
  box-shadow: 0 0 8px rgba(59, 130, 246, 0.4);
}
.hud-tl { top: 20px; left: 20px; border-right: none; border-bottom: none; }
.hud-tr { top: 20px; right: 20px; border-left: none; border-bottom: none; }
.hud-bl { bottom: 20px; left: 20px; border-right: none; border-top: none; }
.hud-br { bottom: 20px; right: 20px; border-left: none; border-top: none; }

/* 3. 扫描线特效 */
.scanline {
  position: absolute; top: 0; left: 0; width: 100%; height: 3px;
  background: linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.8), transparent);
  box-shadow: 0 0 15px rgba(59, 130, 246, 0.8);
  animation: scan-sweep 3s linear infinite;
  opacity: 0.6;
}
@keyframes scan-sweep {
  0% { top: 0; opacity: 0; }
  10% { opacity: 0.6; }
  90% { opacity: 0.6; }
  100% { top: 100%; opacity: 0; }
}
</style>

## 🔬 Interactive 3D Model: E-Link Headstage Integration
 
<div class="model-block" align="center" style="position: relative; max-width: 760px; margin: 0 auto; min-height: 460px;">
  <model-viewer
    class="custom-model-viewer"
    src="{{ '/Videos/On skull_3.16MB.glb' | relative_url }}"
    alt="E Link on Skull 3D Model"
    loading="lazy"   reveal="manual"
    poster="{{ '/Images/poster.webp' | relative_url }}"
    camera-controls interpolation-decay="200" bounds="tight" field-of-view="30deg" auto-rotate  rotation-per-second="15deg"
    interaction-prompt="none" environment-image="neutral" exposure="0.75" shadow-intensity="0" tone-mapping="commerce">

    <div slot="poster" style="position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; width: 100%; background: radial-gradient(circle at center, #111827 0%, #020617 100%); font-family: 'JetBrains Mono', monospace; overflow: hidden; border-radius: 16px;">
      <div style="position: absolute; inset: 0; background-image: linear-gradient(rgba(59, 130, 246, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.08) 1px, transparent 1px); background-size: 25px 25px; z-index: 0;"></div>
      <div class="scanline" style="z-index: 1;"></div>
      <div class="hud-corner hud-tl" style="z-index: 1;"></div>
      <div class="hud-corner hud-tr" style="z-index: 1;"></div>
      <div class="hud-corner hud-bl" style="z-index: 1;"></div>
      <div class="hud-corner hud-br" style="z-index: 1;"></div>
      <div style="z-index: 2; display: flex; flex-direction: column; align-items: center;">
        <div class="cyber-loader"></div>
        <p style="margin-top: 25px; margin-bottom: 5px; font-size: 0.95rem; font-weight: 600; letter-spacing: 3px; color: #93c5fd; text-shadow: 0 0 10px rgba(96, 165, 250, 0.8); animation: text-blink 1.5s ease-in-out infinite;">INITIALIZING 3D SIGNAL...</p>
        <p style="margin: 0; font-size: 0.65rem; color: rgba(148, 163, 184, 0.8); letter-spacing: 1px;">[ SCROLL TO REVEAL MODEL ]</p>
      </div>
    </div>
    
    <div class="model-watermark-text">Copyright © 2026 Tianyu Bai</div>

<div class="gesture-hud">
  <span>↺ Rotate: Drag</span>
  <span class="pc-only">Zoom: Ctrl + 🖱 Wheel/Trackpad Pinch</span>
  <span class="mobile-only">Zoom: Pinch</span>
</div>

<div class="gesture-overlay mode-zoom">
  <div class="icon-box">
    <div class="hand-icon hand-left">👉</div>
    <div class="hand-icon hand-right">👈</div>
  </div>
  <div class="gesture-text">
    <span class="pc-tip">Ctrl + 🖱️Wheel to Zoom</span>
    <span class="mobile-tip">Pinch with two fingers to Zoom</span>
  </div>
</div>

    <div class="gesture-overlay mode-drag">
      <div class="icon-box"><div class="hand-icon">👆</div></div>
      <div class="gesture-text">Drag to Rotate</div>
    </div>
    
    <button class="reset-btn"
  onclick="
    const mv = this.closest('model-viewer');
    mv.setAttribute('camera-orbit','45deg 55deg auto');
    mv.setAttribute('field-of-view','30deg');
  ">
      ⟲ Reset View
    </button>
  </model-viewer>
</div>

## 🔬 E-Link – 3D Interactive View
 
<div class="model-block" align="center" style="position: relative; max-width: 760px; margin: 0 auto; min-height: 460px;">
  <model-viewer
    class="custom-model-viewer"
    src="{{ '/Videos/Whole_2.34MB.glb' | relative_url }}"
    alt="E Link 3D Model"
    loading="lazy"       reveal="manual"
    poster="{{ '/Images/poster.webp' | relative_url }}"
    camera-controls interpolation-decay="200" bounds="tight" field-of-view="30deg" auto-rotate  rotation-per-second="15deg"
    interaction-prompt="none" environment-image="neutral" exposure="0.75" shadow-intensity="0" tone-mapping="commerce">

    <div slot="poster" style="position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; width: 100%; background: radial-gradient(circle at center, #111827 0%, #020617 100%); font-family: 'JetBrains Mono', monospace; overflow: hidden; border-radius: 16px;">
      <div style="position: absolute; inset: 0; background-image: linear-gradient(rgba(59, 130, 246, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.08) 1px, transparent 1px); background-size: 25px 25px; z-index: 0;"></div>
      <div class="scanline" style="z-index: 1;"></div>
      <div class="hud-corner hud-tl" style="z-index: 1;"></div>
      <div class="hud-corner hud-tr" style="z-index: 1;"></div>
      <div class="hud-corner hud-bl" style="z-index: 1;"></div>
      <div class="hud-corner hud-br" style="z-index: 1;"></div>
      <div style="z-index: 2; display: flex; flex-direction: column; align-items: center;">
        <div class="cyber-loader"></div>
        <p style="margin-top: 25px; margin-bottom: 5px; font-size: 0.95rem; font-weight: 600; letter-spacing: 3px; color: #93c5fd; text-shadow: 0 0 10px rgba(96, 165, 250, 0.8); animation: text-blink 1.5s ease-in-out infinite;">INITIALIZING 3D SIGNAL...</p>
        <p style="margin: 0; font-size: 0.65rem; color: rgba(148, 163, 184, 0.8); letter-spacing: 1px;">[ SCROLL TO REVEAL MODEL ]</p>
      </div>
    </div>
    
    <div class="model-watermark-text">Copyright © 2026 Tianyu Bai</div>
    
<div class="gesture-hud">
  <span>↺ Rotate: Drag</span>
  <span class="pc-only">Zoom: Ctrl + 🖱 Wheel/Trackpad Pinch</span>
  <span class="mobile-only">Zoom: Pinch</span>
</div>

<div class="gesture-overlay mode-zoom">
  <div class="icon-box">
    <div class="hand-icon hand-left">👉</div>
    <div class="hand-icon hand-right">👈</div>
  </div>
  <div class="gesture-text">
    <span class="pc-tip">Ctrl + 🖱️Wheel to Zoom</span>
    <span class="mobile-tip">Pinch with two fingers to Zoom</span>
  </div>
</div>
    <div class="gesture-overlay mode-drag">
      <div class="icon-box"><div class="hand-icon">👆</div></div>
      <div class="gesture-text">Drag to Rotate</div>
    </div>
    
   <button class="reset-btn"
  onclick="
    const mv = this.closest('model-viewer');
    mv.setAttribute('camera-orbit','45deg 55deg auto');
    mv.setAttribute('field-of-view','30deg');
  ">
      ⟲ Reset View
    </button>
  </model-viewer>
</div>

## 🔬 256Ch Customized Headstage – 3D Interactive View

<div class="model-block" align="center" style="position: relative; max-width: 760px; margin: 0 auto; min-height: 460px;">
  <model-viewer
    class="custom-model-viewer"
    src="{{ '/Videos/3D_1.85MB.glb' | relative_url }}"
    alt="E-Link 256-Channel Custom Headstage 3D Model" 
    loading="lazy"       reveal="manual"
    poster="{{ '/Images/poster.webp' | relative_url }}"
    camera-controls interpolation-decay="200" bounds="tight" field-of-view="30deg" auto-rotate  rotation-per-second="15deg"
    interaction-prompt="none" environment-image="neutral" exposure="0.75" shadow-intensity="0" tone-mapping="commerce">

    <div slot="poster" style="position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; width: 100%; background: radial-gradient(circle at center, #111827 0%, #020617 100%); font-family: 'JetBrains Mono', monospace; overflow: hidden; border-radius: 16px;">
      <div style="position: absolute; inset: 0; background-image: linear-gradient(rgba(59, 130, 246, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.08) 1px, transparent 1px); background-size: 25px 25px; z-index: 0;"></div>
      <div class="scanline" style="z-index: 1;"></div>
      <div class="hud-corner hud-tl" style="z-index: 1;"></div>
      <div class="hud-corner hud-tr" style="z-index: 1;"></div>
      <div class="hud-corner hud-bl" style="z-index: 1;"></div>
      <div class="hud-corner hud-br" style="z-index: 1;"></div>
      <div style="z-index: 2; display: flex; flex-direction: column; align-items: center;">
        <div class="cyber-loader"></div>
        <p style="margin-top: 25px; margin-bottom: 5px; font-size: 0.95rem; font-weight: 600; letter-spacing: 3px; color: #93c5fd; text-shadow: 0 0 10px rgba(96, 165, 250, 0.8); animation: text-blink 1.5s ease-in-out infinite;">INITIALIZING 3D SIGNAL...</p>
        <p style="margin: 0; font-size: 0.65rem; color: rgba(148, 163, 184, 0.8); letter-spacing: 1px;">[ SCROLL TO REVEAL MODEL ]</p>
      </div>
    </div>
    
    <div class="model-watermark-text">Copyright © 2026 Tianyu Bai</div>
    
<div class="gesture-hud">
  <span>↺ Rotate: Drag</span>
  <span class="pc-only">Zoom: Ctrl + 🖱 Wheel/Trackpad Pinch</span>
  <span class="mobile-only">Zoom: Pinch</span>
</div>

<div class="gesture-overlay mode-zoom">
  <div class="icon-box">
    <div class="hand-icon hand-left">👉</div>
    <div class="hand-icon hand-right">👈</div>
  </div>
  <div class="gesture-text">
    <span class="pc-tip">Ctrl + 🖱️Wheel to Zoom</span>
    <span class="mobile-tip">Pinch with two fingers to Zoom</span>
  </div>
</div>
    <div class="gesture-overlay mode-drag">
      <div class="icon-box"><div class="hand-icon">👆</div></div>
      <div class="gesture-text">Drag to Rotate</div>
 </div>
   <button class="reset-btn"
  onclick="
    const mv = this.closest('model-viewer');
    mv.setAttribute('camera-orbit','45deg 55deg auto');
    mv.setAttribute('field-of-view','30deg');
  ">
      ⟲ Reset View
    </button>
  </model-viewer>
</div> 

<span id="en-overview"></span>
## 📖 Overview

**E-Link** (Elastomer Interconnection-based connector) is an open-source, miniature pedestal connector system based on elastomer interconnection. It provides a robust, scalable interface for flexible neural probes, specifically engineered for chronic applications in freely moving animals.

<div align="center">
 <br>
 <img src="Videos/Demo%20new%20new.gif" 
       alt="ELINK-256 Assembly Demo GIF" 
       width="750" 
       class="gif-blend" 
       style="border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); display: block;">
</div>

---

<div class="elink-dynamic-dashboard" align="center">
  <div class="metrics-grid">
    
    <div class="metric-card glass-panel" data-percent="100" data-value="2.8" data-is-float="true">
      <div class="chart-box">
        <svg viewBox="0 0 100 100">
          <circle class="bg-ring" cx="50" cy="50" r="45"></circle>
          <circle class="fg-ring weight-color" cx="50" cy="50" r="45"></circle>
        </svg>
        <div class="inner-content">
          <div class="label">WEIGHT</div>
          <div class="number-container">
            <span class="number count-up">0</span><span class="unit">g</span>
          </div>
          <div class="sub">Ultra-light</div>
        </div>
      </div>
    </div>

    <div class="metric-card glass-panel" data-percent="100" data-value="256" data-is-float="false">
      <div class="chart-box">
        <svg viewBox="0 0 100 100">
          <circle class="bg-ring" cx="50" cy="50" r="45"></circle>
          <circle class="fg-ring channel-color" cx="50" cy="50" r="45"></circle>
        </svg>
        <div class="inner-content">
          <div class="label">CHANNELS</div>
          <div class="number-container">
            <span class="number count-up">0</span>
          </div>
          <div class="sub">High-Density</div>
        </div>
      </div>
    </div>

    <div class="metric-card glass-panel" data-percent="100" data-value="4" data-is-float="false">
      <div class="chart-box">
        <svg viewBox="0 0 100 100">
          <circle class="bg-ring" cx="50" cy="50" r="45"></circle>
          <circle class="fg-ring pcb-color" cx="50" cy="50" r="45"></circle>
        </svg>
        <div class="inner-content">
          <div class="label">PCB LAYERS</div>
          <div class="number-container">
            <span class="number count-up">0</span>
          </div>
          <div class="sub">Custom Routing</div>
        </div>
      </div>
    </div>

  </div>
</div>

> [!NOTE]
> **Key Innovation:** The system integrates two high-density PCBs, an anisotropic elastomeric contact interface, and a lightweight pedestal housing into a fully integrated, headstage-ready solution.

---

<span id="en-specs"></span>
### 📊 Quick Specifications

<div style="width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; padding-bottom: 10px;">
  <table style="margin-left: auto; margin-right: auto; width: 90%; min-width: 600px; text-align: center; border-collapse: collapse; border: 1px solid #e1e4e8;">
   <thead>
     <tr style="background-color: #f6f8fa; border-bottom: 2px solid #e1e4e8;">
       <th style="padding: 10px; border: 1px solid #e1e4e8;">Specification</th>
       <th style="padding: 10px; border: 1px solid #e1e4e8;">E-Link(256)_V1.0</th>
     </tr>
   </thead>
   <tbody>
     <tr>
       <td style="padding: 8px; border: 1px solid #e1e4e8;"><b>Channel Count</b></td>
       <td style="padding: 8px; border: 1px solid #e1e4e8;">128 or 256 Channels (Single/Dual SPI Port support)</td>
     </tr>
     <tr>
       <td style="padding: 8px; border: 1px solid #e1e4e8;"><b>Total Mass</b></td>
       <td style="padding: 8px; border: 1px solid #e1e4e8;">6.6 g (with housing)<br>2.8 g (without housing)</td>
     </tr>
     <tr>
       <td style="padding: 8px; border: 1px solid #e1e4e8;"><b>Interconnect Type</b></td>
       <td style="padding: 8px; border: 1px solid #e1e4e8;">Solderless Anisotropic Elastomer</td>
     </tr>
     <tr>
       <td style="padding: 8px; border: 1px solid #e1e4e8;"><b>Compatible Acquisition System</b></td>
       <td style="padding: 8px; border: 1px solid #e1e4e8;">Intan Recording Controller (512ch/1024ch)<br>Open-Ephys DAQ box<br>NeuroNexus Smartbox<br>OmniPlex DAQ box</td>
     </tr>
     <tr>
       <td style="padding: 8px; border: 1px solid #e1e4e8;"><b>Housing Material</b></td>
       <td style="padding: 8px; border: 1px solid #e1e4e8;">3D-Printed PEEK / Surgical Grade Resin</td>
     </tr>
   </tbody>
 </table>
</div>

---

<span id="en-features"></span>
## ✨ Key Features
<div class="species-compatibility-container" align="center" style="margin: 40px auto; max-width: 760px;">
  <h3 style="color: #60a5fa; margin-bottom: 20px; font-family: sans-serif;">🌍 Cross-Species Scalability</h3>
  
  <div class="species-glass-box">
    <svg class="connection-lines" viewBox="0 0 600 300" preserveAspectRatio="xMidYMid meet">
      <path class="base-line" d="M300,150 L100,220" />
      <path class="base-line" d="M300,150 L300,250" />
      <path class="base-line" d="M300,150 L500,220" />
      
      <path class="pulse-line" d="M300,150 L100,220" />
      <path class="pulse-line" d="M300,150 L300,250" />
      <path class="pulse-line" d="M300,150 L500,220" />
    </svg>

    <div class="node center-node">
      <div class="hex-border">
        <img src="https://img.icons8.com/external-solid-style-lines-studio/50/60a5fa/external-microchip-artificial-intelligence-solid-style-lines-studio.png" alt="E-Link Core" width="40" />
      </div>
      <div class="node-text pulse-text">E-Link (256)</div>
    </div>

    <div class="animal-nodes">
      
      <div class="node sub-node">
        <div class="icon-circle mouse-glow">
          <span style="font-size: 30px;">🐁</span>
        </div>
        <div class="node-title">Mouse</div>
        <div class="node-desc">Housing Removed<br><b><font color="#10b981">2.8g</font> Payload</b></div>
      </div>

      <div class="node sub-node" style="margin-top: 30px;">
        <div class="icon-circle rat-glow">
          <span style="font-size: 30px;">🐀</span>
        </div>
        <div class="node-title">Rat</div>
        <div class="node-desc">Standard Implant<br><b><font color="#3b82f6">6.6g</font> Total</b></div>
      </div>

      <div class="node sub-node">
        <div class="icon-circle monkey-glow">
          <span style="font-size: 30px;">🐒</span>
        </div>
        <div class="node-title">Macaque</div>
        <div class="node-desc">High Durability<br><b>Multi-Array Scalable</b></div>
      </div>

    </div>
  </div>
</div>

<style>
/* ===================== 跨物种拓扑动画 CSS ===================== */
.species-glass-box {
  position: relative;
  background: rgba(15, 23, 42, 0.4);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 16px;
  padding: 30px 20px;
  min-height: 320px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.connection-lines {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  z-index: 1; pointer-events: none;
}

.base-line {
  fill: none; stroke: rgba(255, 255, 255, 0.1); stroke-width: 2;
}

.pulse-line {
  fill: none; stroke: #60a5fa; stroke-width: 3;
  stroke-dasharray: 15 100; /* 光点长度和间距 */
  animation: data-flow 2s linear infinite;
  filter: drop-shadow(0 0 5px rgba(96, 165, 250, 0.8));
}

@keyframes data-flow {
  from { stroke-dashoffset: 115; }
  to { stroke-dashoffset: 0; }
}

.node {
  position: relative; z-index: 2;
  display: flex; flex-direction: column; align-items: center;
}

.center-node { margin-bottom: 20px; }

.hex-border {
  width: 70px; height: 70px;
  background: radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%);
  border: 2px solid #3b82f6; border-radius: 12px;
  display: flex; justify-content: center; align-items: center;
  box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

.node-text {
  margin-top: 10px; font-weight: bold; color: #fff;
  font-family: 'JetBrains Mono', monospace; font-size: 14px;
}
.pulse-text { text-shadow: 0 0 8px rgba(96, 165, 250, 0.8); }

.animal-nodes {
  display: flex; justify-content: space-around; width: 100%;
}

.icon-circle {
  width: 60px; height: 60px; border-radius: 50%;
  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.2);
  display: flex; justify-content: center; align-items: center;
  transition: all 0.3s ease;
}
.icon-circle:hover { transform: scale(1.1); border-color: #60a5fa; background: rgba(96, 165, 250, 0.1); }

/* 三种动物的不同光环标识 */
.mouse-glow { box-shadow: 0 0 10px rgba(16, 185, 129, 0.3); }
.rat-glow { box-shadow: 0 0 10px rgba(59, 130, 246, 0.3); }
.monkey-glow { box-shadow: 0 0 10px rgba(245, 158, 11, 0.3); }

.node-title { margin-top: 8px; font-weight: bold; color: #e2e8f0; font-size: 14px; }
.node-desc { margin-top: 4px; color: #94a3b8; font-size: 11px; text-align: center; line-height: 1.4; font-family: sans-serif; }

/* 手机端响应式调整 */
@media (max-width: 600px) {
  .species-glass-box { padding: 20px 5px; }
  .animal-nodes { padding: 0 10px; }
  .icon-circle { width: 45px; height: 45px; }
  .icon-circle span { font-size: 24px !important; }
  .node-title { font-size: 12px; }
  .node-desc { font-size: 9px; }
  .connection-lines { display: none; /* 手机端连线可能不对齐，直接隐藏只留卡片 */ }
}
</style>

* **⚡ 256-Channel High-Density Interface**
 Compact pedestal footprint supporting high-density acquisition without increasing surgical overhead.
* **🔌 Solderless Elastomeric Interconnect**
 Uses anisotropic conductive elastomer for repeatable, alignment-tolerant electrical contact.
* **🐭 Optimized for In-Vivo Research**
 Minimal Implant Footprint: Core components weigh only 2.8g (with housing removed), reducing head-heavy behavior and improving animal welfare during long-term recording sessions.
* **🛠️ Modular & Scalable**
 Separable housing, PCBs, and protective cap for rapid iteration and troubleshooting.
* **🧪 Surgical-Grade Design**
 Textured sidewalls for superior adhesion with dental cement or UV-curable resin.
<div align="center">
 <img src="Videos/Animation%20repeat.gif" 
      alt="ELINK-256 Animation GIF" 
      class="gif-blend" 
      width="500" 
      style="border-radius: 6px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); display: block;">
</div>

---

<span id="en-components"></span>
## 🧩 System Components

<div align="center">
 <table border="1" style="border-collapse: collapse; width: 90%; text-align: center;">
   <thead>
     <tr style="background-color: #f2f2f2;">
       <th>Component</th>
       <th>Description</th>
     </tr>
   </thead>
   <tbody>
     <tr>
       <td><b>Pedestal Housing</b></td>
       <td>3D-printed/machined pedestal providing structural support and cranial fixation</td>
     </tr>
     <tr>
       <td><b>Customized 256Ch Headstage</b></td>
       <td>Form-factor optimized recording interface for high-density 128/256-channel signal acquisition</td>
     </tr>
     <tr>
       <td><b>Foam Washer</b></td>
       <td>Provides compliant compression to ensure uniform electrical contact across the elastomeric interface</td>
     </tr>
     <tr>
       <td><b>Adapter PCB</b></td>
       <td>High-density 4-layer PCB for routing signals from thin-film probes to headstage ball array pattern</td>
     </tr>
     <tr>
       <td><b>Surgical Cap</b></td>
       <td>Protective enclosure preserving electrical and mechanical integrity throughout chronic experiments</td>
     </tr>
   </tbody>
 </table>
</div>

---

<span id="en-bom"></span>
### 🛠 Bill of Materials (BOM) of the headstage

<div align="center">
  <img src="Images/256HD.png" 
       alt="256Ch Headstage PCBA Assembly" 
       width="500" 
       style="border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); margin-bottom: 20px;">
  <p style="margin-top: 5px; font-size: 0.9em; color: #64748b;">
    <b>Assembled 256-Channel Headstage (Top View)</b>
  </p>
</div>

<div align="center">
  <img src="Videos/Top PCB explosive new.gif" 
       alt="4-Layer PCB Stackup Explosion" 
       width="600" 
       style="border-radius: 8px; margin-top: 10px;">
  <p style="margin-top: 5px; font-size: 0.9em; color: #64748b;">
    <b> 4-Layer Routing Structure (Top to Bottom)</b>
  </p>
</div>

<div style="width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; padding-bottom: 10px;">
  <table style="margin-left: auto; margin-right: auto; width: 90%; min-width: 600px; text-align: center; border-collapse: collapse; border: 1px solid #e1e4e8;">
   <thead>
     <tr style="background-color: #f6f8fa; border-bottom: 2px solid #e1e4e8;">
       <th style="padding: 10px; border: 1px solid #e1e4e8; text-align: center;">Component</th>
       <th style="padding: 10px; border: 1px solid #e1e4e8; text-align: center;">Description</th>
       <th style="padding: 10px; border: 1px solid #e1e4e8; text-align: center;">Qty</th>
       <th style="padding: 10px; border: 1px solid #e1e4e8; text-align: center;">Package</th>
       <th style="padding: 10px; border: 1px solid #e1e4e8; text-align: center;">Notes</th>
     </tr>
   </thead>
   <tbody>
     <tr>
       <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;"><b>Amplifier IC</b></td>
       <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;">Intan RHD2164</td>
       <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;">4</td>
       <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;">BGA</td>
       <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;"><b>💡 Tip:</b> Ensure correct orientation</td>
     </tr>
     <tr>
       <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;"><b>SPI Connector</b></td>
       <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;">Omnetics A7621</td>
       <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;">2</td>
       <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;">-</td>
       <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;">12-wire cable harness (32 AWG)</td>
     </tr>
     <tr>
       <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;"><b>Resistors</b></td>
       <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;">Standard SMD</td>
       <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;">7</td>
       <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;">0402</td>
       <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;">LVDS Configuration</td>
     </tr>
     <tr>
       <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;"><b>Capacitors</b></td>
       <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;">Standard SMD</td>
       <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;">8</td>
       <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;">0603</td>
       <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;">LVDS Configuration</td>
     </tr>
     <tr>
       <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;"><b>Power LED</b></td>
       <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;">Green LED</td>
       <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;">1</td>
       <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;">0402</td>
       <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;">Power Indicator</td>
     </tr>
     <tr>
       <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;"><b>Solder Balls</b></td>
       <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;">0.4 mm Lead-free</td>
       <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;">~300</td>
       <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;">-</td>
       <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;">For BGA rework/assembly</td>
     </tr>
   </tbody>
 </table>
</div>

---

## 👥 Developers & Lab

This project is developed by the **MINE Lab** at Dartmouth College. <a href="https://sites.dartmouth.edu/fang-group/"><img src="https://img.shields.io/badge/VISIT_WEBSITE_%E2%86%97-MINE_Lab-00693E?style=flat-square" alt="MINE Lab"></a>

* **Tianyu Bai** (Lead Designer) <a href="https://tianyu-bai.github.io/"><img src="https://img.shields.io/badge/Website-Tianyu%20Bai-0077B5?style=flat-square&logo=github&logoColor=white" alt="Website"></a>
* **Gen Li, Ph.D.**
* **Hui Fang, Ph.D.** <a href="https://engineering.dartmouth.edu/community/faculty/hui-fang"><img src="https://img.shields.io/badge/Principal%20Investigator-444444?style=flat-square&logoColor=white" />

---

## 📄 Publication

This work is currently **under review** at the *IEEE Journal on Flexible Electronics (JFLEX)*.

The hardware designs and visual assets in this repository correspond directly to the system described in the submitted manuscript. To maintain the integrity of the peer-review process:

* **Full Citation**: A permanent link to the final paper will be updated here immediately upon formal acceptance.
* **Preprint/Full Paper**: *Coming Soon.*
  
* We welcome feedback and collaboration from the neuroengineering community!

* **Inquiries**: Thinking about using E-Link in your lab? We know setting up a new system can be tricky. If you have questions about the PCB design or 3D printing, drop us an email or open an issue. We'd love to help you get started!
    * **Tianyu Bai** ([<font color="#60a5fa">Tianyu.Bai.TH@Dartmouth.edu</font>](mailto:Tianyu.Bai.TH@Dartmouth.edu))
    * **Prof. Hui Fang** ([<font color="#60a5fa">Hui.Fang@Dartmouth.edu</font>](mailto:Hui.Fang@Dartmouth.edu))

---

## 📑 Citation & DOI

If you utilize these designs, code, or assets in your research, please cite this repository using the persistent DOI provided by Zenodo:

**Current Reference:**
> T. Bai, et al., "E-Link GitHub Repository," v1.0, MINE Lab, Dartmouth College, 2026. [![DOI](https://zenodo.org/badge/1119765398.svg)](https://doi.org/10.5281/zenodo.18440104)

---

<span id="en-downloads"></span>
## 🔗 Repository & Downloads

This project is fully open-source. Upon acceptance of the associated paper, the complete dataset comprising **PCB fabrication files (Gerber/NC Drill)**, **BOM**, and **Mechanical CAD** will be accessible via the link below.

<div align="center">
 <p><b>👇 Bookmark the repository for future downloads:</b></p>

<div align="center">
 <a href="https://github.com/Tianyu-Bai/ELINK"><img src="https://img.shields.io/badge/GitHub-View_Source_Repository-181717?style=for-the-badge&logo=github&logoColor=white" alt="View on GitHub"></a>
 <img src="https://img.shields.io/badge/Status-Locked_until_Publication-A31F34?style=for-the-badge&logo=private" alt="Status Locked">
</div>
</div>

---

## 🤝 Acknowledgments

The developers gratefully acknowledge support from the **NIH (R01MH139342)** and the **Dartmouth PhD Innovation Fellowship**. 

Special thanks to the members of the **MINE Lab** and the **Thayer School of Engineering** for their technical support and feedback throughout the development of the E-Link (256) system.

---

## 📜 License

Copyright © 2026 Tianyu Bai <a href="https://tianyu-bai.github.io/"><img src="https://img.shields.io/badge/Website-Tianyu%20Bai-0077B5?style=flat-square&logo=github&logoColor=white" alt="Website"></a>

This project is open-source and available under the **MIT License**. Click the badge below for full license details.

<div align="center">
 <a href="https://github.com/tianyu-bai/E-Link/blob/main/LICENSE">
   <img src="https://img.shields.io/badge/License-MIT-A31F34?style=flat-square&logo=opensourceinitiative&logoColor=white" alt="License">
 </a>
</div>

</div>

<div class="github-only">
  <br>
  <hr>
  <p align="center" style="font-size: 1.5em; font-weight: bold; margin: 20px 0;">
    👇 🇨🇳 Chinese Version / 中文版 👇
  </p>
  <hr>
  <br>
</div>

<div class="lang-zh" markdown="1">

<div class="github-only">
  <p align="center">
    <a href="https://tianyu-bai.github.io/E-Link">
      🌐 点击此处进入交互式网站
    </a>
  </p>
</div>

<div align="center" class="nav-badges">
  <a href="#cn-overview"><img src="https://img.shields.io/badge/📖_概览-3b82f6?style=flat-square&logoColor=white" alt="Overview"></a>
  <a href="#cn-features"><img src="https://img.shields.io/badge/✨_特性-3b82f6?style=flat-square&logoColor=white" alt="Features"></a>
  <a href="#cn-specs"><img src="https://img.shields.io/badge/📊_规格-3b82f6?style=flat-square&logoColor=white" alt="Specs"></a>
  <a href="#cn-components"><img src="https://img.shields.io/badge/🧩_组件-3b82f6?style=flat-square&logoColor=white" alt="Components"></a>
  <a href="#cn-bom"><img src="https://img.shields.io/badge/🛠_物料清单-3b82f6?style=flat-square&logoColor=white" alt="BOM"></a>
  <a href="#cn-downloads"><img src="https://img.shields.io/badge/🔗_下载-3b82f6?style=flat-square&logoColor=white" alt="Downloads"></a>
</div>
  
<div align="center">
  <h1 style="border-bottom: none; margin-bottom: 5px; color: #60a5fa; font-size: 2em;">🚀 E-Link(易链256)</h1>
  
<div align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Noto+Sans+SC&size=30&pause=100&color=60a5fa&center=true&vCenter=true&width=1100&lines=%E4%B8%80%E7%A7%8D%E5%9F%BA%E4%BA%8E%E5%BC%B9%E6%80%A7%E4%B8%AD%E9%97%B4%E5%B1%82%E5%AF%BC%E7%94%B5%E4%BD%93%E7%9A%84;%E9%AB%98%E5%AF%86%E5%BA%A6%E7%A5%9E%E7%BB%8F%E5%85%83%E7%94%B5%E4%BF%A1%E5%8F%B7%E8%AE%B0%E5%BD%95%E8%BF%9E%E6%8E%A5%E5%99%A8" alt="Typing SVG" />
</div>

  <div align="center" style="margin-top: 15px;">
    <a href="https://sites.dartmouth.edu/fang-group/"><img src="https://img.shields.io/badge/达特茅斯学院-00693E?style=flat-square" alt="方辉组"></a>
    <img src="https://img.shields.io/badge/已验证-256通道-FFA500?style=flat-square" alt="Verified" />
    <a href="https://tianyu-bai.github.io/"><img src="https://img.shields.io/badge/个人主页-Tianyu%20Bai-0077B5?style=flat-square&logo=github&logoColor=white" alt="Website"></a>
    <a href="https://www.linkedin.com/in/tianyubai/"><img src="https://img.shields.io/badge/领英-个人主页-0A66C2?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
     <a href="https://github.com/tianyu-bai/E-Link/blob/main/LICENSE"><img src="https://img.shields.io/badge/开源协议-MIT-A31F34?style=flat-square&logo=opensourceinitiative&logoColor=white" alt="License"></a>
  </div>

  <br />
  <div align="center">
  <br>
  <img src="Images/001_CN.png" alt="E-Link_256 分解图" width="750">
  <p style="margin-top: 5px; font-size: 0.95em; color: #3b82f6;">
    <b>E-Link易链(256) 的插拔动态（左）和结构分解（右）</b>
  </p>
</div>
</div>

## 🔬 **E-Link ：3D 交互式集成视图**
 
<div class="model-block" align="center" style="position: relative; max-width: 760px; margin: 0 auto; min-height: 460px;">
  <model-viewer
    class="custom-model-viewer"
    src="{{ '/Videos/On skull_3.16MB.glb' | relative_url }}"
    alt="E Link on Skull 3D Model"
    loading="lazy"   reveal="manual"
    poster="{{ '/Images/poster.webp' | relative_url }}"
    camera-controls interpolation-decay="200" bounds="tight" field-of-view="30deg" auto-rotate  rotation-per-second="15deg"
    interaction-prompt="none" environment-image="neutral" exposure="0.75" shadow-intensity="0" tone-mapping="commerce">

    <div slot="poster" style="position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; width: 100%; background: radial-gradient(circle at center, #111827 0%, #020617 100%); font-family: 'JetBrains Mono', monospace; overflow: hidden; border-radius: 16px;">
      <div style="position: absolute; inset: 0; background-image: linear-gradient(rgba(59, 130, 246, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.08) 1px, transparent 1px); background-size: 25px 25px; z-index: 0;"></div>
      <div class="scanline" style="z-index: 1;"></div>
      <div class="hud-corner hud-tl" style="z-index: 1;"></div>
      <div class="hud-corner hud-tr" style="z-index: 1;"></div>
      <div class="hud-corner hud-bl" style="z-index: 1;"></div>
      <div class="hud-corner hud-br" style="z-index: 1;"></div>
      <div style="z-index: 2; display: flex; flex-direction: column; align-items: center;">
        <div class="cyber-loader"></div>
        <p style="margin-top: 25px; margin-bottom: 5px; font-size: 0.95rem; font-weight: 600; letter-spacing: 3px; color: #93c5fd; text-shadow: 0 0 10px rgba(96, 165, 250, 0.8); animation: text-blink 1.5s ease-in-out infinite;">正在初始化 3D 信号...</p>
        <p style="margin: 0; font-size: 0.65rem; color: rgba(148, 163, 184, 0.8); letter-spacing: 1px;">[ 滑动页面自动接入引擎 ]</p>
      </div>
    </div>
    
    <div class="model-watermark-text">版权所有 © 2026 Tianyu Bai</div>
    
    <div class="gesture-hud">
      <span>↺ 旋转：拖拽</span>
  <span class="pc-only">缩放：Ctrl键 + 鼠标滚轮/触控板捏合</span>
  <span class="mobile-only">缩放：双指捏合</span>
</div>

    <div class="gesture-overlay mode-drag">
      <div class="icon-box"><div class="hand-icon">👆</div></div>
      <div class="gesture-text">拖拽以旋转</div>
    </div>

    <div class="gesture-overlay mode-zoom">
  <div class="icon-box">
    <div class="hand-icon hand-left">👉</div>
    <div class="hand-icon hand-right">👈</div>
  </div>
  <div class="gesture-text">
    <span class="pc-tip">Ctrl键 + 鼠标滚轮以缩放</span>
    <span class="mobile-tip">双指捏合屏幕以缩放</span>
  </div>
</div>
    
    <button class="reset-btn"
  onclick="
    const mv = this.closest('model-viewer');
    mv.setAttribute('camera-orbit','45deg 55deg auto');
    mv.setAttribute('field-of-view','30deg');
  ">
      ⟲ 重置视角
    </button>
  </model-viewer>
</div>

## 🔬 E-Link 三维交互模型

<div class="model-block" align="center" style="position: relative; max-width: 760px; margin: 0 auto; min-height: 460px;">
  <model-viewer
    class="custom-model-viewer"
    src="{{ '/Videos/Whole_2.34MB.glb' | relative_url }}"
    alt="E Link 3D Model" 
    loading="lazy"       reveal="manual"
    poster="{{ '/Images/poster.webp' | relative_url }}"
    camera-controls interpolation-decay="200" bounds="tight" field-of-view="30deg" auto-rotate  rotation-per-second="15deg"
    interaction-prompt="none" environment-image="neutral" exposure="0.75" shadow-intensity="0" tone-mapping="commerce">

    <div slot="poster" style="position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; width: 100%; background: radial-gradient(circle at center, #111827 0%, #020617 100%); font-family: 'JetBrains Mono', monospace; overflow: hidden; border-radius: 16px;">
      <div style="position: absolute; inset: 0; background-image: linear-gradient(rgba(59, 130, 246, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.08) 1px, transparent 1px); background-size: 25px 25px; z-index: 0;"></div>
      <div class="scanline" style="z-index: 1;"></div>
      <div class="hud-corner hud-tl" style="z-index: 1;"></div>
      <div class="hud-corner hud-tr" style="z-index: 1;"></div>
      <div class="hud-corner hud-bl" style="z-index: 1;"></div>
      <div class="hud-corner hud-br" style="z-index: 1;"></div>
      <div style="z-index: 2; display: flex; flex-direction: column; align-items: center;">
        <div class="cyber-loader"></div>
        <p style="margin-top: 25px; margin-bottom: 5px; font-size: 0.95rem; font-weight: 600; letter-spacing: 3px; color: #93c5fd; text-shadow: 0 0 10px rgba(96, 165, 250, 0.8); animation: text-blink 1.5s ease-in-out infinite;">正在初始化 3D 信号...</p>
        <p style="margin: 0; font-size: 0.65rem; color: rgba(148, 163, 184, 0.8); letter-spacing: 1px;">[ 滑动页面自动接入引擎 ]</p>
      </div>
    </div>
    
    <div class="model-watermark-text">版权所有 © 2026 Tianyu Bai</div>
    
    <div class="gesture-hud">
        <span>↺ 旋转：拖拽</span>
  <span class="pc-only">缩放：Ctrl键 + 鼠标滚轮/触控板捏合</span>
  <span class="mobile-only">缩放：双指捏合</span>
</div>

    <div class="gesture-overlay mode-drag">
      <div class="icon-box"><div class="hand-icon">👆</div></div>
      <div class="gesture-text">拖拽以旋转</div>
    </div>

    <div class="gesture-overlay mode-zoom">
  <div class="icon-box">
    <div class="hand-icon hand-left">👉</div>
    <div class="hand-icon hand-right">👈</div>
  </div>
  <div class="gesture-text">
    <span class="pc-tip">Ctrl键 + 鼠标滚轮以缩放</span>
    <span class="mobile-tip">双指捏合屏幕以缩放</span>
  </div>
</div>
    
    <button class="reset-btn"
  onclick="
    const mv = this.closest('model-viewer');
    mv.setAttribute('camera-orbit','45deg 55deg auto');
    mv.setAttribute('field-of-view','30deg');
  ">
      ⟲ 重置视角
    </button>
  </model-viewer>
</div> 

## 🔬 256通道定制放大器 – 三维交互模型

<div class="model-block" align="center" style="position: relative; max-width: 760px; margin: 0 auto; min-height: 460px;">
  <model-viewer
    class="custom-model-viewer"
    src="{{ '/Videos/3D_1.85MB.glb' | relative_url }}"
    alt="E-Link 256-Channel Custom Headstage 3D Model"
    loading="lazy"       reveal="manual"
    poster="{{ '/Images/poster.webp' | relative_url }}"
    camera-controls interpolation-decay="200" bounds="tight" field-of-view="30deg" auto-rotate  rotation-per-second="15deg"
    interaction-prompt="none" environment-image="neutral" exposure="0.75" shadow-intensity="0" tone-mapping="commerce">

    <div slot="poster" style="position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; width: 100%; background: radial-gradient(circle at center, #111827 0%, #020617 100%); font-family: 'JetBrains Mono', monospace; overflow: hidden; border-radius: 16px;">
      <div style="position: absolute; inset: 0; background-image: linear-gradient(rgba(59, 130, 246, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.08) 1px, transparent 1px); background-size: 25px 25px; z-index: 0;"></div>
      <div class="scanline" style="z-index: 1;"></div>
      <div class="hud-corner hud-tl" style="z-index: 1;"></div>
      <div class="hud-corner hud-tr" style="z-index: 1;"></div>
      <div class="hud-corner hud-bl" style="z-index: 1;"></div>
      <div class="hud-corner hud-br" style="z-index: 1;"></div>
      <div style="z-index: 2; display: flex; flex-direction: column; align-items: center;">
        <div class="cyber-loader"></div>
        <p style="margin-top: 25px; margin-bottom: 5px; font-size: 0.95rem; font-weight: 600; letter-spacing: 3px; color: #93c5fd; text-shadow: 0 0 10px rgba(96, 165, 250, 0.8); animation: text-blink 1.5s ease-in-out infinite;">正在初始化 3D 信号...</p>
        <p style="margin: 0; font-size: 0.65rem; color: rgba(148, 163, 184, 0.8); letter-spacing: 1px;">[ 滑动页面自动接入引擎 ]</p>
      </div>
    </div>
    
    <div class="model-watermark-text">版权所有 © 2026 Tianyu Bai </div>
    
    <div class="gesture-hud">
      <span>↺ 旋转：拖拽</span>
  <span class="pc-only">缩放：Ctrl键 + 鼠标滚轮/触控板捏合</span>
  <span class="mobile-only">缩放：双指捏合</span>
</div>

    <div class="gesture-overlay mode-drag">
      <div class="icon-box"><div class="hand-icon">👆</div></div>
      <div class="gesture-text">拖拽以旋转</div>
    </div>

    <div class="gesture-overlay mode-zoom">
  <div class="icon-box">
    <div class="hand-icon hand-left">👉</div>
    <div class="hand-icon hand-right">👈</div>
  </div>
  <div class="gesture-text">
    <span class="pc-tip">Ctrl键 + 鼠标滚轮以缩放</span>
    <span class="mobile-tip">双指捏合屏幕以缩放</span>
  </div>
</div>

    <button class="reset-btn"
  onclick="
    const mv = this.closest('model-viewer');
    mv.setAttribute('camera-orbit','45deg 55deg auto');
    mv.setAttribute('field-of-view','30deg');
  ">
      ⟲ 重置视角
    </button>
  </model-viewer>
</div>

<span id="cn-overview"></span>
## 📖 概览

**E-Link易链**，是一款基于弹性体互连技术（Elastomer Interconnection）的开源微型基座连接系统。它为柔性神经探针提供了稳固且可扩展的接口，专为自由活动动物的长期实验而优化设计

<div align="center">
<img src="Videos/Demo%20new%20new.gif" 
       alt="ELINK-256 组装演示 GIF" 
       width="750" 
       class="gif-blend" 
       style="border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); display: block;">
</div>

---

<div class="elink-dynamic-dashboard" align="center">
  <div class="metrics-grid">
    
    <div class="metric-card glass-panel" data-percent="100" data-value="2.8" data-is-float="true">
      <div class="chart-box">
        <svg viewBox="0 0 100 100">
          <circle class="bg-ring" cx="50" cy="50" r="45"></circle>
          <circle class="fg-ring weight-color" cx="50" cy="50" r="45"></circle>
        </svg>
        <div class="inner-content">
          <div class="label" style="font-family: sans-serif; letter-spacing: 2px;">重量</div>
          <div class="number-container">
            <span class="number count-up">0</span><span class="unit">g</span>
          </div>
          <div class="sub">轻量级</div>
        </div>
      </div>
    </div>

    <div class="metric-card glass-panel" data-percent="100" data-value="256" data-is-float="false">
      <div class="chart-box">
        <svg viewBox="0 0 100 100">
          <circle class="bg-ring" cx="50" cy="50" r="45"></circle>
          <circle class="fg-ring channel-color" cx="50" cy="50" r="45"></circle>
        </svg>
        <div class="inner-content">
          <div class="label" style="font-family: sans-serif; letter-spacing: 2px;">通道数</div>
          <div class="number-container">
            <span class="number count-up">0</span>
          </div>
          <div class="sub">高密度采集</div>
        </div>
      </div>
    </div>

    <div class="metric-card glass-panel" data-percent="100" data-value="4" data-is-float="false">
      <div class="chart-box">
        <svg viewBox="0 0 100 100">
          <circle class="bg-ring" cx="50" cy="50" r="45"></circle>
          <circle class="fg-ring pcb-color" cx="50" cy="50" r="45"></circle>
        </svg>
        <div class="inner-content">
          <div class="label" style="font-family: sans-serif; letter-spacing: 2px;">PCB 层数</div>
          <div class="number-container">
            <span class="number count-up">0</span>
          </div>
          <div class="sub">定制化布线</div>
        </div>
      </div>
    </div>

  </div>
</div>

> [!NOTE]
> **核心创新：** 我们打造了一种完全一体化的 “即拧即用” 数据采集方案。该系统利用弹性导电介质连接高密度 PCB，并封装于轻量级基座中。其最大的突破在于实现了“零力插拔”。免去使用者用力插拔的动作，有效规避了高密度引脚连接器常见的断针和弯针风险。

---

<span id="cn-specs"></span>
### 📊 规格参数

<div style="width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; padding-bottom: 10px;">
  <table style="margin-left: auto; margin-right: auto; width: 90%; min-width: 600px; text-align: center; border-collapse: collapse; border: 1px solid #e1e4e8;">
    <thead>
      <tr style="background-color: #f6f8fa; border-bottom: 2px solid #e1e4e8;">
        <th style="padding: 10px; border: 1px solid #e1e4e8;">规格项目</th>
        <th style="padding: 10px; border: 1px solid #e1e4e8;">E-Link(256)_V1.0</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 8px; border: 1px solid #e1e4e8;"><b>通道数</b></td>
        <td style="padding: 8px; border: 1px solid #e1e4e8;">128 或 256 通道 (支持单/双 SPI 端口)</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #e1e4e8;"><b>总质量</b></td>
        <td style="padding: 8px; border: 1px solid #e1e4e8;">6.6 g (含外壳)<br>2.8 g (不含外壳)</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #e1e4e8;"><b>互连类型</b></td>
        <td style="padding: 8px; border: 1px solid #e1e4e8;">免焊各向异性弹性体</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #e1e4e8;"><b>兼容采集系统</b></td>
        <td style="padding: 8px; border: 1px solid #e1e4e8;">Intan Recording Controller (512ch/1024ch)<br>Open-Ephys DAQ box<br>NeuroNexus Smartbox<br>OmniPlex DAQ box</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #e1e4e8;"><b>外壳材料</b></td>
        <td style="padding: 8px; border: 1px solid #e1e4e8;">3D 打印 PEEK / 手术级树脂</td>
      </tr>
    </tbody>
  </table>
</div>

---

<span id="cn-features"></span>
## ✨ 关键特性

* **⚡ 256 通道高密度接口**
  紧凑的基座占地面积，支持高密度采集，且不增加手术负担。
* **🔌 弹性导电体互连**
  使用各向异性导电弹性体，实现可重复、允许对准误差的一站式电气接触。
* **🐭 专为体内研究优化**
  最小化植入所需面积。核心组件重量仅为 2.8g（移除上盖后），最大限度减少对小鼠自由活动的限制，从而减轻动物负担。
* **🛠️ 模块化与可扩展**
  外壳、PCB 和保护盖均可分离，便于快速迭代和故障排查。
* **🧪 手术级设计**
  纹理化侧壁设计，增强了与牙科水泥或紫外光固化树脂的附着力。
<div align="center">
  <img src="Videos/Animation%20repeat.gif" 
       alt="ELINK-256 动画演示 GIF" 
       class="gif-blend" 
       width="500" 
       style="border-radius: 6px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); display: block;">
</div>

---

<span id="cn-components"></span>
## 🧩 系统组件

<div align="center">
  <table border="1" style="border-collapse: collapse; width: 90%; text-align: center;">
    <thead>
      <tr style="background-color: #f2f2f2;">
        <th>组件</th>
        <th>描述</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><b>基座外壳</b></td>
        <td>3D 打印/机械加工的基座，提供结构支撑和颅骨固定</td>
      </tr>
      <tr>
        <td><b>定制化 256Ch 头部放大器</b></td>
        <td>针对高密度 128/256 通道信号采集优化的记录接口</td>
      </tr>
      <tr>
        <td><b>泡沫垫圈</b></td>
        <td>提供柔性压缩层，确保弹性导电基体上方的电气接触均匀</td>
      </tr>
      <tr>
        <td><b>转接PCB</b></td>
        <td>高密度 4 层 PCB，用于将信号从薄膜探针放大器的球栅阵列图案转换</td>
      </tr>
      <tr>
        <td><b>手术保护盖</b></td>
        <td>保护性外壳，在长期慢性实验中保持电气和机械完整性</td>
      </tr>
    </tbody>
  </table>
</div>

---

<span id="cn-bom"></span>
### 🛠 放大器物料清单 (BOM)

<div align="center">
  <img src="Images/256HD.png" 
       alt="256通道放大器组装实物图" 
       width="500" 
       style="border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); margin-bottom: 20px;">
  <p style="margin-top: 5px; font-size: 0.9em; color: #64748b;">
    <b>已组装的 256 通道前置放大器 (顶视图)</b>
  </p>
</div>

<div align="center">
  <img src="Videos/Top PCB explosive new.gif" 
       alt="顶部4层电路板的设计爆炸动图" 
       width="600" 
       style="border-radius: 8px; margin-top: 10px;">
  <p style="margin-top: 5px; font-size: 0.9em; color: #64748b;">
    <b> 顶部4层电路板的设计爆炸动图 </b>
  </p>
</div>
     
<div style="width: 100%; overflow-x: auto; -webkit-overflow-scrolling: touch; padding-bottom: 10px;">
  <table style="margin-left: auto; margin-right: auto; width: 90%; min-width: 600px; text-align: center; border-collapse: collapse; border: 1px solid #e1e4e8;">
    <thead>
      <tr style="background-color: #f6f8fa; border-bottom: 2px solid #e1e4e8;">
        <th style="padding: 10px; border: 1px solid #e1e4e8; text-align: center;">组件</th>
        <th style="padding: 10px; border: 1px solid #e1e4e8; text-align: center;">描述</th>
        <th style="padding: 10px; border: 1px solid #e1e4e8; text-align: center;">数量</th>
        <th style="padding: 10px; border: 1px solid #e1e4e8; text-align: center;">封装</th>
        <th style="padding: 10px; border: 1px solid #e1e4e8; text-align: center;">备注</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;"><b>放大器 IC</b></td>
        <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;">Intan RHD2164</td>
        <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;">4</td>
        <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;">BGA</td>
        <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;"><b>关键：</b> 确保方向正确</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;"><b>SPI 连接器</b></td>
        <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;">Omnetics A7621</td>
        <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;">2</td>
        <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;">-</td>
        <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;">12 线线束 (32 AWG)</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;"><b>电阻</b></td>
        <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;">标准贴片</td>
        <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;">7</td>
        <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;">0402</td>
        <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;">LVDS 配置</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;"><b>电容</b></td>
        <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;">标准贴片</td>
        <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;">8</td>
        <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;">0603</td>
        <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;">LVDS 配置</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;"><b>电源 LED</b></td>
        <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;">绿色 LED</td>
        <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;">1</td>
        <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;">0402</td>
        <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;">自检状态灯</td>
      </tr>
      <tr>
        <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;"><b> BGA锡球 </b></td>
        <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;">0.4 mm 无铅</td>
        <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;">约300</td>
        <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;">-</td>
        <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;">用于 BGA 组装</td>
      </tr>
    </tbody>
  </table>
</div>

---

## 👥 开发者与实验室

本项目由达特茅斯学院的 **MINE Lab** 开发。<a href="https://sites.dartmouth.edu/fang-group/"><img src="https://img.shields.io/badge/访问网站_%E2%86%97-MINE_Lab-00693E?style=flat-square" alt="MINE Lab"></a>

* **白天宇** (主导研发及设计) <a href="https://tianyu-bai.github.io/"><img src="https://img.shields.io/badge/个人主页-Tianyu%20Bai-0077B5?style=flat-square&logo=github&logoColor=white" alt="Website"></a>
* **李根**
* **方辉教授** <a href="https://engineering.dartmouth.edu/community/faculty/hui-fang"><img src="https://img.shields.io/badge/首席研究员_(PI)-444444?style=flat-square&logoColor=white" />

---

## 📄 出版物

相关工作目前正在 **IEEE Journal on Flexible Electronics (JFLEX)** 审稿中。

本仓库中的硬件设计和视觉资产直接对应于投稿中描述的系统。

* **完整引用**：正式录用后，最终论文的永久链接将立即在此处更新。
* **预印本/全文**：*即将推出。*
  
* 🤝 **我们诚挚欢迎神经工程科研同行的反馈与合作！**

* **技术咨询**：有意部署 E-Link易链？作为开发者深知从零搭建一套新系统往往伴随诸多挑战。无论您在 PCB 设计、3D 打印制造，还是系统组装方面遇到任何问题，都欢迎随时通过邮件与我们取得联系。将为您提供技术支持！
    * **白天宇** ([<font color="#60a5fa">Tianyu.Bai.TH@Dartmouth.edu</font>](mailto:Tianyu.Bai.TH@Dartmouth.edu))
    * **方辉 教授** ([<font color="#60a5fa">Hui.Fang@Dartmouth.edu</font>](mailto:Hui.Fang@Dartmouth.edu))
  
---

## 📑 引用与 DOI

如果您在研究中使用了这些设计、代码或资产，需使用 Zenodo 提供的永久 DOI 引用本仓库：

**当前参考：**
> T. Bai, et al., "E-Link GitHub Repository," v1.0, MINE Lab, Dartmouth College, 2026. [![DOI](https://zenodo.org/badge/1119765398.svg)](https://doi.org/10.5281/zenodo.18440104)

---

<span id="cn-downloads"></span>
## 🔗 仓库与下载

本项目完全开源。相关论文录用后，包含 **PCB 制造文件 (Gerber)** 和 **3D打印文件** 的完整数据集将通过以下链接提供访问。

<div align="center">
  <p><b>👇 欢迎收藏本仓库以便未来下载：</b></p>

<div align="center">
  <a href="https://github.com/Tianyu-Bai/ELINK"><img src="https://img.shields.io/badge/GitHub-查看源仓库-181717?style=for-the-badge&logo=github&logoColor=white" alt="View on GitHub"></a>
  <img src="https://img.shields.io/badge/状态-锁定中，直到发表-A31F34?style=for-the-badge&logo=private" alt="Status Locked">
</div>
</div>

---

## 🤝 致谢

开发者感谢 **美国国立卫生研究院 NIH R01MH139342** 和 **达特茅斯博士生创新奖学金 (Dartmouth PhD Innovation Fellowship)** 的支持。

特别感谢 **达特茅斯Thayer工学院** 的相关成员在易链系统开发过程中提供的技术支持和反馈。

---

## 📜 许可协议

版权所有 © 2026 Tianyu Bai <a href="https://tianyu-bai.github.io/"><img src="https://img.shields.io/badge/个人主页-Tianyu%20Bai-0077B5?style=flat-square&logo=github&logoColor=white" alt="Website"></a>

本项目为开源硬件，在以下许可下可用。点击下方徽章查看完整许可详情。

* **硬件源文件** (KiCad/Gerbers/STL 文件)：在 **MIT 许可** 下授权。
* **文档、原理图 (PDF) 和图像**：在 **CC BY 4.0 国际许可** 下授权。

<div align="center">
  <a href="https://github.com/tianyu-bai/E-Link/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/开源协议-MIT-A31F34?style=flat-square&logo=opensourceinitiative&logoColor=white" alt="License">
  </a>
</div>

</div>

<script>
  document.addEventListener("DOMContentLoaded", () => {
  
// ===================== E-Link 动态数据面板逻辑 (完美绝对同步版) =====================
    // ===================== E-Link 动态数据面板逻辑 (单向循环瞬间归零版) =====================
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
          
          const cycleTime = 6000;  // 动画总循环：6秒
          const growTime = 1200;   // 增长耗时：1.2秒。剩余的4.8秒一直保持满状态。

          const step = (timestamp) => {
            // 只要滑出屏幕，立刻终止动画循环，节省手机性能
            if (card.dataset.dashboardInView !== "true") return; 

            if (!startTimestamp) startTimestamp = timestamp;
            // 🚨 核心魔法：使用 % 取余数。当到了第6秒(6000ms)，elapsed 瞬间变成 0！
            const elapsed = (timestamp - startTimestamp) % cycleTime;
            
            let progress = 0;
            
            if (elapsed < growTime) {
              // 1. 顺时针增长阶段：从 0 开始平滑减速到 100%
              let p = elapsed / growTime;
              progress = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
            } else {
              // 2. 保持阶段：剩余时间全部保持在 100% 满状态 (显示256, 2.8g等目标值)
              // 不需要后退代码，因为到了6秒钟循环结束，elapsed 会自动变成 0，progress 也会瞬间变回 0
              progress = 1;
            }

            // 更新数字：瞬间归零，平滑涨满
            const currentValue = progress * targetValue;
            numberEl.innerText = isFloat ? currentValue.toFixed(1) : Math.floor(currentValue);

            // 更新圆环：没有 CSS transition 干扰，progress=0时会直接瞬间变成空环
            fgRing.style.strokeDashoffset = circumference - (circumference * progress);

            // 继续下一帧
            card.dashboardAnimFrame = window.requestAnimationFrame(step);
          };

          // 启动动画
          card.dashboardAnimFrame = window.requestAnimationFrame(step);
          
        } else {
          // 滑出屏幕时清理状态
          card.dataset.dashboardInView = "false";
          window.cancelAnimationFrame(card.dashboardAnimFrame);
          fgRing.style.strokeDashoffset = circumference;
          numberEl.innerText = "0";
        }
      });
    }, { threshold: 0.1 }); 

    document.querySelectorAll('.metric-card').forEach(card => {
      dashboardObserver.observe(card);
    });
    
    // ===================== 3D 模型交互与防闪退逻辑 =====================
    const models = Array.from(document.querySelectorAll('model-viewer'));
    if (!models.length) return;

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    let isScrolling = false;
    let scrollEndTimer = null;
    let initCheckTimer = null; 

    const checkAndActivateBestModel = () => {
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

    // 增加一个全局锁，防止多个 3D 模型同时解压撑爆显存
    let isAnyModelLoading = false;

    // 激活模型的专用函数 (防 OOM 闪退版)
    const activateViewer = async (viewer) => {
        if (isScrolling) return; 

        // 严格暂停非当前模型，释放 GPU 活跃算力
        models.forEach(m => {
            if (m !== viewer && !m.paused) {
                m.pause();
            }
        });

        // 如果该模型还没有解压加载
        if (viewer.getAttribute('reveal') === 'manual' && viewer.dataset.loaded !== "true") {
            if (isAnyModelLoading) return; 
            
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
        
        // 确保 WebGL 上下文安全后再播放
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

    // 初始化模型基础设置
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

    // 视口交叉观察者
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
</script>
