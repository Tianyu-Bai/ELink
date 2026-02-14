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
  /* ========================================= 1. 复杂时间轴控制 (总周期 48秒) ========================================= */
   
  /* Drag 容器显隐 */
  @keyframes timeline-drag-container {
    0%, 6.25%    { opacity: 1; z-index: 10; } 
    6.35%, 12.4% { opacity: 0; z-index: -1; } 
    12.5%, 18.75% { opacity: 1; z-index: 10; } 
    18.85%, 56.15% { opacity: 0; z-index: -1; } 
    56.25%, 62.5% { opacity: 1; z-index: 10; } 
    62.6%, 100%   { opacity: 0; z-index: -1; } 
  }

  /* Zoom 容器显隐 */
  @keyframes timeline-zoom-container {
    0%, 6.15%    { opacity: 0; z-index: -1; }
    6.25%, 12.5% { opacity: 1; z-index: 10; } 
    12.6%, 18.65% { opacity: 0; z-index: -1; }
    18.75%, 25%  { opacity: 1; z-index: 10; } 
    25.1%, 62.4% { opacity: 0; z-index: -1; } 
    62.5%, 68.75% { opacity: 1; z-index: 10; } 
    68.85%, 100%  { opacity: 0; z-index: -1; } 
  }
  
  /* ========================================= 2. 动作动画 ========================================= */
  
  /* 拖拽动作 */
  @keyframes move-drag-hand {
    0% { transform: translateX(-40px) rotate(-15deg); opacity: 0; }
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { transform: translateX(40px) rotate(5deg); opacity: 0; }
  }

  /* 左手 (👉) */
  @keyframes move-zoom-left-diagonal {
    0% { transform: translate(-30px, 15px); opacity: 0; } 
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { transform: translate(-90px, 65px); opacity: 0; } 
  }
  
  /* 右手 (👈) */
  @keyframes move-zoom-right-diagonal {
    0% { transform: translate(30px, -15px); opacity: 0; } 
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { transform: translate(90px, -65px); opacity: 0; } 
  }
    
 /* =========================================  3. 容器与图标样式  ========================================= */
  
  .gesture-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    text-align: center;
    width: 220px; 
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .mode-drag { animation: timeline-drag-container 48s infinite; }
  .mode-zoom { animation: timeline-zoom-container 48s infinite; }

  .icon-box {
    position: relative;
    height: 80px;
    width: 100%;
    margin-bottom: 5px;
  }
  
  /* 🔴 性能优化关键 1：移除极耗性能的 drop-shadow，改用轻量级 text-shadow */
  .hand-icon {
    font-size: 50px;
    position: absolute;
    top: 20px;
    left: 50%;
    text-shadow: 2px 4px 0px rgba(0,0,0,0.8), 0 0 10px rgba(0,0,0,0.5);
    will-change: transform, opacity;
  }

  .mode-drag .hand-icon {
    margin-left: -25px;
    animation: move-drag-hand 1.5s infinite ease-in-out;
  }
  
  .mode-zoom .hand-icon {
     margin-left: -25px; 
     top: 15px; 
  }

  .mode-zoom .hand-left { animation: move-zoom-left-diagonal 1.5s infinite ease-in-out; }
  .mode-zoom .hand-right { animation: move-zoom-right-diagonal 1.5s infinite ease-in-out; }

 .gesture-text {
    color: rgba(255, 255, 255, 0.9);
    font-family: system-ui, -apple-system, sans-serif; /* 换成更现代的系统字体 */
    font-weight: 500; /* 去掉粗体，变得更优雅 */
    font-size: 14px;
    letter-spacing: 0.5px;
    text-shadow: 0 1px 3px rgba(0,0,0,0.8);
    background: rgba(30, 41, 59, 0.5); /* 柔和的深灰蓝 */
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid rgba(255,255,255,0.1); /* 加一圈极细的高光边框 */
    padding: 6px 14px;
    border-radius: 20px; /* 更圆润 */
    white-space: nowrap;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  }

  /* ===================== 弱交互 HUD ===================== */

