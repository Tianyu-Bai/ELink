---
layout: default
title: E-Link Home
---

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

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

<style>
/* 1. 外层容器 */
.main-title-wrapper { 
  margin-bottom: 20px; 
  display: flex;
  justify-content: center;
}

/* 2. 呼吸动画逻辑 (现在放在没有任何遮罩的外层 h1，彻底释放阴影发光) */
.header-sync-pulse {
  margin: 0;
  display: inline-block;
  border-radius: 4px;
  margin-bottom: 5px;
  /* 直接给一个静态的阴影发光，不再放大跳动 */
  filter: drop-shadow(0 0 8px rgba(96, 165, 250, 0.3)); 
}

/* 3. 独立遮罩层容器 (贴合图片并负责裁剪光束) */
.logo-mask-container {
  position: relative; 
  display: block; 
  /* 👇遮罩放在内层，只裁剪光束，不影响外层阴影 👇 */
  -webkit-mask-image: var(--logo-url); 
  mask-image: var(--logo-url);
  -webkit-mask-size: contain;
  -webkit-mask-position: center;
  -webkit-mask-repeat: no-repeat;
}

/* ✨ 4. 探照灯光束特效 (恢复原汁原味的 transform 物理移动) ✨ */
.logo-mask-container::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 60%; 
  height: 100%;
  
  background: linear-gradient(
    to right, 
    transparent 0%, 
    rgba(96, 165, 250, 0.2) 20%,  
    rgba(167, 139, 250, 0.9) 50%,  
    rgba(96, 165, 250, 0.2) 80%,   
    transparent 100%
  );
  
  mix-blend-mode: screen; 
  pointer-events: none; 
  /* 动画时长 4s */
  animation: searchlight-sweep 4s ease-in-out infinite;
}

/* 👇 实现 0.7秒 停顿 👇 */
@keyframes searchlight-sweep {
  0% { transform: translateX(-150%) skewX(-15deg); }
  /* 前 82.5% 的时间 (3.3秒) 执行从左到右扫光 */
  82.5% { transform: translateX(250%) skewX(-15deg); } 
  /* 后 17.5% 的时间 (0.7秒) 停在右侧视线外，形成 0.7秒 的间隙！ */
  100% { transform: translateX(250%) skewX(-15deg); } 
}

/* 5. 电脑端 Logo 图片样式  */
.main-logo {
  height: 135px !important; 
  width: auto !important;  
  max-width: 100% !important;
  object-fit: contain;
  display: block;
  filter: brightness(0.95); 
}

/* 6. 副标题基础样式 */
.sub-title {
  background: linear-gradient(90deg, #60a5fa 0%, #818cf8 50%, #a78bfa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Inter', system-ui, sans-serif;
  font-weight: 700;
  font-size: 1.5em;
  letter-spacing: -0.5px;
  text-align: center;
  margin-top: 0;
  line-height: 1.4; 
  max-width: 90%; 
  margin-left: auto;
  margin-right: auto;
}

/* 7. 手机端优化 */
@media (max-width: 768px) {
  .main-title-wrapper { margin-bottom: 15px !important; }
  
  .main-logo { 
    height: 80px !important; 
    width: auto !important;
    max-width: 90vw !important; 
  } 

  .sub-title { 
    font-size: 1.2em !important; 
    padding: 0 10px !important; 
    white-space: normal !important; 
  }
  
  .mobile-br::before {
    content: "\A";
    white-space: pre;
  }
}
</style>

<div class="main-title-wrapper" align="center">
  <h1 class="header-sync-pulse">
    <span class="logo-mask-container" style="--logo-url: url('{{ "/Images/ELink Logo color.png" | relative_url }}')">
      <img 
        src="{{ '/Images/ELink Logo color.png' | relative_url }}" 
        alt="E-Link Logo color" 
        class="main-logo"
      >
    </span>
  </h1>
</div>
  
<h2 class="sub-title">
  An Open-Source, Elastomer Interconnection-based 
  <span class="mobile-br"></span> Connector for Flexible Neural Interfaces
</h2>

<div align="center" style="margin-top: 15px;">
    <img src="https://img.shields.io/badge/Verified-256ch-FFA500?style=flat-square" alt="Verified" />
    <a href="https://tianyu-bai.github.io/"><img src="https://img.shields.io/badge/Website-Tianyu%20Bai-0077B5?style=flat-square&logo=github&logoColor=white" alt="Website"></a>
    <a href="https://www.linkedin.com/in/tianyubai/"><img src="https://img.shields.io/badge/LinkedIn-Profile-0A66C2?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
     <a href="https://github.com/tianyu-bai/E-Link/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-A31F34?style=flat-square&logo=opensourceinitiative&logoColor=white" alt="License"></a>
 </div>
  
<div align="center">
 <br>
 <img src="Images/001.PNG" alt="E-Link(256) Exploded View" width="750" loading="lazy" decoding="async">
 <p style="margin-top: 5px; font-size: 0.95em; color: #3b82f6;">
   <b>Mating Dynamics (left) and Structural Breakdown (right) of the E-Link(256) </b>
 </p>
</div>

<style>
  
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=JetBrains+Mono:wght@400;700&display=swap');

body, div, p, span, td, th {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}
  
/* ===================== 1. 核心设备感知与显隐逻辑 ===================== */
.pc-tip, .mobile-tip, .pc-only, .mobile-only { display: none !important; }
@media (pointer: fine) { .pc-tip, .pc-only { display: inline !important; } }
@media (pointer: coarse) { .mobile-tip, .mobile-only { display: inline !important; } }

/* ========================================= 2. 复杂时间轴与动作动画 ========================================= */
@keyframes timeline-drag-container {
  0%             { opacity: 0; z-index: 10; }
  0.5%, 5.75%    { opacity: 1; z-index: 10; }
  6.25%, 12%     { opacity: 0; z-index: -1; }
  12.5%, 18.25%  { opacity: 1; z-index: 10; }
  18.75%, 55.75% { opacity: 0; z-index: -1; }
  56.25%, 62%    { opacity: 1; z-index: 10; }
  62.5%, 100%    { opacity: 0; z-index: -1; }
}

@keyframes timeline-zoom-container {
  0%, 5.75%      { opacity: 0; z-index: -1; }
  6.25%, 12%     { opacity: 1; z-index: 10; }
  12.5%, 18.25%  { opacity: 0; z-index: -1; }
  18.75%, 24.5%  { opacity: 1; z-index: 10; }
  25%, 62%       { opacity: 0; z-index: -1; }
  62.5%, 68.25%  { opacity: 1; z-index: 10; }
  68.75%, 100%   { opacity: 0; z-index: -1; }
}

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
  position: absolute; top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none; text-align: center;
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
  position: absolute; top: 12px; left: 50%;
  transform: translateX(-50%); display: flex; align-items: center;
  gap: 25px; font-size: 13px; font-family: system-ui, sans-serif;
  color: rgba(255, 255, 255, 0.65); background: rgba(15, 23, 42, 0.45);
  border: 1px solid rgba(59,130,246,0.25); padding: 6px 10px;
  border-radius: 20px; white-space: nowrap; 
  backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px); 
  pointer-events: none; transition: opacity 0.4s ease; z-index: 5;
}

