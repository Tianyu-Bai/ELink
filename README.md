# High-density, modular pedestal connector system for 256-channel neural recording interfaces.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Hardware Status](https://img.shields.io/badge/Hardware-Verified-green)](https://github.com/yourusername/repo)
[![CAD Software](https://img.shields.io/badge/CAD-SolidWorks-red)](https://www.solidworks.com/)

## 📖 Overview

This repository contains the mechanical and electrical design files for a high-density **Pedestal Connector** customized for chronic neural recording applications. The design serves as the interface between implanted neural probes and external headstages.

The system is optimized for Rats/Non-Human Primates, focusing on minimizing implant weight and maximizing structural integrity during behavioral experiments.

<p align="center">
  <img src="Images/render_iso.png" alt="Connector Isometric View" width="600">
  <br>
  <em>Figure 1: Isometric render of the assembled pedestal connector.</em>
</p>

## ✨ Key Features

* **High Channel Density:** Supports up to 256 channels in a compact footprint.
* **Headstage Compatibility:** Designed to mate perfectly with Intan RHD standard controllers.
* **Lightweight Construction:** Total assembly weight is approximately **6.4 g**, minimizing torque on the skull.
* **Surgical Integration:** Features textured sidewalls and anchor points for secure adhesion with dental cement or UV-curable resin.
* **Modular Design:** Separates the PCB interposer from the structural housing for easier testing and replacement.
# Pedestal-256

*The publication of this work can be found at [DOI Link]. The raw design files corresponding to the publication can be found at [Data Link].*

> [!NOTE]
> Detailed assembly guides and surgical documentation are available at [Link to Docs].

![Pedestal Assembly](./images/pedestal-system.jpg)

| Component | Description |
| :--: | :---------- |
| [Housing-V1](housing/README.md)  | 3D-printed/machined PEEK housing for securing the connector and protecting the headstage interface. |
| [Interposer-PCB](pcb/README.md) | High-density interconnect PCB routing signals from neural probes to the Omnetics/Intan connectors. |
| [Surgical-Cap](cap/README.md) | Protective cap design for maintaining connector integrity during the experimental timeline. |


## File Structure

| Folder  | Description    |
| :-----: | :------------- |
| housing | SolidWorks CAD files and STEP exports for the mechanical pedestal structure. |
| pcb     | Altium/KiCad design files for the signal routing interposer. |
| cap     | Design files for the protective surgical cap. |
| images  | Image files used in README and documentation. |

## EDA Tools used in the Development

| EDA Tool     | Version | Usage           |
| :----------: | :-----: | :-------------- |
| SolidWorks   | 2024    | Design of mechanical housing and assembly. |
| Altium Designer | 24.0 | Design of Interposer PCBs. |
| KiCad        | 8.0.0   | Legacy/Open-source PCB design files. |

## Developers
*  Main developers: Tianyu Bai, Dr. Gen Li, Dr. Hui Fang
*  Multifunctional Integrated NeuroElectronics (MINE) Lab, Dartmouth College, Hanover, NH

## License

Copyright Tianyu Bai 2025.

This source describes Open Hardware and is licensed under CERN-OHL-P v2.

You may redistribute and modify this source and make products using it under the terms of the CERN-OHL-P v2 ([https://cern.ch/cern-ohl](https://cern.ch/cern-ohl)). This source is distributed WITHOUT ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING OF MERCHANTABILITY, SATISFACTORY QUALITY AND FITNESS FOR A PARTICULAR PURPOSE. Please see the CERN-OHL-P v2 for applicable conditions.
## 📂 Repository Structure

```text
├── CAD/                 # Mechanical Design Files
│   ├── SolidWorks/      # .SLDPRT and .SLDASM source files
│   └── STEP/            # Exported step files for universal compatibility
├── PCB/                 # Circuit Board Design
│   ├── Altium_Designer/ # Source project files (PrjPcb)
│   ├── Gerbers/         # Manufacturing files
│   └── BOM/             # Bill of Materials (.csv)
├── Docs/                # Technical Documentation
│   ├── Assembly_Guide/  # Step-by-step assembly instructions
│   └── Datasheets/      # Component datasheets (Connectors, etc.)
└── Images/              # Renders and photos of the physical prototype
