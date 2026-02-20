<div class="lang-en" markdown="1">

<div class="github-only" align="center" style="margin: 40px 0;">
  <a href="https://tianyu-bai.github.io/E-Link">
    <img src="https://img.shields.io/badge/✨_Experience_Full_3D_Interactive_Model_Here_✨-4CAF50?style=for-the-badge&logo=webgl&logoColor=white" alt="Interactive Website" width="850">
  </a>
  <p style="margin-top: 20px; font-size: 3.5em; font-weight: bold; color: #1e293b;">
    <i>🚀 Click the banner above to interactively rotate, zoom, and explore the internal routing! 🚀</i>
  </p>
</div>

<div align="center">
  <h1 style="border-bottom: none; margin-bottom: 5px; color: #60a5fa; font-size: 2em;">🚀 E-Link(256)</h1>
  
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


<div align="center" class="nav-badges">
  <a href="#en-overview"><img src="https://img.shields.io/badge/📖_Overview-3b82f6?style=flat-square&logoColor=white" alt="Overview"></a>
  <a href="#en-features"><img src="https://img.shields.io/badge/✨_Features-3b82f6?style=flat-square&logoColor=white" alt="Features"></a>
  <a href="#en-specs"><img src="https://img.shields.io/badge/📊_Specs-3b82f6?style=flat-square&logoColor=white" alt="Specs"></a>
  <a href="#en-components"><img src="https://img.shields.io/badge/🧩_Components-3b82f6?style=flat-square&logoColor=white" alt="Components"></a>
  <a href="#en-bom"><img src="https://img.shields.io/badge/🛠_BOM-3b82f6?style=flat-square&logoColor=white" alt="BOM"></a>
  <a href="#en-downloads"><img src="https://img.shields.io/badge/🔗_Downloads-3b82f6?style=flat-square&logoColor=white" alt="Downloads"></a>
</div>

<div align="center">
  <br />
  <img src="Videos/Demo%20new%20new.gif" 
       alt="ELINK-256 Assembly Demo GIF" 
       width="750" 
       class="gif-blend" 
       style="border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); display: block;">
</div>

<span id="en-overview"></span>
## 📖 Overview

**E-Link** (Elastomer Interconnection-based connector) is an open-source, miniature pedestal connector system based on elastomer interconnection. It provides a robust, scalable interface for flexible neural probes, specifically engineered for chronic applications in freely moving animals.
<div align="center">
 <br>
 <img src="Images/001.PNG" alt="E-Link(256) Exploded View" width="750">
 <p style="margin-top: 5px; font-size: 0.95em; color: #3b82f6;">
   <b>Mating Dynamics (left) and Structural Breakdown (right) of the E-Link(256) </b>
 </p>
</div>

> [!IMPORTANT]
> **🎮 Interactive 3D View Available!** > GitHub doesn't support 3D models natively. <a href="https://tianyu-bai.github.io/E-Link">**Click here to interactively rotate, zoom, and explode this assembly directly in your browser!**</a>
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

* **⚡ 256-Channel High-Density & Scalable Interface**
  Compact pedestal footprint supporting 256-ch acquisition. The elastomer-based design offers a clear scaling roadmap (up to 1024-ch) without increasing physical size or surgical overhead.
* **🔌 Zero-Force "Soft" Interconnect (Anti-Failure)**
  By replacing rigid pins with **Anisotropic Conductive Elastomer (ACE)**, the system shifts from "insertion" to "compression." This "Gentle yet Firm" philosophy eliminates common failure modes like **bent or broken pins** from the physical level.
* **🎯 Self-Aligning & High Tolerance**
  Features a high-precision mechanical guidance structure with "Structural Redundancy." It naturally forgives minor manual misalignments, ensuring reliable contact with simple rotation—**no microscopic alignment required.**
* **🛠️ Modular Maintenance & On-Demand Assembly**
  Separable "Sandwich" structure (Housing, Adapter PCB, Headstage). Allows **independent replacement** of damaged modules and supports **on-demand chip soldering** (e.g., populating 1, 2, or 4 Intan chips) to save research costs.
* **🐭 Optimized for Chronic In-Vivo Research**
  Ultra-lightweight core (2.8g without housing) and low-profile design. Fully compatible with **mechanical commutators**, ensuring natural behavior and cable management during long-term recording in freely moving animals.