.gesture-hidden { opacity: 0 !important; visibility: hidden !important; pointer-events: none !important; animation: none !important; }
.gesture-hidden * { animation: none !important; }
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
  transform: translateZ(0); 
  backface-visibility: hidden; 
  touch-action: pan-y;
}

.custom-model-viewer:focus, .custom-model-viewer:active, .custom-model-viewer:focus-visible {
  outline: none !important; box-shadow: none !important; border: 1px solid rgba(59,130,246,0.3) !important;
}

.model-block { 
  max-width: 100vw !important; margin-top: 5px !important;  margin-bottom: 15px !important; 
}
model-viewer::part(interaction-prompt), model-viewer::part(default-progress-bar) { display: none !important; }

.model-watermark-text {
  position: absolute; bottom: 12px; right: 16px; font-family: 'JetBrains Mono', monospace;
  font-size: 10px; color: rgba(255, 255, 255, 0.25); pointer-events: none; z-index: 5;
  system-ui, -apple-system, sans-serif; font-weight: 400;
}
  @keyframes text-blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

/* 加一根淡淡的分隔线 */
.gesture-hud span + span { position: relative; padding-left: 5px; }
.gesture-hud span + span::before { content: ""; position: absolute; left: -12px; top: 20%; height: 60%; width: 1px; background: rgba(255, 255, 255, 0.2); }
  
/* ===================== E-Link 动态仪表盘样式 ===================== */
.nav-badges img, .github-only img, a img {
  transform: translateZ(0); backface-visibility: hidden; -webkit-font-smoothing: antialiased;
}

.elink-dynamic-dashboard { width: 100%;  max-width: 760px;  margin: 20px auto;  padding: 0 5px; box-sizing: border-box; }
.metrics-grid { display: flex;  justify-content: space-between;  align-items: center;  flex-wrap: nowrap; gap: 12px;  width: 100%; box-sizing: border-box; }
.metric-card.glass-panel {
  flex: 1 1 0; min-width: 0; background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(59, 130, 246, 0.3); border-radius: 12px;
  padding: 15px 5px; box-sizing: border-box; box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
  transition: transform 0.3s ease; text-align: center;
}
.chart-box { position: relative; width: 145px; height: 145px; margin: 0 auto; }
.chart-box svg { width: 100%; height: 100%; transform: rotate(-90deg); }
.bg-ring { fill: none; stroke: rgba(255, 255, 255, 0.1); stroke-width: 6; }
.fg-ring { fill: none; stroke-width: 6; stroke-linecap: round; stroke-dasharray: 283; stroke-dashoffset: 283; }