.gesture-hud {
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  font-size: 13px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  color: rgba(255, 255, 255, 0.65);
  background: rgba(15, 23, 42, 0.45);
  border: 1px solid rgba(59,130,246,0.25);
  padding: 6px 10px;
  border-radius: 20px;
  white-space: nowrap;
  -webkit-backdrop-filter: blur(6px);
  pointer-events: none;
  backdrop-filter: blur(6px);
  transition: opacity 0.4s ease;
  z-index: 5;
}

.gesture-hud span { white-space: nowrap; }

/* 悬停高亮效果 (修复缩放动画冲突) */
.reset-btn:hover {
  background: rgba(59, 130, 246, 0.4);
  color: #fff;
  border-color: rgba(59, 130, 246, 0.8);
  transform: scale(1.05) translateZ(0); /* 保持硬件分层不失效 */
  box-shadow: 0 0 10px rgba(59, 130, 246, 0.3);
}
  
/* 🔴 性能优化关键 2：彻底阻断隐藏元素的动画渲染，防止后台空转 */
.gesture-hidden { 
  opacity: 0 !important; 
   visibility: hidden !important; /* 🟢 彻底移出视觉渲染树，拔掉耗电根源 */
  pointer-events: none !important;
  animation: none !important; 
}
.gesture-hidden * {
  animation: none !important;
}

/* ===================== 复位按钮样式 ===================== */
.reset-btn {
  position: absolute;
  bottom: 16px;
  left: 16px;
  z-index: 10;
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(59, 130, 246, 0.3);
  color: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  padding: 6px 12px;
  font-family: system-ui, sans-serif;
  font-size: 12px;
  cursor: pointer;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 6px;
}

.reset-btn:hover {
  background: rgba(59, 130, 246, 0.4);
  color: #fff;
  border-color: rgba(59, 130, 246, 0.8);
  transform: scale(1.05); 
  box-shadow: 0 0 10px rgba(59, 130, 246, 0.3);
}

.reset-btn:active {
  transform: scale(0.95);
}


model-viewer::part(interaction-prompt),
  
/* ===================== 模型全局基础样式 ===================== */
.custom-model-viewer {
  width: 100%;
  max-width: 100vw;
  box-sizing: border-box;
  height: 460px;
  background: transparent;
  border-radius: 16px;
  
  /* 🌟 增强版：晶莹剔透的边框 + 内外双重辉光 */
  border: 1px solid rgba(96, 165, 250, 0.4); 
  box-shadow: 
    0 0 20px -5px rgba(59, 130, 246, 0.3), /* 外侧悬浮光晕 */
    inset 0 0 15px rgba(59, 130, 246, 0.1); /* 内侧玻璃质感发光 */
    
  outline: none;
  overflow: hidden; 
  transform: translateZ(0); 
  backface-visibility: hidden; 
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); /* 动画更丝滑 */
}

/* 🌟 鼠标悬停时，光晕呼吸放大，极具互动感 */
.custom-model-viewer:hover {
  border: 1px solid rgba(96, 165, 250, 0.8);
  box-shadow: 
    0 0 35px 0px rgba(59, 130, 246, 0.4), 
    inset 0 0 25px rgba(59, 130, 246, 0.2);
}
  
/* 🟢 新增：专治电脑端边框闪烁的三板斧 */
  overflow: hidden; 
  transform: translateZ(0); 
  backface-visibility: hidden; 
}
  
/* 🟢 新增：给包裹模型的盒子加上防溢出限制 */
.model-block {
  max-width: 100vw !important;

}

/* 隐藏自带的默认提示和进度条，防止与你的自定义 UI 冲突 */
model-viewer::part(interaction-prompt),
model-viewer::part(default-progress-bar) {
  display: none !important;
  height: 0 !important;
  opacity: 0 !important;
}
  
</style>

## 🔬 Interactive 3D Model: E-Link Headstage Integration
 
