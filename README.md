
<div class="github-only">
  <p align="center">
    <a href="https://tianyu-bai.github.io/E-Link">
      🌐 Click here to view the interactive website
    </a>
  </p>
</div>

<div align="center" class="nav-badges">
  <a href="#-overview"><img src="https://img.shields.io/badge/📖_Overview-3b82f6?style=flat-square&logoColor=white" alt="Overview"></a>
  <a href="#-key-features"><img src="https://img.shields.io/badge/✨_Features-3b82f6?style=flat-square&logoColor=white" alt="Features"></a>
  <a href="#-quick-specifications"><img src="https://img.shields.io/badge/📊_Specs-3b82f6?style=flat-square&logoColor=white" alt="Specs"></a>
  <a href="#-system-components"><img src="https://img.shields.io/badge/🧩_Components-3b82f6?style=flat-square&logoColor=white" alt="Components"></a>
  <a href="#-bill-of-materials-bom-of-the-headstage"><img src="https://img.shields.io/badge/🛠_BOM-3b82f6?style=flat-square&logoColor=white" alt="BOM"></a>
  <a href="#-repository--downloads"><img src="https://img.shields.io/badge/🔗_Downloads-3b82f6?style=flat-square&logoColor=white" alt="Downloads"></a>
</div>
  
<div align="center">
  <h1 style="border-bottom: none; margin-bottom: 5px; color: #60a5fa; font-size: 2em;">🚀 E-Link(256)</h1>
  
<div align="center">
    <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=30&pause=1000&color=60a5fa&center=true&vCenter=true&width=1100&lines=An+Open-Source,+Elastomer+Interconnection-based;Connector+for+Flexible+Neural+Interfaces" />
</div>

  <div  align="center" style="margin-top: 15px;">
    <a href="https://sites.dartmouth.edu/fang-group/"><img src="https://img.shields.io/badge/Dartmouth-MINE--Lab-00693E?style=flat-square" alt="MINE Lab"></a>
    <img src="https://img.shields.io/badge/Verified-256ch-FFA500?style=flat-square" alt="Verified" />
    <a href="https://tianyu-bai.github.io/"><img src="https://img.shields.io/badge/Website-Tianyu%20Bai-0077B5?style=flat-square&logo=github&logoColor=white" alt="Website"></a>
    <a href="https://www.linkedin.com/in/tianyubai/"><img src="https://img.shields.io/badge/LinkedIn-Profile-0A66C2?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
     <a href="https://github.com/tianyu-bai/E-Link/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-A31F34?style=flat-square&logo=opensourceinitiative&logoColor=white" alt="License"></a>
  </div>

  <img src="Videos/Demo new new.gif"
       alt="ELINK-256 Assembly Demo GIF"
       width="750"
       style="border-radius: 8px;
              box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
              display: block;">
</div>

## 📖 Overview

**E-Link** (Elastomer Interconnection-based connector)：An open-source elastomer connector for high-density neural recording. It provides a robust, compact interface connecting thin-film probes to headstages for freely moving animals.

<div align="center">
  <img src="Images/001.PNG" alt="PEDAL-256 Exploded View" width="750">
  <p style="margin-top: 5px; font-size: 0.95em; color: #cbd5e1;">
    <b>Mating Dynamics (left) and Structural Breakdown (right) of the E-Link(256) </b>
  </p>
</div>

> [!NOTE]
> **Key Innovation:** The system integrates two high-density PCBs, an anisotropic elastomeric contact interface, and a lightweight pedestal housing into a fully integrated, headstage-ready solution.

---

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

## ✨ Key Features

* **⚡ 256-Channel High-Density Interface**
  Compact pedestal footprint supporting high-density acquisition without increasing surgical overhead.
* **🔌 Solderless Elastomeric Interconnect**
  Uses anisotropic conductive elastomer for repeatable, alignment-tolerant electrical contact.
* **🐭 Optimized for In-Vivo Research**
  Minimal Implant Footprint Core components weigh only 2.8g (with housing removed), reducing head-heavy behavior and improving animal welfare during long-term recording sessions.
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

### 🛠 Bill of Materials (BOM) of the headstage

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
* **Hui Fang, Ph.D.**  <a href="https://engineering.dartmouth.edu/community/faculty/hui-fang"><img src="https://img.shields.io/badge/Principal%20Investigator-444444?style=flat-square&logoColor=white" />

---

## 📄 Publication

This work is currently **under review** at the *IEEE Journal on Flexible Electronics (JFLEX)*.

The hardware designs and visual assets in this repository correspond directly to the system described in the submitted manuscript. To maintain the integrity of the peer-review process:

* **Full Citation**: A permanent link to the final paper will be updated here immediately upon formal acceptance.
* **Preprint/Full Paper**: *Coming Soon.*
  
* We welcome feedback and collaboration from the neuroengineering community!

* **Inquiries**: For access to the technical design files or questions, please contact:
    * **Tianyu Bai** ([<font color="#60a5fa">Tianyu.Bai.TH@Dartmouth.edu</font>](mailto:Tianyu.Bai.TH@Dartmouth.edu))
    * **Prof. Hui Fang** ([<font color="#60a5fa">Hui.Fang@Dartmouth.edu</font>](mailto:Hui.Fang@Dartmouth.edu))

---

## 📑 Citation & DOI

If you utilize these designs, code, or assets in your research, please cite this repository using the persistent DOI provided by Zenodo:

**Current Reference:**
> T. Bai, et al., "E-Link GitHub Repository," v1.0, MINE Lab, Dartmouth College, 2026. [![DOI](https://zenodo.org/badge/1119765398.svg)](https://doi.org/10.5281/zenodo.18440104)

---

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

Copyright © 2026 Tianyu Bai  <a href="https://tianyu-bai.github.io/"><img src="https://img.shields.io/badge/Website-Tianyu%20Bai-0077B5?style=flat-square&logo=github&logoColor=white" alt="Website"></a>

This project is open-source hardware and available under the *Licenses**. Click the badge below for full license details.
Hardware Source Files (KiCad/Gerbers/STL files): Licensed under MIT License.
Documentation, Schematics (PDF), and Images: Licensed under CC BY 4.0 International.

<div align="center">
  <a href="https://github.com/tianyu-bai/E-Link/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-A31F34?style=flat-square&logo=opensourceinitiative&logoColor=white" alt="License">
  </a>
</div>