* **🧪 Surgical-Grade Integration & Anatomical Adaptation**
  Features textured sidewalls for superior adhesion with dental cement/UV resin. The base curvature can be **customized to match the specific cranial profiles** of different animals during 3D printing, ensuring a rock-solid isolation chamber that protects delicate probes from fluids and scratching.
  
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

> [!TIP]
> **🔍 Inspect the PCB Layers Up Close:** > Want to zoom in on the 0402 components or the BGA routing? <a href="https://tianyu-bai.github.io/E-Link">**Visit our interactive website**</a> to view the 3D PCBA model and examine the high-density layout!
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
       <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;"><b>Critical:</b> Ensure correct orientation</td>
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

<div class="github-only" align="center" style="margin: 40px 0;">
  <a href="https://tianyu-bai.github.io/E-Link">
    <img src="https://img.shields.io/badge/✨_点击此处_体验完整_3D_交互模型_✨-4CAF50?style=for-the-badge&logo=webgl&logoColor=white" alt="Interactive Website" width="850">
  </a>
  <p style="margin-top: 20px; font-size: 1.5em; font-weight: bold; color: #1e293b;">
    <i>🚀 点击上方绿色横幅，在浏览器中亲自旋转、缩放，零死角探索 E-Link 细节！ 🚀</i>
  </p>
</div>

<div align="center">
  <h1 style="border-bottom: none; margin-bottom: 5px; color: #60a5fa; font-size: 2em;">🚀 E-Link(易链256)</h1>
  
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

<div align="center" class="nav-badges">
  <a href="#cn-overview"><img src="https://img.shields.io/badge/📖_概览-3b82f6?style=flat-square&logoColor=white" alt="Overview"></a>
  <a href="#cn-features"><img src="https://img.shields.io/badge/✨_特性-3b82f6?style=flat-square&logoColor=white" alt="Features"></a>
  <a href="#cn-specs"><img src="https://img.shields.io/badge/📊_规格-3b82f6?style=flat-square&logoColor=white" alt="Specs"></a>
  <a href="#cn-components"><img src="https://img.shields.io/badge/🧩_组件-3b82f6?style=flat-square&logoColor=white" alt="Components"></a>
  <a href="#cn-bom"><img src="https://img.shields.io/badge/🛠_物料清单-3b82f6?style=flat-square&logoColor=white" alt="BOM"></a>
  <a href="#cn-downloads"><img src="https://img.shields.io/badge/🔗_下载-3b82f6?style=flat-square&logoColor=white" alt="Downloads"></a>
</div>
  
<div align="center">
  <br />
  <img src="Videos/Demo%20new%20new.gif" 
       alt="ELINK-256 组装演示 GIF" 
       width="750" 
       class="gif-blend" 
       style="border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); display: block;">
</div>

<span id="cn-overview"></span>
## 📖 概览

**E-Link易链**，是一款基于弹性体互连技术（Elastomer Interconnection）的开源微型基座连接系统。它为柔性神经探针提供了稳固且可扩展的接口，专为自由活动动物的长期慢性实验而优化设计

<div align="center">
  <br>
  <img src="Images/001_CN.png" alt="E-Link_256 分解图" width="750">
  <p style="margin-top: 5px; font-size: 0.95em; color: ##3b82f6;">
    <b>E-Link易链(256) 的插拔动态（左）和结构分解（右）</b>
  </p>
</div>

> [!IMPORTANT]
> **🎮 支持在线 3D 交互！** > GitHub 原生无法展示 3D 动效。<a href="https://tianyu-bai.github.io/E-Link">**请点击此处前往独立网站，在浏览器中亲自旋转、缩放并拆解此模型！**</a>
---

> [!NOTE]
> **核心创新：** 我们打造了一种完全一体化的 “即拧即用” 数据采集方案。该系统利用弹性导电介质连接高密度 PCB，并封装于轻量级基座中。其最大的突破在于实现了“零力插拔”。免去使用者用力插拔的动作，完美规避了多脚连接器常见的断针和弯针风险。

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

* **⚡ 256通道高密度与可扩展接口**
  在极小的基座占地面积内实现256通道数据采集。得益于弹性体互连的高集成度，该系统提供了清晰的扩展路径（可达1024通道），且不会增加额外的手术复杂度。
* **🔌 零插拔力“以柔克刚” **
  利用**各向异性导电弹性体 (ACE)** 取代传统刚性插针。通过“旋紧结构”将扭矩转化为均匀压力，从物理层面彻底规避了高密度连接器常见的**断针、弯针**等失效模式，让连接不再成为系统可靠性的短板。
