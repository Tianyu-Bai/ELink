# Neural Interface Pedestal Connector

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