<div class="model-block" align="center" style="position: relative; max-width: 760px; margin: 0 auto; min-height: 460px;">
  <model-viewer
    class="custom-model-viewer"
    src="{{ '/Videos/On skull_3.16MB.glb' | relative_url }}"
    alt="E Link on Skull 3D Model"
    loading="lazy"
    poster="{{ '/Images/poster.webp' | relative_url }}"
    camera-controls interpolation-decay="200" bounds="tight" field-of-view="30deg" auto-rotate auto-rotate-delay="500" rotation-per-second="15deg"
    interaction-prompt="none" environment-image="neutral" exposure="0.75" shadow-intensity="0" tone-mapping="commerce">

    <div slot="poster" style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; background: #0a0a0f; color: #3b82f6; font-family: 'JetBrains Mono', monospace;">
      <div class="model-loader"></div>
      <p style="margin-top: 20px; font-size: 0.9rem; letter-spacing: 2px; animation: blink 1.5s infinite;">INITIALIZING 3D SIGNAL...</p>
    </div>
    
    <div class="model-watermark-text">Copyright © 2026 Tianyu Bai</div>
    
    <div class="gesture-hud">
      <span>↺ Drag</span>
      <span> <kbd>Ctrl</kbd> + 🖱 Zoom</span>
    </div>

    <div class="gesture-overlay mode-drag">
      <div class="icon-box"><div class="hand-icon">👆</div></div>
      <div class="gesture-text">Drag to Rotate</div>
    </div>

    <div class="gesture-overlay mode-zoom">
      <div class="icon-box">
        <div class="hand-icon hand-left">👉</div>
        <div class="hand-icon hand-right">👈</div>
      </div>
      <div class="gesture-text">Pinch / <kbd>Ctrl</kbd> + 🖱️Wheel to Zoom</div>
    </div>
    
    <button class="reset-btn" onclick="this.parentElement.cameraOrbit = '45deg 55deg auto'; this.parentElement.fieldOfView = '30deg';">
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
    loading="lazy"
    poster="{{ '/Images/poster.webp' | relative_url }}"
    camera-controls interpolation-decay="200" bounds="tight" field-of-view="30deg" auto-rotate auto-rotate-delay="500" rotation-per-second="15deg"
    interaction-prompt="none" environment-image="neutral" exposure="0.75" shadow-intensity="0" tone-mapping="commerce">

    <div slot="poster" style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; background: #0a0a0f; color: #3b82f6; font-family: 'JetBrains Mono', monospace;">
      <div class="model-loader"></div>
      <p style="margin-top: 20px; font-size: 0.9rem; letter-spacing: 2px; animation: blink 1.5s infinite;">INITIALIZING 3D SIGNAL...</p>
    </div>
    
    <div class="model-watermark-text">Copyright © 2026 Tianyu Bai</div>
    
    <div class="gesture-hud">
      <span>↺ Drag</span>
      <span>⌃ + 🖱 Zoom</span>
    </div>

    <div class="gesture-overlay mode-drag">
      <div class="icon-box"><div class="hand-icon">👆</div></div>
      <div class="gesture-text">Drag to Rotate</div>
    </div>

    <div class="gesture-overlay mode-zoom">
      <div class="icon-box">
        <div class="hand-icon hand-left">👉</div>
        <div class="hand-icon hand-right">👈</div>
      </div>
      <div class="gesture-text">Pinch / <kbd>Ctrl</kbd> + 🖱️Wheel to Zoom</div>
    </div>
    
    <button class="reset-btn" onclick="this.parentElement.cameraOrbit = '45deg 55deg auto'; this.parentElement.fieldOfView = '30deg';">
      ⟲ Reset View
    </button>
  </model-viewer>
</div>

## 🔬 256Ch Customized Headstage – 3D Interactive View

<div class="model-block" align="center" style="position: relative; max-width: 760px; margin: 0 auto; min-height: 460px;">
  <model-viewer
    class="custom-model-viewer"
    src="{{ '/Videos/3D_1.85MB.glb' | relative_url }}"
    alt="E Link 3D Model" 
    loading="lazy"
    poster="{{ '/Images/poster.webp' | relative_url }}"
    camera-controls interpolation-decay="200" bounds="tight" field-of-view="30deg" auto-rotate auto-rotate-delay="500" rotation-per-second="15deg"
    interaction-prompt="none" environment-image="neutral" exposure="0.75" shadow-intensity="0" tone-mapping="commerce">

    <div slot="poster" style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; background: #0a0a0f; color: #3b82f6; font-family: 'JetBrains Mono', monospace;">
      <div class="model-loader"></div>
      <p style="margin-top: 20px; font-size: 0.9rem; letter-spacing: 2px; animation: blink 1.5s infinite;">INITIALIZING 3D SIGNAL...</p>
    </div>
    
    <div class="model-watermark-text">Copyright © 2026 Tianyu Bai</div>
    
    <div class="gesture-hud">
      <span>↺ Drag</span>
      <span>⌃ + 🖱 Zoom</span>
    </div>

    <div class="gesture-overlay mode-drag">
      <div class="icon-box"><div class="hand-icon">👆</div></div>
      <div class="gesture-text">Drag to Rotate</div>
    </div>

    <div class="gesture-overlay mode-zoom">
      <div class="icon-box">
        <div class="hand-icon hand-left">👉</div>
        <div class="hand-icon hand-right">👈</div>
      </div>
      <div class="gesture-text">Pinch / <kbd>Ctrl</kbd> + 🖱️Wheel to Zoom</div>
    </div>
    
    <button class="reset-btn" onclick="this.parentElement.cameraOrbit = '45deg 55deg auto'; this.parentElement.fieldOfView = '30deg';">
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

