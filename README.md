# 🚀 PEDAL-256
### An Open-Source, Solderless, High-Density Pedestal Connector for Neural Interfaces

<p align="center">
  <img src="Images/01.png" alt="PEDAL-256 Isometric View" width="750">
  <br>
  <b>Figure 1 · Isometric render of the assembled PEDAL-256 pedestal connector.</b>
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-CERN--OHL--P_v2-blue.svg?style=for-the-badge"></a>
  <img src="https://img.shields.io/badge/Hardware-Verified-brightgreen.svg?style=for-the-badge">
  <img src="https://img.shields.io/badge/CAD-SolidWorks_2024-red.svg?style=for-the-badge">
  <img src="https://img.shields.io/badge/PCB-Altium_%7C_KiCad-orange.svg?style=for-the-badge">
</p>

---

## 📖 Overview

**PEDAL-256** (Pedestal Elastomeric Dense Array Link) is an open-source, solderless, and scalable pedestal connector system designed for high-density chronic neural recording. It provides a mechanically robust and electrically reliable interface between thin-film implanted neural probes and external headstages, with a form factor optimized for freely moving animal studies.

> [!TIP]
> **Key Innovation:** The system integrates a high-density interposer PCB, an anisotropic elastomeric contact interface, and a lightweight pedestal housing into a fully integrated, headstage-ready solution.

### 📊 Quick Specifications

| Specification | Value |
| :--- | :--- |
| **Channel Count** | 256 Channels |
| **Total Mass** | ~6.4 g |
| **Interconnect Type** | Solderless Anisotropic Elastomer |
| **Compatibility** | Intan RHD / Omnetics / Thin-film Probes |
| **Housing Material** | 3D-Printed PEEK / Surgical Grade Resin |

---

## ✨ Key Features

* **⚡ 256-Channel High-Density Interface**
    Compact pedestal footprint supporting high-density acquisition without increasing surgical overhead.
* **🔌 Solderless Elastomeric Interconnect**
    Uses anisotropic conductive elastomer for repeatable, alignment-tolerant electrical contact.
* **🐭 Optimized for In-Vivo Research**
    Minimal mass (6.4g) designed to reduce skull torque in rats and non-human primates.
* **🛠️ Modular & Scalable**
    Separable housing, PCB, and protective cap for rapid iteration and troubleshooting.
* **🧪 Surgical-Grade Design**
    Textured sidewalls for superior adhesion with dental cement or UV-curable resin.

---

## 🧩 System Components

<p align="center">
  <img src="./images/02.jpg" alt="PEDAL-256 System Overview" width="680">
</p>

| Component | Description |
| :--- | :--- |
| **Housing** | 3D-printed/machined PEEK pedestal for mechanical protection. |
| **Interposer PCB** | High-density routing connecting thin-film probes to headstage. |
| **Surgical Cap** | Protective cap preserving connector integrity between sessions. |

---

## 📂 Repository Structure

```bash
├── CAD/                  # Mechanical design files
│   ├── SolidWorks/       # Native .SLDPRT / .SLDASM (2024)
│   └── STEP/             # Universal STEP exports
├── PCB/                  # Electrical design files
│   ├── Altium_Designer/  # Source PCB projects (v24.0)
│   ├── KiCad/            # Open-source PCB equivalents (v8.0)
│   └── Manufacturing/    # Gerbers & BOM
├── Docs/                 # Instructions & Data


👥 Developers & Lab
This project is developed by the Multifunctional Integrated NeuroElectronics (MINE) Lab at Dartmouth College.

Tianyu Bai - Lead Designer

Gen Li, Ph.D.

Yongli Qi, Ph.D.

Hui Fang, Ph.D. - Principal Investigator

<p align="left"> <a href="https://www.google.com/search?q=https://engineering.dartmouth.edu/research/labs/multifunctional-integrated-neuroelectronics-lab"> <img src="https://www.google.com/search?q=https://img.shields.io/badge/Dartmouth-MINE--Lab-00693E%3Fstyle%3Dflat-square" alt="MINE Lab"> </a> </p>

## 📑 Citation & Feedback

For academic use, please cite this repository until our formal publication is released. We also welcome feedback and collaboration from the neuroengineering community!

- **Current Reference:** PEDAL-256 Open Source Hardware (v1.0), MINE Lab, Dartmouth College.

## 📄 Publication

This work is currently **under review**. 

The hardware designs and visual assets in this repository correspond directly to the system described in our submitted manuscript. To maintain the integrity of the peer-review process:
* **Full Citation:** Will be updated here immediately upon formal acceptance.
* **Inquiries:** For access to the full manuscript or questions regarding the design, please contact **Tianyu Bai** or **Prof. Hui Fang**.
- **Full Paper:** *Coming Soon.*

📜 License
Copyright © 2026 Tianyu Bai. Licensed under the CERN Open Hardware Licence Version 2 – Permissive (CERN-OHL-P v2).
│   ├── Assembly_Guide/   # Step-by-step assembly
│   └── Datasheets/       # Components specifications
└── Images/               # Renders and photography
