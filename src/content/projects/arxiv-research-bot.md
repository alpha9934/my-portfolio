---
title: "ArXiv Research Paper Intelligence Bot"
description: "Developed an open-source automated RAG bot that continuously monitors, indexes, and queries newly published machine learning research papers."
publishDate: 2026-03-05
githubUrl: "https://github.com/alpha9934/ArXiv-GenAI-Research-Paper-Answer-Bot-Agentic-RAG-System"
tags: ["Python", "Streamlit", "Vector DB", "RAG", "LLM"]
category: "GenAI"
---

## 🏗️ The Problem & Architecture Constraints
The volume of weekly machine learning and generative AI research papers published to ArXiv makes manual tracking impossible for engineering teams. Researchers and developers need a centralized tool to quickly extract methodologies, mathematical formulas, and hyperparameter setups from long-form research papers without reading hundreds of pages.

## 💻 Tech Stack & Engineering Decisions
- **User Interface:** Built an interactive, highly responsive web dashboard using **Streamlit** to handle chat inputs, source citation rendering, and document viewing.
- **Vector Index Layer:** Designed an automated sync agent that pulls down target papers, runs precise text chunking optimized for mathematical notations, and stores dense embeddings in a specialized Vector Database.
- **Language Layer:** Utilized open-source LLMs tuned for high-context technical reading to ensure precise summaries and factual semantic lookups.

## 📈 Measurable Production Impact
- **Deployment Velocity:** Deployed seamlessly onto a cloud container architecture with full OAuth integration for external developer workspaces.
- **Search Latency:** Optimized vector retrieval metrics to surface granular paper equations and section references in under 2 seconds.