> [!NOTE]
> **Key Innovation:** The system integrates two high-density PCBs, an anisotropic elastomeric contact interface, and a lightweight pedestal housing into a fully integrated, headstage-ready solution.

---

<span id="en-specs"></span>
### 📊 Quick Specifications

<div align="center">
 <table style="margin-left: auto; margin-right: auto; width: 80%; text-align: center; border-collapse: collapse; border: 1px solid #e1e4e8;">
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

<div align="center">
 <table style="margin-left: auto; margin-right: auto; width: 90%; text-align: center; border-collapse: collapse; border: 1px solid #e1e4e8;">
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
    loading="lazy"
    poster="{{ '/Images/poster.webp' | relative_url }}"
    camera-controls interpolation-decay="200" bounds="tight" field-of-view="30deg" auto-rotate auto-rotate-delay="500" rotation-per-second="15deg"
    interaction-prompt="none" environment-image="neutral" exposure="0.75" shadow-intensity="0" tone-mapping="commerce">

    <div slot="poster" style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; background: #0a0a0f; color: #3b82f6; font-family: 'JetBrains Mono', monospace;">
      <div class="model-loader"></div>
      <p style="margin-top: 20px; font-size: 0.9rem; letter-spacing: 2px; animation: blink 1.5s infinite;">正在初始化 3D 信号...</p>
    </div>
    
    <div class="model-watermark-text">Copyright © 2026 Tianyu Bai</div>
    
    <div class="gesture-hud">
      <span>↺ 拖拽旋转</span>
      <span>Ctrl + 滚轮缩放</span>
    </div>

    <div class="gesture-overlay mode-drag">
      <div class="icon-box"><div class="hand-icon">👆</div></div>
      <div class="gesture-text">单指拖拽 / 鼠标拉动以旋转</div>
    </div>

    <div class="gesture-overlay mode-zoom">
      <div class="icon-box">
        <div class="hand-icon hand-left">👉</div>
        <div class="hand-icon hand-right">👈</div>
      </div>
      <div class="gesture-text">双指捏合 / <kbd>Ctrl</kbd> + 滚轮缩放</div>
    </div>
    
    <button class="reset-btn" onclick="this.parentElement.cameraOrbit = '45deg 55deg auto'; this.parentElement.fieldOfView = '30deg';">
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
    loading="lazy"
    poster="{{ '/Images/poster.webp' | relative_url }}"
    camera-controls interpolation-decay="200" bounds="tight" field-of-view="30deg" auto-rotate auto-rotate-delay="500" rotation-per-second="15deg"
    interaction-prompt="none" environment-image="neutral" exposure="0.75" shadow-intensity="0" tone-mapping="commerce">

    <div slot="poster" style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; background: #0a0a0f; color: #3b82f6; font-family: 'JetBrains Mono', monospace;">
      <div class="model-loader"></div>
      <p style="margin-top: 20px; font-size: 0.9rem; letter-spacing: 2px; animation: blink 1.5s infinite;">正在初始化 3D 信号...</p>
    </div>
    
    <div class="model-watermark-text">Copyright © 2026 Tianyu Bai</div>
    
    <div class="gesture-hud">
      <span>↺ 拖拽旋转</span>
      <span>Ctrl + 滚轮缩放</span>
   </div>

    <div class="gesture-overlay mode-drag">
      <div class="icon-box"><div class="hand-icon">👆</div></div>
      <div class="gesture-text">单指拖拽 / 鼠标拉动以旋转</div>
    </div>

    <div class="gesture-overlay mode-zoom">
      <div class="icon-box">
        <div class="hand-icon hand-left">👉</div>
        <div class="hand-icon hand-right">👈</div>
      </div>
      <div class="gesture-text">双指捏合 / <kbd>Ctrl</kbd> + 滚轮缩放</div>
    </div>
    
    <button class="reset-btn" onclick="this.parentElement.cameraOrbit = '45deg 55deg auto'; this.parentElement.fieldOfView = '30deg';">
      ⟲ 重置视角
    </button>
  </model-viewer>
