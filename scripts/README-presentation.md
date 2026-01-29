# SKIFIN Presentation Generator

This folder contains a Python script that generates **SKIFIN_Presentation.pptx** from the website content. The **structure mirrors** **Digital_Security_Services_DSS_Presentation.pptx** (16 slides).

## What the presentation includes (DSS-style flow)

1. **Title** — SKIFIN | AI-Assisted Solutions Through Vibe Coding | Professional AI & IT Services  
2. **SKIFIN Overview** — Introduction, two pillars (AI Services, Solutions), Mission  
3. **AI Services** — Consulting & Delivery: bullets (Architecture, Deployment, PoC/Pilots, service coverage) + footer  
4. **Offerings Overview** — Section title only  
5–14. **One slide per offering** (section title only): AI Automation, Cloud Security, DevOps & DevSecOps, AI/ML Solutions, Data Analytics, Cloud Migration, Vibe Coding, Implementation & Support, Subsman, Intelligent CRM  
15. **Summary & Differentiators** — Stats, experience, services, solutions, mission  
16. **Thank You / Contact** — contact@skifin.com, phone, Noida address  

Content is taken from: Home, About, Contact, all service pages, Subsman, and CRM.

## How to run

```bash
cd scripts
pip install -r requirements-pptx.txt
python generate_skifin_presentation.py
```

Output: `SKIFIN_Presentation.pptx` in the project root (`../SKIFIN_Presentation.pptx` relative to `scripts/`).

## Customization

Edit `generate_skifin_presentation.py` to change:

- **Brand colors** — `DARK_BG`, `ACCENT`, `WHITE`, `GRAY` at the top  
- **Slide content** — alter the lists in each `add_content_slide` / `add_stats_slide` / `add_two_column_slide` call  
- **Order or number of slides** — add/remove/reorder the same function calls in `main()`