* **🎯 自对准与高容错连接**
  系统具备优异的机械限位与电气容错率。无需微米级精密对齐，只需简单旋紧即可实现稳定连接，极大降低了手动操作的难度和失败风险。
* **🛠️ 模块化维护与按需组装**
  采用“三明治”式分离结构（外壳、适配板、放大器板）。支持**损坏模块的单独更换**，并允许根据实验通道需求**灵活焊接单/多颗芯片**，显著降低了科研成本与维护门槛。
* **🐭 专为自由活动动物实验优化**
  核心组件仅重2.8g（移除上盖后）。低剖面设计完美**适配机械换向器 (Commutator)**，有效管理线缆并确保动物在长期慢性实验中的自然行为，提升动物福利。
* **🧪 手术级一体化与解剖结构适配**
  侧壁纹理设计极大增强了与牙科水泥或UV树脂的附着力。基座底部的打印弧度可**根据不同动物的头部曲线进行定制化调整**，从而实现与颅骨的完美贴合，构建出全封闭的防护舱，有效阻隔体液侵蚀并抵抗动物抓挠。
  
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
        <td>高密度 4 层 PCB，用于将信号从薄膜探针路由到放大器的球栅阵列图案转换</td>
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
    
> [!TIP]
> **🔍 在线放大查看 PCB 细节：** > 想要放大看清 0402 贴片或者 BGA 走线？<a href="https://tianyu-bai.github.io/E-Link">**访问我们的交互网站**</a>，即可在浏览器中与 3D 放大器模型互动，极其清晰地观察高密度布局！
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
        <td style="padding: 8px; border: 1px solid #e1e4e8; text-align: center;"><b> 标注锡球 </b></td>
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

本项目由达特茅斯学院 **Fang课题组** 开发。<a href="https://sites.dartmouth.edu/fang-group/"><img src="https://img.shields.io/badge/访问网站_%E2%86%97-MINE_Lab-00693E?style=flat-square" alt="MINE Lab"></a>

* **白天宇** (主导研发及设计) <a href="https://tianyu-bai.github.io/"><img src="https://img.shields.io/badge/个人主页-Tianyu%20Bai-0077B5?style=flat-square&logo=github&logoColor=white" alt="Website"></a>
* **李根**
* **方辉教授** <a href="https://engineering.dartmouth.edu/community/faculty/hui-fang"><img src="https://img.shields.io/badge/首席研究员_(PI)-444444?style=flat-square&logoColor=white" />

---

## 📄 出版物

本工作目前正在 **IEEE Journal on Flexible Electronics (JFLEX)** 审稿中。

本仓库中的硬件设计和视觉资产直接对应于投稿中描述的系统。

* **完整引用**：正式录用后，最终论文的永久链接将立即在此处更新。
* **预印本/全文**：*即将推出。*
  
* 我们欢迎神经工程科研社区的反馈与合作！

* **咨询**：如需获取技术设计文件或有任何相关疑问，请邮件联系：
   * **技术支持**: [<font color="#60a5fa">support@ephys.tech</font>](mailto:support@ephys.tech)

---

## 📑 引用与 DOI

如果您在研究中使用了这些设计、代码或资产，请使用 Zenodo 提供的永久 DOI 引用本仓库：

**当前参考：**
> T. Bai, et al., "E-Link GitHub Repository," v1.0, MINE Lab, Dartmouth College, 2026. [![DOI](https://zenodo.org/badge/1119765398.svg)](https://doi.org/10.5281/zenodo.18440104)

---

<span id="cn-downloads"></span>
## 🔗 仓库与下载

本项目完全开源。相关论文录用后，包含 **PCB 制造文件 (Gerber/NC Drill)** 和 **3D打印文件** 的完整数据集将通过以下链接提供访问。

<div align="center">
  <p><b>👇 欢迎收藏本仓库以便未来下载：</b></p>

<div align="center">
  <a href="https://github.com/Tianyu-Bai/ELINK"><img src="https://img.shields.io/badge/GitHub-查看源仓库-181717?style=for-the-badge&logo=github&logoColor=white" alt="View on GitHub"></a>
  <img src="https://img.shields.io/badge/状态-锁定中，直到发表-A31F34?style=for-the-badge&logo=private" alt="Status Locked">
</div>
</div>

---

## 🤝 致谢

开发者衷心感谢 **美国国立卫生研究院 NIH R01MH139342** 和 **达特茅斯博士生创新奖学金 (Dartmouth PhD Innovation Fellowship)** 的支持。

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