</div> 

## 🔬 256通道定制放大器 – 三维交互模型

<div class="model-block" align="center" style="position: relative; max-width: 760px; margin: 0 auto; min-height: 460px;">
  <model-viewer
    class="custom-model-viewer"
    src="{{ '/Videos/3D_1.85MB.glb' | relative_url }}"
    alt="E Link 3D Model"
    loading="lazy"
    poster="{{ '/Images/poster.webp' | relative_url }}"
    camera-controls interpolation-decay="200" bounds="tight" field-of-view="30deg" auto-rotate auto-rotate-delay="500" rotation-per-second="15deg"
    interaction-prompt="none" environment-image="neutral" exposure="0.75" shadow-intensity="0" tone-mapping="commerce">

    <div slot="poster" style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; background: #0a0a0f; color: #3b82f6; font-family: 'JetBrains Mono', monospace;">
      <div class="model-loader"></div>
      <p style="margin-top: 20px; font-size: 0.9rem; letter-spacing: 2px; animation: blink 1.5s infinite;">正在初始化 3D 信号...</p>
    </div>
    
    <div class="model-watermark-text">Copyright © 2026 Tianyu Bai </div>
    
    <div class="gesture-hud">
      <span>↺ 拖拽旋转</span>
      <span>Ctrl + 滚轮缩放</span>
   </div>
   
    <div class="gesture-overlay mode-drag">
      <div class="icon-box"><div class="hand-icon">👆</div></div>
      <div class="gesture-text">单指拖拽 / 鼠标拉动以旋转</div>
    </div>

    <div class="gesture-overlay mode-zoom">
      <div class="icon-box">
        <div class="hand-icon hand-left">👉</div>
        <div class="hand-icon hand-right">👈</div>
      </div>
      <div class="gesture-text">双指捏合 / <kbd>Ctrl</kbd> + 滚轮缩放</div>
    </div>

    <button class="reset-btn" onclick="this.parentElement.cameraOrbit = '45deg 55deg auto'; this.parentElement.fieldOfView = '30deg';">
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

> [!NOTE]
> **核心创新：** 我们打造了一种完全一体化的 “即拧即用” 数据采集方案。该系统利用弹性导电介质连接高密度 PCB，并封装于轻量级基座中。其最大的突破在于实现了“零力插拔”。免去使用者用力插拔的动作，有效规避了高密度引脚连接器常见的断针和弯针风险。

---

<span id="cn-specs"></span>
### 📊 规格参数

<div align="center">
  <table style="margin-left: auto; margin-right: auto; width: 80%; text-align: center; border-collapse: collapse; border: 1px solid #e1e4e8;">
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
     
<div align="center">
  <table style="margin-left: auto; margin-right: auto; width: 90%; text-align: center; border-collapse: collapse; border: 1px solid #e1e4e8;">
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
    const models = Array.from(document.querySelectorAll('model-viewer'));
    if (!models.length) return;

    // 什么花里胡哨的显存管理都不做了，把一切交给浏览器的原生性能！
    models.forEach(viewer => {
      // 唯一需要保留的逻辑：当用户开始拖拽时，隐藏屏幕上的文字提示
      const hideAllHints = () => {
        viewer.querySelectorAll('.gesture-overlay, .gesture-hud')
          .forEach(el => el.classList.add('gesture-hidden'));
      };
      
      ['mousedown', 'wheel', 'touchstart'].forEach(evt => {
        viewer.addEventListener(evt, hideAllHints, { once: true });
      });
      
      // 确保模型拥有原生自转能力
      viewer.setAttribute('auto-rotate', '');
    });
  });
</script>
