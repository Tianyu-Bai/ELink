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
  
<div class="main-title-wrapper" align="center">
  <h1 class="header-sync-pulse bi-color-title">
    <svg class="title-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="url(#icon-gradient)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="url(#icon-gradient)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <defs>
        <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#60a5fa" />
          <stop offset="50%" stop-color="#a78bfa" />
          <stop offset="100%" stop-color="#f472b6" />
        </linearGradient>
      </defs>
    </svg>
    E-Link(256)
  </h1>
  
  <h2 class="sub-title">
    An Open-Source, Elastomer Interconnection-based<br class="pc-only-br">Connector for Flexible Neural Interfaces
  </h2>
</div>

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
 <img src="Videos/Demo%20new%20new.gif" 
       alt="ELINK-256 Assembly Demo GIF" 
       width="750" 
       class="gif-blend" 
       loading="lazy" decoding="async"
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
      loading="lazy" decoding="async"
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
       loading="lazy" decoding="async"
       style="border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); margin-bottom: 20px;">
  <p style="margin-top: 5px; font-size: 0.9em; color: #64748b;">
    <b>Assembled 256-Channel Headstage (Top View)</b>
  </p>
</div>

<div align="center">
  <img src="Videos/Top PCB explosive new.gif" 
       alt="4-Layer PCB Stackup Explosion" 
       width="600" 
       loading="lazy" decoding="async"
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
  * **Email**: [<font color="#60a5fa">support@ephys.tech</font>](mailto:support@ephys.tech)

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
  
<div align="center" style="margin-bottom: 20px;">
  <h1 class="header-sync-pulse bi-color-title" style="display: flex; align-items: center; justify-content: center; border-bottom: none; margin-bottom: 5px; font-size: 2.2em; font-weight: 800; letter-spacing: -1px; font-family: 'Inter', 'Noto Sans SC', sans-serif;">
    
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

    E-Link(易链256)
  </h1>
</div>

<h2 class="sub-title">
  一种基于弹性导电体互连技术的<br class="mobile-only-br">高密度柔性神经接口连接器
</h2>
  

  <div align="center" style="margin-top: 15px;">
    <a href="https://sites.dartmouth.edu/fang-group/"><img src="https://img.shields.io/badge/达特茅斯学院-00693E?style=flat-square" alt="方辉组"></a>
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
<img src="Videos/Demo%20new%20new.gif" 
       alt="ELINK-256 组装演示 GIF" 
       width="750" 
       class="gif-blend" 
       loading="lazy" decoding="async"
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
       loading="lazy" decoding="async"
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
       loading="lazy" decoding="async"
       style="border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); margin-bottom: 20px;">
  <p style="margin-top: 5px; font-size: 0.9em; color: #64748b;">
    <b>已组装的 256 通道前置放大器 (顶视图)</b>
  </p>
</div>

<div align="center">
  <img src="Videos/Top PCB explosive new.gif" 
       alt="顶部4层电路板的设计爆炸动图" 
       width="600" 
       loading="lazy" decoding="async"
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
    * **技术支持**: [<font color="#60a5fa">support@ephys.tech</font>](mailto:support@ephys.tech)
  
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

    // 新增：给每个模型添加点击事件，允许弱网时手动加载
    models.forEach(viewer => {
        viewer.addEventListener('click', () => {
             if (viewer.dataset.loaded !== "true") {
                 activateViewer(viewer, true); // force=true 强制加载
             }
        });
    });

    const checkAndActivateBestModel = () => {
        // 🚨核心阻断：如果是弱网，绝不自动加载，等待用户点击
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

    // 激活模型的专用函数 (加入 force 参数)
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
</script>
