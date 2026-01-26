<div align="center">
  <h1 style="border-bottom: none; margin-bottom: 5px;">🚀 PEDAL-256</h1>
  
  <p align="center">
    <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=24&pause=1000&color=00693E&center=true&vCenter=true&width=750&lines=An+Open-Source,+Solderless,+High-Density;Pedestal+Connector+for+Neural+Interfaces" />
  </p>


<p align="center" style="margin-top: 15px;">
    <a href="https://sites.dartmouth.edu/fang-group/">
      <img src="https://img.shields.io/badge/Dartmouth-MINE--Lab-00693E?style=flat-square" alt="MINE Lab">
    </a>
    <img src="https://img.shields.io/badge/Verified-256ch-FFA500?style=flat-square" alt="Verified" />
    <a href="https://tianyu-bai.github.io/">
      <img src="https://img.shields.io/badge/Website-Tianyu%20Bai-0077B5?style=flat-square&logo=github&logoColor=white" alt="Website">
    </a>
    <a href="https://www.linkedin.com/in/tianyubai/">
      <img src="https://img.shields.io/badge/LinkedIn-Profile-0A66C2?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn">
    </a>
    <a href="LICENSE">
      <img src="https://img.shields.io/badge/License-MIT-A31F34?style=flat-square&logo=opensourceinitiative&logoColor=white" alt="License">
    </a>
  </p>

  <br />
  <img src="Videos/Demo%20new%20new.gif" 
       alt="PEDAL-256 Assembly Demo GIF" 
       width="750" 
       style="border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); display: block;">
</div>

<br>

## 📖 Overview

**PEDAL-256** (Pedestal Elastomeric Dense Array Link) is an open-source, solderless, and scalable pedestal connector system designed for high-density chronic neural recording. It provides a mechanically robust and electrically reliable interface between thin-film implanted neural probes and external headstages, with a form factor optimized for freely moving animal studies.

> [!NOTE]
> **Key Innovation:** The system integrates two high-density PCBs, an anisotropic elastomeric contact interface, and a lightweight pedestal housing into a fully integrated, headstage-ready solution.

### 📊 Quick Specifications

<div align="center">
  
  <table border="1" style="border-collapse: collapse; width: 80%; text-align: center;">
    <thead>
      <tr style="background-color: #f2f2f2;">
        <th>Specification</th>
        <th>PEDAL-256_V1.0</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><b>Channel Count</b></td>
        <td>128 or 256 Channels (Single/Dual SPI Port support)</td>
      </tr>
      <tr>
        <td><b>Total Mass</b></td>
        <td>~6.6 g (with housing)<br>~2.8 g (without housing)</td>
      </tr>
      <tr>
        <td><b>Interconnect Type</b></td>
        <td>Solderless Anisotropic Elastomer</td>
      </tr>
      <tr>
        <td><b>Compatible Acquisition System</b></td>
        <td>Intan Recording Controller (512ch/1024ch)<br>Open-Ephys DAQ box<br>NeuroNexus Smartbox</td>
      </tr>
      <tr>
        <td><b>Housing Material</b></td>
        <td>3D-Printed PEEK / Surgical Grade Resin</td>
      </tr>
    </tbody>
  </table>
</div>

<div align="center">

| Specification | PEDAL-256_V1.0 |
| :---: | :---: |
| **Channel Count** | 128 or 256 Channels (Single/Dual SPI Port support) |
| **Total Mass** | ~6.6 g (with housing)<br>~2.8 g (without housing) |
| **Interconnect Type** | Solderless Anisotropic Elastomer |
| **Compatible Acquisition System** | Intan Recording Controller (512ch/1024ch)<br>Open-Ephys DAQ box<br>NeuroNexus Smartbox |
| **Housing Material** | 3D-Printed PEEK / Surgical Grade Resin |

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
       alt="PEDAL-256 Animation GIF" 
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

### 🧩 Bill of Materials (BOM) of the headstage

<div align="center">
  <table border="1" style="border-collapse: collapse; width: 90%; text-align: center;">
    <thead>
      <tr style="background-color: #f2f2f2;">
        <th>Component</th>
        <th>Description</th>
        <th>Qty</th>
        <th>Package</th>
        <th>Notes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><b>Amplifier IC</b></td>
        <td>Intan RHD2164</td>
        <td>4</td>
        <td>BGA</td>
        <td><b>Critical:</b> Ensure correct orientation</td>
      </tr>
      <tr>
        <td><b>SPI Connector</b></td>
        <td>Omnetics A7621</td>
        <td>2</td>
        <td>-</td>
        <td>12-wire cable harness (32 AWG)</td>
      </tr>
      <tr>
        <td><b>Resistors</b></td>
        <td>Standard SMD</td>
        <td>7</td>
        <td>0402</td>
        <td>-</td>
      </tr>
      <tr>
        <td><b>Capacitors</b></td>
        <td>Standard SMD</td>
        <td>8</td>
        <td>0603</td>
        <td>-</td>
      </tr>
      <tr>
        <td><b>Power LED</b></td>
        <td>Green LED</td>
        <td>1</td>
        <td>0402</td>
        <td>Power Indicator</td>
      </tr>
      <tr>
        <td><b>Solder Balls</b></td>
        <td>0.4 mm Lead-free</td>
        <td>~300</td>
        <td>-</td>
        <td>For BGA rework/assembly</td>
      </tr>
    </tbody>
  </table>
</div>

---

## 👥 Developers & Lab

This project is developed by the **Multifunctional Integrated NeuroElectronics (MINE) Lab** at Dartmouth College.

<a href="https://sites.dartmouth.edu/fang-group/">
  <img src="https://img.shields.io/badge/MINE--Lab-00693E?style=flat-square" alt="MINE Lab">
</a>

* **Tianyu Bai** (Lead Designer)
  <a href="https://tianyu-bai.github.io/">
    <img src="https://img.shields.io/badge/Portfolio-Tianyu%20Bai-FFD700?style=flat-square&logo=adobelightroom&logoColor=black" />
  </a>

* **Gen Li, Ph.D.**

* **Hui Fang, Ph.D.** 
  <a href="https://engineering.dartmouth.edu/community/faculty/hui-fang">
    <img src="https://img.shields.io/badge/Principal%20Investigator-444444?style=flat-square&logoColor=white" />
  </a>

---

## 📑 Citation & Feedback

For academic use, please cite this repository until our formal publication is released. We also welcome feedback and collaboration from the neuroengineering community!

* **Current Reference:** PEDAL-256 Open Source Hardware (V1.0), MINE Lab, Dartmouth College.

---

## 📄 Publication

This work is currently **under review**. 

The hardware designs and visual assets in this repository correspond directly to the system described in our submitted manuscript. To maintain the integrity of the peer-review process:
* **Full Citation:** Will be updated here upon formal acceptance.
* **Inquiries:** For access to the full manuscript or questions regarding the design, please contact **Tianyu Bai** or **Prof. Hui Fang**.
* **Full Paper:** *Coming Soon.*

---

## 🤝 Acknowledgments

The developers gratefully acknowledge support from the **NIH (R01MH139342)** and the **Dartmouth PhD Innovation Fellowship**. 

Special thanks to the members of the **MINE Lab** and the **Thayer School of Engineering** for their technical support and feedback throughout the development of the PEDAL-256 system.

## 📜 License

Copyright © 2026 <font color="#00693E">Tianyu Bai</font>.

This project is open-source and available under the **MIT License**. Click the badge below for full license details.

<div align="center">
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-A31F34?style=flat-square&logo=opensourceinitiative&logoColor=white" alt="License">
  </a>
</div>
