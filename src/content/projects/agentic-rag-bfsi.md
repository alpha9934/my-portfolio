---
title: "Production-Grade Agentic RAG: Overcoming Hallucinations in BFSI"
description: "Architected a dual-agent evaluation pipeline that reduced silent production failures and quantified faithfulness using RAGAS and LangFuse."
publishDate: 2026-05-15
githubUrl: "https://github.com/alpha9934/agentic-rag-bfsi"
tags: ["Python", "Agentic AI", "RAGAS", "LangFuse", "GitHub Actions"]
category: "GenAI"
---

## 🏗️ The Problem & Architecture Constraints
Enterprise clients in heavily regulated domains like BFSI want to leverage LLMs but face a zero-tolerance policy for data drift and silent production failures. Classic, naive RAG architectures lack control loops, making them blind to hallucinations.

To fix this, I engineered an **Agentic RAG pipeline** that handles multi-step document retrieval before generating responses, utilizing strict validation gates.

## 💻 Tech Stack & Engineering Decisions
- **Orchestration:** Migrated core workflows from legacy schedulers to **Airflow** to manage complex state transitions and reliable dependency graphs.
- **AI & Evaluation Layer:** Implemented **RAGAS** paired with **LangFuse** for continuous monitoring. Every query triggers a self-check loop with a *faithfulness gate* to trap hallucinated tokens before they reach user interfaces.
- **CI/CD:** Automated testing pipelines using **GitHub Actions** to enforce regression testing on model prompts and vector database chunking algorithms.

## 📈 Measurable Production Impact
- **Accuracy:** Brought down unverified hallucinations to zero at the application layer by routing failed checks to an automated fallback agent.
- **Dwell Optimization:** Exposed these pipeline metrics directly to a monitoring dashboard, making the system entirely auditable for enterprise risk compliance teams.