.weight-color { stroke: #10b981; filter: drop-shadow(0 0 6px rgba(16, 185, 129, 0.6)); } 
.channel-color { stroke: #3b82f6; filter: drop-shadow(0 0 6px rgba(59, 130, 246, 0.6)); } 
.pcb-color { stroke: #f59e0b; filter: drop-shadow(0 0 6px rgba(245, 158, 11, 0.6)); }    
.inner-content { position: absolute; top: 0; left: 0; right: 0; bottom: 0; display: flex; flex-direction: column; justify-content: center; align-items: center; }
.inner-content .label { font-size: 10px; font-weight: 700; color: #94a3b8; margin-bottom: 2px; }
.inner-content .number-container { display: flex; align-items: baseline; justify-content: center; }
.inner-content .number { font-family: 'JetBrains Mono', monospace; font-size: 32px; font-weight: 800; color: #ffffff; text-shadow: 0 2px 4px rgba(0,0,0,0.5); }
.inner-content .unit { font-size: 16px; font-weight: bold; color: #cbd5e1; margin-left: 2px; }
.inner-content .sub { font-size: 10px; color: rgba(148, 163, 184, 0.8); margin-top: 2px; }

@media (max-width: 600px) {
  .metrics-grid { gap: 6px; } 
  .metric-card.glass-panel { padding: 10px 2px; background: rgba(15, 23, 42, 0.85); backdrop-filter: none; -webkit-backdrop-filter: none; }
  .chart-box { width: 70px; height: 70px; }
  .inner-content .number { font-size: 18px; }
  .inner-content .unit { font-size: 11px; }
  .inner-content .label { font-size: 8px; font-family: sans-serif !important; letter-spacing: 0 !important; }
  .inner-content .sub { display: none; }
}
    
/* ===================== 高级 3D 封面特效 (HUD) ===================== */
.cyber-loader { position: relative; width: 50px; height: 50px; }
.cyber-loader::before, .cyber-loader::after { content: ''; position: absolute; border-radius: 50%; }
.cyber-loader::before {
  top: 0; left: 0; right: 0; bottom: 0;
  border: 2.5px solid transparent; border-top-color: #60a5fa; border-bottom-color: #60a5fa;
  animation: spin 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite; box-shadow: 0 0 10px rgba(96, 165, 250, 0.5);
}
.cyber-loader::after {
  top: 8px; left: 8px; right: 8px; bottom: 8px;
  border: 2px solid transparent; border-left-color: #3b82f6; border-right-color: #3b82f6;
  animation: spin-reverse 1s linear infinite;
}
@keyframes spin-reverse { to { transform: rotate(-360deg); } }

.hud-corner {
  position: absolute; width: 25px; height: 25px; border: 2px solid rgba(96, 165, 250, 0.6); box-shadow: 0 0 8px rgba(59, 130, 246, 0.4);
}
.hud-tl { top: 20px; left: 20px; border-right: none; border-bottom: none; }
.hud-tr { top: 20px; right: 20px; border-left: none; border-bottom: none; }
.hud-bl { bottom: 20px; left: 20px; border-right: none; border-top: none; }
.hud-br { bottom: 20px; right: 20px; border-left: none; border-top: none; }

.scanline {
  position: absolute; top: 0; left: 0; width: 100%; height: 3px;
  background: linear-gradient(90deg, transparent, rgba(96, 165, 250, 0.8), transparent);
  box-shadow: 0 0 15px rgba(59, 130, 246, 0.8); animation: scan-sweep 3s linear infinite; opacity: 0.6;
}
@keyframes scan-sweep { 0% { top: 0; opacity: 0; } 10% { opacity: 0.6; } 90% { opacity: 0.6; } 100% { top: 100%; opacity: 0; } }

.nav-badges a { display: inline-block; transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); margin: 0 2px; }
.nav-badges a:hover { transform: translateY(-3px) scale(1.05); filter: drop-shadow(0 5px 8px rgba(59, 130, 246, 0.4)); }
.nav-badges a:active { transform: translateY(0) scale(0.98); }

/* 点击加载动画特效 (网络优化新增) */
.click-to-load-glow {
  cursor: pointer;
  transition: all 0.3s ease;
}
.click-to-load-glow:hover {
  transform: scale(1.05);
  text-shadow: 0 0 15px rgba(96, 165, 250, 1);
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

<div slot="poster" style="position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; width: 100%; background: radial-gradient(circle at center, #111827 0%, #020617 100%); font-family: 'JetBrains Mono', monospace; overflow: hidden; border-radius: 16px; cursor: pointer;">
      <div style="position: absolute; inset: 0; background-image: linear-gradient(rgba(59, 130, 246, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.08) 1px, transparent 1px); background-size: 25px 25px; z-index: 0;"></div>
      <div class="scanline" style="z-index: 1;"></div>
      <div class="hud-corner hud-tl" style="z-index: 1;"></div>
      <div class="hud-corner hud-tr" style="z-index: 1;"></div>
      <div class="hud-corner hud-bl" style="z-index: 1;"></div>
      <div class="hud-corner hud-br" style="z-index: 1;"></div>
      <div style="z-index: 2; display: flex; flex-direction: column; align-items: center;">
        <div class="cyber-loader"></div>
        <p style="margin-top: 25px; margin-bottom: 5px; font-size: 0.95rem; font-weight: 600; letter-spacing: 3px; color: #93c5fd; text-shadow: 0 0 10px rgba(96, 165, 250, 0.8); animation: text-blink 1.5s ease-in-out infinite;">INITIALIZING 3D SIGNAL...</p>
        <p class="click-to-load-glow" style="margin: 0; font-size: 0.65rem; color: #a78bfa; letter-spacing: 1px; font-weight: bold;">[ SCROLL OR CLICK TO REVEAL ]</p>
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

<div slot="poster" style="position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; width: 100%; background: radial-gradient(circle at center, #111827 0%, #020617 100%); font-family: 'JetBrains Mono', monospace; overflow: hidden; border-radius: 16px; cursor: pointer;">
   <div style="position: absolute; inset: 0; background-image: linear-gradient(rgba(59, 130, 246, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.08) 1px, transparent 1px); background-size: 25px 25px; z-index: 0;"></div>
      <div class="scanline" style="z-index: 1;"></div>
      <div class="hud-corner hud-tl" style="z-index: 1;"></div>
      <div class="hud-corner hud-tr" style="z-index: 1;"></div>
      <div class="hud-corner hud-bl" style="z-index: 1;"></div>
      <div class="hud-corner hud-br" style="z-index: 1;"></div>
      <div style="z-index: 2; display: flex; flex-direction: column; align-items: center;">
        <div class="cyber-loader"></div>
        <p style="margin-top: 25px; margin-bottom: 5px; font-size: 0.95rem; font-weight: 600; letter-spacing: 3px; color: #93c5fd; text-shadow: 0 0 10px rgba(96, 165, 250, 0.8); animation: text-blink 1.5s ease-in-out infinite;">INITIALIZING 3D SIGNAL...</p>
        <p class="click-to-load-glow" style="margin: 0; font-size: 0.65rem; color: #a78bfa; letter-spacing: 1px; font-weight: bold;">[ SCROLL OR CLICK TO REVEAL ]</p>
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

<div slot="poster" style="position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; width: 100%; background: radial-gradient(circle at center, #111827 0%, #020617 100%); font-family: 'JetBrains Mono', monospace; overflow: hidden; border-radius: 16px; cursor: pointer;">
      <div style="position: absolute; inset: 0; background-image: linear-gradient(rgba(59, 130, 246, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.08) 1px, transparent 1px); background-size: 25px 25px; z-index: 0;"></div>
      <div class="scanline" style="z-index: 1;"></div>
      <div class="hud-corner hud-tl" style="z-index: 1;"></div>
      <div class="hud-corner hud-tr" style="z-index: 1;"></div>
      <div class="hud-corner hud-bl" style="z-index: 1;"></div>
      <div class="hud-corner hud-br" style="z-index: 1;"></div>
      <div style="z-index: 2; display: flex; flex-direction: column; align-items: center;">
        <div class="cyber-loader"></div>
        <p style="margin-top: 25px; margin-bottom: 5px; font-size: 0.95rem; font-weight: 600; letter-spacing: 3px; color: #93c5fd; text-shadow: 0 0 10px rgba(96, 165, 250, 0.8); animation: text-blink 1.5s ease-in-out infinite;">INITIALIZING 3D SIGNAL...</p>
        <p class="click-to-load-glow" style="margin: 0; font-size: 0.65rem; color: #a78bfa; letter-spacing: 1px; font-weight: bold;">[ SCROLL OR CLICK TO REVEAL ]</p>
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

<span id="en-overview"></span>

## 📖 Overview

**E-Link** (Elastomer Interconnection-based connector) is an open-source, miniature pedestal connector system based on elastomer interconnection. It provides a robust, scalable interface for flexible neural probes, specifically engineered for chronic applications in freely moving animals.

<div align="center">
 <br>
 <img data-src="Videos/Demo%20new%20new.gif" 
       src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
       alt="ELINK-256 Assembly Demo GIF" 
       width="500" 
       class="gif-blend lazy-gif" 
       decoding="async"
       style="border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); display: block;">
</div>

---

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
  <h3 style="color: #60a5fa; margin-bottom: 20px; font-family: sans-serif;">🌍 Future Application Roadmap </h3>
  
  <div class="species-glass-box">
  <svg class="connection-lines" viewBox="0 0 600 380" preserveAspectRatio="none" style="z-index: 1;">
  <path class="base-line" d="M300,141 L135,225" stroke="rgba(255,255,255,0.1)" fill="none" /> 
  <path class="base-line" d="M300,141 L300,255" stroke="rgba(255,255,255,0.1)" fill="none" /> 
  <path class="base-line" d="M300,141 L465,225" stroke="rgba(255,255,255,0.1)" fill="none" /> 
  
  <path class="pulse-line line-to-mouse" d="M300,141 L135,225" />
  <path class="pulse-line" d="M300,141 L300,255" />
  <path class="pulse-line line-to-monkey" d="M300,141 L465,225" />
</svg>

 <div class="node center-node">
      <div class="hex-border">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 2V4M12 2V4M17 2V4M22 7H20M22 12H20M22 17H20M17 22V20M12 22V20M7 22V20M2 17H4M2 12H4M2 7H4M6 6H18V18H6V6ZM9 9V15H15V9H9Z" stroke="#60a5fa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="node-text pulse-text">E-Link (256)</div>
    </div>

 <div class="animal-nodes">
      
  <div class="node sub-node">
        <div class="icon-circle mouse-glow">
          <span style="font-size: 30px;">🐁</span>
        </div>
        <div class="node-title"><i>Mouse</i></div>
        <div class="node-desc">Housing Removed<br><b><font color="#10b981">2.8g</font> Payload</b></div>
      </div>

  <div class="node sub-node rat-node-adjust">
        <div class="icon-circle rat-glow">
          <span style="font-size: 30px;">🐀</span>
        </div>
        <div class="node-title"><i>Rat</i></div>
        <div class="node-desc">Standard Implant<br><b><font color="#3b82f6">6.6g</font> Total</b></div>
      </div>

  <div class="node sub-node">
        <div class="icon-circle monkey-glow">
          <span style="font-size: 30px;">🐒</span>
        </div>
        <div class="node-title"><i>Macaque</i></div>
        <div class="node-desc">High Durability<br><b><font color="#f59e0b">Multi-Array Scalable</font></b></div>
      </div>

    </div>
  </div>
</div>
<style>
  
/* ===================== 跨物种拓扑动画 CSS - 居中与性能优化版 ===================== */
.species-glass-box {
  position: relative;
  background: rgba(15, 23, 42, 0.4);
  border: 1px solid rgba(59, 130, 246, 0.2);
  border-radius: 16px;
  padding: 30px 20px 40px 20px; /* 🚨 修改点：底部增加到 40px 内边距，防止文字贴底 */
  min-height: 380px;            /* 🚨 修改点：从 320px 增加到 380px，给大鼠腾出空间 */
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  transform: translateZ(0); 
  backface-visibility: hidden;
  perspective: 1000;
  will-change: transform;
}

.connection-lines {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1; pointer-events: none;
}
.base-line { fill: none; stroke: rgba(255, 255, 255, 0.1); stroke-width: 2; }
.pulse-line {
  fill: none; stroke: #60a5fa; stroke-width: 3; stroke-dasharray: 20 120; 
  animation: data-flow 2.5s linear infinite; filter: drop-shadow(0 0 5px rgba(96, 165, 250, 0.8));
}
.line-to-monkey { stroke: #f59e0b !important; filter: drop-shadow(0 0 5px rgba(245, 158, 11, 0.8)) !important;}
.line-to-mouse { stroke: #10b981 !important; filter: drop-shadow(0 0 5px rgba(16, 185, 129, 0.8)) !important; }

@keyframes data-flow { from { stroke-dashoffset: 115; } to { stroke-dashoffset: 0; } }

.node {
  position: relative; z-index: 2; display: flex; flex-direction: column; align-items: center;
  flex: 1; min-width: 0; /* 强制三等分，绝对居中 */
}

.center-node { margin-bottom: 20px; flex: none; width: 100%; }

.hex-border {
  width: 70px; height: 70px; background: radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%);
  border: 2px solid #3b82f6; border-radius: 12px; display: flex; justify-content: center; align-items: center;
  box-shadow: 0 0 15px rgba(59, 130, 246, 0.5); animation: float 3s ease-in-out infinite;
}

@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }

.node-text { margin-top: 10px; font-weight: bold; color: #fff; font-family: 'JetBrains Mono', monospace; font-size: 14px; }
.pulse-text { text-shadow: 0 0 8px rgba(96, 165, 250, 0.8); }

.animal-nodes {
  display: flex; 
  justify-content: space-between; 
  width: 100%; 
  align-items: flex-start; 
  margin-top: 60px; /* 👈圆圈整体下移 */
}

/* 核心修复：使用 transform 代替 margin-top */
.rat-node-adjust { transform: translateY(30px) translateZ(0); }

.icon-circle {
  width: 60px; height: 60px; border-radius: 50%; background: #0f172a; isolation: isolate; 
  border: 1px solid rgba(255,255,255,0.2); display: flex; justify-content: center; align-items: center;
  position: relative; z-index: 5; transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease;
}

.icon-circle:hover { transform: scale(1.1); border-color: #60a5fa; background: rgba(96, 165, 250, 0.1); }

.mouse-glow { box-shadow: 0 0 10px rgba(16, 185, 129, 0.5); }
.rat-glow { box-shadow: 0 0 10px rgba(59, 130, 246, 0.5); }
.monkey-glow { box-shadow: 0 0 15px rgba(245, 158, 11, 0.6); border-color: rgba(245, 158, 11, 0.5) !important; }

.node-title { margin-top: 8px; font-weight: bold; color: #e2e8f0; font-size: 14px; }
.node-desc { margin-top: 4px; color: #94a3b8; font-size: 11px; text-align: center; line-height: 1.4; font-family: sans-serif; }

@@media (max-width: 600px) {
  /* 🚨 核心修复：将 padding 和 min-height 与电脑端保持绝对一致，防止 SVG Y轴被压扁脱靶 */
  .species-glass-box { padding: 30px 5px 40px 5px; min-height: 380px; } 
  
  .icon-circle { width: 45px; height: 45px; }
  .icon-circle span { font-size: 24px !important; }
  .node-title { font-size: 12px; }
  .node-desc { font-size: 9px; }
  .connection-lines { opacity: 0.8; }
  .pulse-line { stroke-width: 2; }
}
</style>

<style>
  
/* 水印体特征列表专属样式 */
.watermark-features {
  color: rgba(148, 163, 184, 0.8); /* 柔和的蓝灰色 (Slate-400)，自带水印隐匿感 */
  font-size: 0.95em;
  line-height: 1.7;
  font-weight: 400;
  letter-spacing: 0.3px;
}

.watermark-features ul {
  padding-left: 20px;
}

.watermark-features li {
  margin-bottom: 20px;
  opacity: 0.85; /* 整体降低透明度，压制 Emoji 的刺眼感 */
  transition: all 0.3s ease;
}

/* 增加呼吸感：鼠标悬停时微微亮起 */
.watermark-features li:hover {
  opacity: 1;
  color: rgba(241, 245, 249, 0.9);
}

/* 重新定义粗体的颜色，从“刺眼纯白”改为“低饱和浅蓝” */
.watermark-features strong {
  color: #93c5fd; /* 柔和的天蓝色 (Blue-300) */
  font-weight: 600;
  text-shadow: 0 0 8px rgba(147, 197, 253, 0.2); /* 微微的发光字效 */
}
</style>

<div class="watermark-features" markdown="1">

* **⚡ 256-Channel High-Density & Scalable Interface**<br>
  Compact pedestal footprint supporting 256-ch acquisition. The elastomer-based design offers a clear scaling roadmap (up to 1024-ch) without increasing physical size or surgical overhead.

* **🔌 Zero-Force "Soft" Interconnect**<br>
  By replacing rigid pins with Anisotropic Conductive Elastomer, the system shifts from "insertion" to "compression." This "Gentle yet Firm" philosophy eliminates common failure modes like "bent or broken pins" from the physical level.

* **🎯 Self-Aligning & High Tolerance**<br>
  Features a high-precision mechanical guidance structure with "Structural Redundancy." It naturally forgives minor manual misalignments, ensuring reliable contact with simple rotation — no microscopic alignment required.

* **🛠️ Modular Maintenance & On-Demand Assembly**<br>
  Separable "Sandwich" structure (Housing, Adapter PCB, Headstage). Allows independent replacement of damaged modules and supports on-demand chip soldering (e.g., populating 1, 2, or 4 Intan chips) to save research costs.

* **🪶 Detachable Active Electronics for Unburdened Rest**<br>
  During non-recording periods, the heavy headstage and active electronics can be easily separated from the implanted pedestal. This leaves only a minimal, lightweight passive interface on the skull, significantly 
  reducing the physical payload on the animal and promoting natural behavior between sessions.

* **🐭 Optimized for Chronic In-Vivo Research**<br>
  Ultra-lightweight core (2.8g without housing) and low-profile design. Fully compatible with commutators, ensuring natural behavior and cable management during long-term recording in freely moving animals.

* **🧪 Surgical-Grade Integration & Anatomical Adaptation**<br>
  Features textured sidewalls for superior adhesion with dental cement/UV resin. The base curvature can be customized to match the specific cranial profiles of different animals during 3D printing, ensuring a rock-solid isolation chamber that protects delicate probes from fluids and scratching.

</div>

<div align="center">
<img data-src="Videos/Animation%20repeat.gif" 
     src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
     alt="ELINK-256 Animation GIF" 
     class="gif-blend lazy-gif" 
     width="500" 
     decoding="async"
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
       width="460" 
       loading="lazy" decoding="async"
       style="border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); margin-bottom: 20px;">
  <p style="margin-top: 5px; font-size: 0.9em; color: #64748b;">
    <b>Assembled 256-Channel Headstage (Top View)</b>
  </p>
</div>

<div align="center">
  <img data-src="Videos/Top PCB explosive new.gif" 
       src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
       alt="4-Layer PCB Stackup Explosion" 
       width="460" 
       class="lazy-gif"
       decoding="async"
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

## 👥 Developers and Lab

* **Tianyu Bai** (Lead Designer) <a href="https://tianyu-bai.github.io/"><img src="https://img.shields.io/badge/Website-Tianyu%20Bai-0077B5?style=flat-square&logo=github&logoColor=white" alt="Website"></a>
* **Gen Li, Ph.D.**
* **Hui Fang, Ph.D.** <a href="https://engineering.dartmouth.edu/community/faculty/hui-fang"><img src="https://img.shields.io/badge/Principal%20Investigator-444444?style=flat-square&logoColor=white" />

This project is developed by the **MINE Lab** at Dartmouth College. <a href="https://sites.dartmouth.edu/fang-group/"><img src="https://img.shields.io/badge/VISIT_WEBSITE_%E2%86%97-MINE_Lab-00693E?style=flat-square" alt="MINE Lab"></a>

---

## 📄 Publication

This work is currently **under review** at the *IEEE Journal on Flexible Electronics (JFLEX)*.

The hardware designs and visual assets in this repository correspond directly to the system described in the submitted manuscript. To maintain the integrity of the peer-review process:

* **Full Citation**: A permanent link to the final paper will be updated here immediately upon formal acceptance.
* **Preprint/Full Paper**: *Coming Soon.*
  
* We welcome feedback and collaboration from the neuroengineering community!
 
* **Inquiries**: Thinking about using E-Link in your lab? We know setting up a new system can be tricky. If you have questions about the PCB design or 3D printing, drop us an email or open an issue. We'd love to help you get started!
  * **Support**: [<font color="#60a5fa">support@ephys.tech</font>](mailto:support@ephys.tech)
  * **Developer (Tianyu)**: [<font color="#60a5fa">tianyu@ephys.tech</font>](mailto:tianyu@ephys.tech) 

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

<div class="github-only">
  <br>
  <hr>
  <p align="center" style="font-size: 1.5em; font-weight: bold; margin: 20px 0;">
    👇 🇨🇳 Chinese Version / 中文版 👇
  </p>
  <hr>
  <br>
</div>

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

<style>
/* 1. 静态发光外层容器 (保持不弹跳的静态阴影) */
.header-sync-pulse {
  margin: 0;
  display: inline-block;
  border-radius: 4px;
  filter: drop-shadow(0 0 8px rgba(96, 165, 250, 0.3)); 
}

/* 2. SVG 图标独立样式保持不变 */
.header-sync-pulse svg { 
  -webkit-text-fill-color: initial; 
  filter: saturate(1.2) drop-shadow(0 0 2px rgba(167, 139, 250, 0.4)); 
}

/* ✨ 3. 中文标题的纯文本走马灯特效 ✨ */
.bi-color-title-sweep {
  /* 核心技巧：双层背景叠加！
     上层是扫过的高光，下层是你原来的三色渐变底色 */
  background: 
    linear-gradient(
      105deg,
      transparent 20%, 
      rgba(255, 255, 255, 0.9) 50%, /* 扫过的高光中心变亮 */
      transparent 80%
    ),
    linear-gradient(90deg, #60a5fa 0%, #a78bfa 55%, #f472b6 100%);
    
  /* 上层光束放大以便移动，下层底色铺满不移动 */
  background-size: 200% auto, 100% auto;
  background-repeat: no-repeat;
  
  /* 把双层背景完美裁剪进文字轮廓内 */
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  
  /* 保持与图片版完全相同的动画节奏：总长 4s，包含 0.7s 停顿 */
  animation: text-searchlight 4s ease-in-out infinite;
}

/* 👇 完美实现 3.3秒扫光 + 0.7秒停顿 👇 */
@keyframes text-searchlight {
  /* 移动上层的光束背景，下层底色保持在 0 center 不变 */
  0% { background-position: -150% center, 0 center; }
  82.5% { background-position: 250% center, 0 center; }
  100% { background-position: 250% center, 0 center; }
}
</style>

<div align="center" style="margin-bottom: 20px;">
  <h1 class="header-sync-pulse" style="display: flex; align-items: center; justify-content: center; border-bottom: none; margin-bottom: 5px; font-size: 2.2em; font-weight: 800; letter-spacing: -1px; font-family: 'Inter', 'Noto Sans SC', sans-serif;">
    
    <svg width="45" height="45" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 15px;">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="url(#icon-gradient-zh)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="url(#icon-gradient-zh)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <defs>
        <linearGradient id="icon-gradient-zh" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#60a5fa" />
          <stop offset="50%" stop-color="#a78bfa" />
          <stop offset="100%" stop-color="#f472b6" />
        </linearGradient>
      </defs>
    </svg>

    <span class="bi-color-title-sweep">E-Link(易链256)</span>
  </h1>
</div>

<h2 class="sub-title">
  一种基于弹性导电体互连技术的<br class="mobile-only-br">高密度柔性神经接口连接器
</h2>


  <div align="center" style="margin-top: 15px;">
    <img src="https://img.shields.io/badge/已验证-256通道-FFA500?style=flat-square" alt="Verified" />
    <a href="https://tianyu-bai.github.io/"><img src="https://img.shields.io/badge/个人主页-Tianyu%20Bai-0077B5?style=flat-square&logo=github&logoColor=white" alt="Website"></a>
    <a href="https://www.linkedin.com/in/tianyubai/"><img src="https://img.shields.io/badge/领英-主页-0A66C2?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
     <a href="https://github.com/tianyu-bai/E-Link/blob/main/LICENSE"><img src="https://img.shields.io/badge/开源协议-MIT-A31F34?style=flat-square&logo=opensourceinitiative&logoColor=white" alt="License"></a>
  </div>
  <div align="center">
  <br>
  <img src="Images/001_CN.png" alt="E-Link_256 分解图" width="750" loading="lazy" decoding="async">
  <p style="margin-top: 5px; font-size: 0.95em; color: #3b82f6;">
    <b>E-Link易链(256) 的插拔动态（左）和结构分解（右）</b>
  </p>
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

    <div slot="poster" style="position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; width: 100%; background: radial-gradient(circle at center, #111827 0%, #020617 100%); font-family: 'JetBrains Mono', monospace; overflow: hidden; border-radius: 16px; cursor: pointer;">
      <div style="position: absolute; inset: 0; background-image: linear-gradient(rgba(59, 130, 246, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.08) 1px, transparent 1px); background-size: 25px 25px; z-index: 0;"></div>
      <div class="scanline" style="z-index: 1;"></div>
      <div class="hud-corner hud-tl" style="z-index: 1;"></div>
      <div class="hud-corner hud-tr" style="z-index: 1;"></div>
      <div class="hud-corner hud-bl" style="z-index: 1;"></div>
      <div class="hud-corner hud-br" style="z-index: 1;"></div>
      <div style="z-index: 2; display: flex; flex-direction: column; align-items: center;">
        <div class="cyber-loader"></div>
        <p style="margin-top: 25px; margin-bottom: 5px; font-size: 0.95rem; font-weight: 600; letter-spacing: 3px; color: #93c5fd; text-shadow: 0 0 10px rgba(96, 165, 250, 0.8); animation: text-blink 1.5s ease-in-out infinite;">正在初始化 3D 信号...</p>
        <p class="click-to-load-glow" style="margin: 0; font-size: 0.65rem; color: #a78bfa; letter-spacing: 1px; font-weight: bold;">[ 滑动或点击接入引擎 ]</p>
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

    <div slot="poster" style="position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; width: 100%; background: radial-gradient(circle at center, #111827 0%, #020617 100%); font-family: 'JetBrains Mono', monospace; overflow: hidden; border-radius: 16px; cursor: pointer;">
      <div style="position: absolute; inset: 0; background-image: linear-gradient(rgba(59, 130, 246, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.08) 1px, transparent 1px); background-size: 25px 25px; z-index: 0;"></div>
      <div class="scanline" style="z-index: 1;"></div>
      <div class="hud-corner hud-tl" style="z-index: 1;"></div>
      <div class="hud-corner hud-tr" style="z-index: 1;"></div>
      <div class="hud-corner hud-bl" style="z-index: 1;"></div>
      <div class="hud-corner hud-br" style="z-index: 1;"></div>
      <div style="z-index: 2; display: flex; flex-direction: column; align-items: center;">
        <div class="cyber-loader"></div>
        <p style="margin-top: 25px; margin-bottom: 5px; font-size: 0.95rem; font-weight: 600; letter-spacing: 3px; color: #93c5fd; text-shadow: 0 0 10px rgba(96, 165, 250, 0.8); animation: text-blink 1.5s ease-in-out infinite;">正在初始化 3D 信号...</p>
        <p class="click-to-load-glow" style="margin: 0; font-size: 0.65rem; color: #a78bfa; letter-spacing: 1px; font-weight: bold;">[ 滑动或点击接入引擎 ]</p>
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

    <div slot="poster" style="position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; width: 100%; background: radial-gradient(circle at center, #111827 0%, #020617 100%); font-family: 'JetBrains Mono', monospace; overflow: hidden; border-radius: 16px; cursor: pointer;">
      <div style="position: absolute; inset: 0; background-image: linear-gradient(rgba(59, 130, 246, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.08) 1px, transparent 1px); background-size: 25px 25px; z-index: 0;"></div>
      <div class="scanline" style="z-index: 1;"></div>
      <div class="hud-corner hud-tl" style="z-index: 1;"></div>
      <div class="hud-corner hud-tr" style="z-index: 1;"></div>
      <div class="hud-corner hud-bl" style="z-index: 1;"></div>
      <div class="hud-corner hud-br" style="z-index: 1;"></div>
      <div style="z-index: 2; display: flex; flex-direction: column; align-items: center;">
        <div class="cyber-loader"></div>
        <p style="margin-top: 25px; margin-bottom: 5px; font-size: 0.95rem; font-weight: 600; letter-spacing: 3px; color: #93c5fd; text-shadow: 0 0 10px rgba(96, 165, 250, 0.8); animation: text-blink 1.5s ease-in-out infinite;">正在初始化 3D 信号...</p>
        <p class="click-to-load-glow" style="margin: 0; font-size: 0.65rem; color: #a78bfa; letter-spacing: 1px; font-weight: bold;">[ 滑动或点击接入引擎 ]</p>
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

<span id="cn-overview"></span>
## 📖 概览

**E-Link易链**，是一款基于弹性体互连技术（Elastomer Interconnection）的开源微型基座连接系统。它为柔性神经探针提供了稳固且可扩展的接口，专为自由活动动物的长期实验而优化设计

<div align="center">
<img data-src="Videos/Demo%20new%20new.gif" 
       src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
       alt="ELINK-256 组装演示 GIF" 
       width="500" 
       class="gif-blend lazy-gif" 
       decoding="async"
       style="border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); display: block;">
</div>

---

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
## ✨ 核心特性
<div class="species-compatibility-container" align="center" style="margin: 40px auto; max-width: 760px;">
  <h3 style="color: #60a5fa; margin-bottom: 20px; font-family: sans-serif;">🌍 跨物种适用性展望 </h3>
  
  <div class="species-glass-box">
  <svg class="connection-lines" viewBox="0 0 600 380" preserveAspectRatio="none" style="z-index: 1;">
  <path class="base-line" d="M300,141 L135,225" stroke="rgba(255,255,255,0.1)" fill="none" /> 
  <path class="base-line" d="M300,141 L300,255" stroke="rgba(255,255,255,0.1)" fill="none" /> 
  <path class="base-line" d="M300,141 L465,225" stroke="rgba(255,255,255,0.1)" fill="none" /> 
  
  <path class="pulse-line line-to-mouse" d="M300,141 L135,225" />
  <path class="pulse-line" d="M300,141 L300,255" />
  <path class="pulse-line line-to-monkey" d="M300,141 L465,225" />
</svg>

    <div class="node center-node">
      <div class="hex-border">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 2V4M12 2V4M17 2V4M22 7H20M22 12H20M22 17H20M17 22V20M12 22V20M7 22V20M2 17H4M2 12H4M2 7H4M6 6H18V18H6V6ZM9 9V15H15V9H9Z" stroke="#60a5fa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="node-text pulse-text">E-Link (256)</div>
    </div>

    <div class="animal-nodes">
      
      <div class="node sub-node">
        <div class="icon-circle mouse-glow">
          <span style="font-size: 30px;">🐁</span>
        </div>
        <div class="node-title"><i>小鼠</i></div>
        <div class="node-desc">顶盖移除后<br><b><font color="#10b981">2.8g</font> 载荷</b></div>
      </div>

      <div class="node sub-node rat-node-adjust">
        <div class="icon-circle rat-glow">
          <span style="font-size: 30px;">🐀</span>
        </div>
        <div class="node-title"><i>大鼠</i></div>
        <div class="node-desc">长期佩戴<br><b><font color="#3b82f6">6.6g</font> 共计</b></div>
      </div>

      <div class="node sub-node">
        <div class="icon-circle monkey-glow">
          <span style="font-size: 30px;">🐒</span>
        </div>
        <div class="node-title"><i>灵长类</i></div>
        <div class="node-desc">高耐久性<br><b><font color="#f59e0b">可拓展矩阵</font></b></div>
      </div>

    </div>
  </div>
</div>

  <div class="watermark-features" markdown="1">

* **⚡ 256通道高密度与可扩展接口**<br>
  在有限基座占地面积内实现256通道数据采集。得益于弹性体互连的高集成度，该系统提供了清晰的扩展路径（可达1024通道），且不会增加额外的手术复杂度。

* **🔌 零插拔力，以柔克刚**<br>
  利用各向异性导电弹性体取代传统刚性插针式连接器。通过“旋紧结构”将扭矩转化为均匀压力，从物理层面彻底规避了高密度连接器常见的断针、弯针等失效模式，让连接不再成为系统可靠性的短板。

* **🎯 自对准与高容错连接**<br>
  系统具备优异的机械限位与电气容错率。无需微米级精密对齐，只需简单旋紧即可实现稳定连接，极大降低了手动操作的难度和失败风险。

* **🛠️ 模块化维护与按需组装**<br>
  采用**“三明治”式分离结构**（外壳、适配板、放大器板）。支持损坏模块的单独更换，并允许根据实验通道需求灵活焊接单/多颗芯片，显著降低了科研成本与维护门槛。

* **🪶 电子模块即插即拆，释放动物头部负担**<br>
  在非记录期间，沉重的头件设备与有源电路可与底座快速分离，仅在颅骨留下极轻量的无源底座。这大幅减轻了动物的物理载荷，最大程度保障了动物在实验间隙的自然活动状态。

* **🐭 专为自由活动动物实验优化**<br>
  核心组件仅重 2.8g（移除上盖后）。低剖面设计完美适配换向器 (Commutator)，有效管理线缆并确保动物在长期慢性实验中的自然行为，提升动物福利。

* **🧪 手术级一体化与解剖结构适配**<br>
  侧壁纹理设计极大增强了与牙科水泥或UV树脂的附着力。基座底部的打印弧度可根据不同动物的头部曲线进行定制化调整，从而实现与颅骨的完美贴合，构建出全封闭的防护舱，有效阻隔体液侵蚀并抵抗动物抓挠。

</div>
  
<div align="center">
  <img data-src="Videos/Animation%20repeat.gif" 
       src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
       alt="ELINK-256 动画演示 GIF" 
       class="gif-blend lazy-gif" 
       width="500" 
       decoding="async"
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
       width="460" 
       loading="lazy" decoding="async"
       style="border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); margin-bottom: 20px;">
  <p style="margin-top: 5px; font-size: 0.9em; color: #64748b;">
    <b>已组装的 256 通道前置放大器 (顶视图)</b>
  </p>
</div>

<div align="center">
  <img data-src="Videos/Top PCB explosive new.gif" 
       src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
       alt="顶部4层电路板的设计爆炸动图" 
       width="460" 
       class="lazy-gif"
       decoding="async"
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

* **白天宇** (主导研发及设计) <a href="https://tianyu-bai.github.io/"><img src="https://img.shields.io/badge/个人主页-Tianyu%20Bai-0077B5?style=flat-square&logo=github&logoColor=white" alt="Website"></a>
* **李根**
* **方辉教授** <a href="https://engineering.dartmouth.edu/community/faculty/hui-fang"><img src="https://img.shields.io/badge/首席研究员_(PI)-444444?style=flat-square&logoColor=white" />

本项目由达特茅斯学院的 **MINE Lab**团队开发。<a href="https://sites.dartmouth.edu/fang-group/"><img src="https://img.shields.io/badge/访问网站_%E2%86%97-MINE_Lab-00693E?style=flat-square" alt="MINE Lab"></a>

---

## 📄 出版物

相关工作目前正在 **IEEE Journal on Flexible Electronics (JFLEX)** 审稿中。

本仓库中的硬件设计和视觉资产直接对应于投稿中描述的系统。

* **完整引用**：正式录用后，最终论文的永久链接将立即在此处更新。
* **预印本/全文**：*即将推出。*
  
* 🤝 **我们诚挚欢迎神经工程科研同行的反馈与合作！**

* **技术咨询**：有意部署 E-Link易链？作为开发者深知从零搭建一套新系统往往伴随诸多挑战。无论您在 PCB 设计、3D 打印制造，还是系统组装方面遇到任何问题，都欢迎随时通过邮件与我们取得联系。将为您提供技术支持！
  * **技术支持**: [<font color="#60a5fa">support@ephys.tech</font>](mailto:support@ephys.tech)
  * **留言**: [<font color="#60a5fa">tianyu@ephys.tech</font>](mailto:tianyu@ephys.tech)
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
  
  // ===================== 弱网探测核心逻辑 (新增) =====================
  // 检测用户是否开启了省流量模式，或者是 3G/2G 网络
  const isSlowNetwork = () => {
    if ('connection' in navigator) {
      const conn = navigator.connection;
      return conn.saveData || /^[23]g$/.test(conn.effectiveType);
    }
    return false; // 默认放行
  };

// ===================== E-Link 动态数据面板逻辑 (深度优化版) =====================
    const dashboardObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const card = entry.target;
        const fgRing = card.querySelector('.fg-ring');
        const numberEl = card.querySelector('.count-up');
        const targetValue = parseFloat(card.dataset.value);
        const isFloat = card.dataset.isFloat === "true";
        const circumference = 283; 

        if (entry.isIntersecting) {
          // 状态锁：防止重复启动动画
          if (card.dataset.dashboardInView === "true") return;
          card.dataset.dashboardInView = "true";

          let startTimestamp = null;
          const duration = 2000; // 2秒完成

          const animate = (timestamp) => {
            if (card.dataset.dashboardInView !== "true") return;
            if (!startTimestamp) startTimestamp = timestamp;
            
            const elapsed = timestamp - startTimestamp;
            const progress = Math.min(elapsed / duration, 1);
            
            // 使用 EaseOutExpo 缓动函数，动作更丝滑
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const currentValue = easeProgress * targetValue;

            numberEl.innerText = isFloat ? currentValue.toFixed(1) : Math.round(currentValue);
            fgRing.style.strokeDashoffset = circumference - (circumference * easeProgress);

            if (progress < 1) {
              card.dashboardAnimFrame = requestAnimationFrame(animate);
            }
          };
          // 确保清理旧帧后再开始新动画
          cancelAnimationFrame(card.dashboardAnimFrame);
          card.dashboardAnimFrame = requestAnimationFrame(animate);
          
        } else {
          // 彻底离开视野时：清理动画并复位
          card.dataset.dashboardInView = "false";
          cancelAnimationFrame(card.dashboardAnimFrame);
          fgRing.style.strokeDashoffset = circumference;
          numberEl.innerText = "0";
        }
      });
    }, { threshold: 0.15 }); 

    document.querySelectorAll('.metric-card').forEach(card => dashboardObserver.observe(card));

    // ===================== 3D 模型交互优化 (防止并发冲突) =====================
    const models = Array.from(document.querySelectorAll('model-viewer'));
    if (!models.length) return;

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    let isScrolling = false;
    let scrollEndTimer = null;

    // 弱网阻断逻辑及交互隐藏逻辑
    models.forEach(viewer => {
        viewer.addEventListener('click', () => {
            if (viewer.dataset.loaded !== "true") activateViewer(viewer, true);
        });

        // 监听用户的拖拽/缩放操作，隐藏操作提示
        viewer.addEventListener('camera-change', (event) => {
            // 确保是用户的真实交互，而不是系统自动旋转
            if (event.detail.source === 'user-interaction') {
                viewer.querySelectorAll('.gesture-overlay, .gesture-hud').forEach(el => {
                    el.classList.add('gesture-hidden');
                });
                // 打上标记，防止它后续再次弹出来
                viewer.dataset.overlayDisabled = "true"; 
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
                const distance = Math.abs((rect.top + rect.height / 2) - viewportCenter);
                if (distance < minDistance) { minDistance = distance; bestModel = viewer; }
            }
        });
        if (bestModel) activateViewer(bestModel);
    };

    window.addEventListener('scroll', () => {
        isScrolling = true;
        clearTimeout(scrollEndTimer);
        scrollEndTimer = setTimeout(() => { isScrolling = false; checkAndActivateBestModel(); }, 150);
    }, { passive: true });

    let isAnyModelLoading = false;
    const activateViewer = async (viewer, force = false) => {
        if (isScrolling && !force) return;
        models.forEach(m => { if (m !== viewer && !m.paused) m.pause(); });

        if (viewer.getAttribute('reveal') === 'manual' && viewer.dataset.loaded !== "true") {
            if (isAnyModelLoading && !force) return;
            isAnyModelLoading = true;
            viewer.dismissPoster();
            viewer.dataset.loaded = "true";
            // 增加加载监听
            const loadHandler = () => { isAnyModelLoading = false; viewer.removeEventListener('load', loadHandler); };
            viewer.addEventListener('load', loadHandler);
            setTimeout(() => { isAnyModelLoading = false; }, 3000); 
        }
        
        if (viewer.paused && !isAnyModelLoading) { try { viewer.play(); } catch(e) {} }

        if (viewer.dataset.overlayDisabled !== "true") {
            clearTimeout(viewer.hudTimer); 
            viewer.hudTimer = setTimeout(() => {
                viewer.querySelectorAll('.gesture-overlay').forEach(el => el.classList.add('gesture-active'));
            }, 500);
        }
    };

    const modelObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const viewer = entry.target;
            if (entry.isIntersecting) {
                viewer.dataset.inView = "true";
                if (!isScrolling) checkAndActivateBestModel();
            } else {
                viewer.dataset.inView = "false";
                viewer.pause();
                viewer.querySelectorAll('.gesture-overlay').forEach(el => el.classList.remove('gesture-active'));
            }
        });
    }, { threshold: 0.1 });

    models.forEach(model => modelObserver.observe(model));

  // ===================== GIF 滚动到可见时才加载 =====================
  const gifObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // 当 GIF 进入浏览器视口时
      if (entry.isIntersecting) {
        const img = entry.target;
        // 将真实的 GIF 地址赋给 src 属性触发加载
        img.src = img.dataset.src;
        // 取消观察，确保只加载一次
        observer.unobserve(img);
      }
    });
  }, {
    threshold: 0.1, // 露出 10% 时就开始加载
    rootMargin: "50px 0px" // 提前 50px 加载，让用户感觉不到延迟
  });

  // 选中所有带有 lazy-gif 类的图片并开始观察
  document.querySelectorAll('img.lazy-gif').forEach(gif => {
    gifObserver.observe(gif);
  });
});
</script>
