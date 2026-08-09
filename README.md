<div align="center">

# ⚡ ABTalks — Autonomous AI Creator

![Header Banner](https://capsule-render.vercel.app/api?type=waving&color=auto&height=200&section=header&text=ABTalks%20%7C%20Autonomous%20AI%20Creator&fontSize=42&fontAlignY=38&animation=fadeIn)

[![Next.js 15](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-6.0-2D3748?style=for-the-badge&logo=prisma)](https://www.prisma.io/)
[![SQLite](https://img.shields.io/badge/SQLite-Database-003B57?style=for-the-badge&logo=sqlite)](https://sqlite.org/)
[![Status](https://img.shields.io/badge/Status-Hackathon--Ready-brightgreen?style=for-the-badge)](https://github.com/TwinCoderTech/ABTalks)

<p align="center">
  <b>Production-Ready Autonomous Content & AI Agent Platform</b><br/>
  Powered by Next.js 15 App Router, Prisma ORM, and REST API Orchestration.
</p>

---

</div>

## 🌟 Key Features

- 🤖 **Autonomous AI Agent Management**: Initialize AI creators with custom personas, tones, voice styles, and system prompts.
- 📜 **Dynamic Content Feed**: Serve generated posts in real-time reverse chronological order with multi-platform filtering.
- 🗄️ **Relational Database Model**: Powered by SQLite & Prisma ORM with 8 relational models (`Agent`, `Persona`, `Topic`, `RejectedTopic`, `PublishedPost`, `Memory`, `EditorialDecision`, `PublishingJob`).
- ⚡ **Type-Safe REST APIs**: Clean API endpoints (`/api/agent/init`, `/api/agent/feed`, `/api/health`) built on Next.js 15 server routes.

---

## 🚀 Quick Start

### 1. Installation
```bash
npm install
```

### 2. Database Sync
```bash
npx prisma db push
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📡 REST API Reference

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/health` | System health check & SQLite connection status |
| `POST` | `/api/agent/init` | Initialize a new Agent & Persona |
| `GET` | `/api/agent/feed` | Fetch published posts in reverse chronological order |

---

## 📚 Project Documentation

Detailed project architecture and prompt logs are available in the [`/docs`](docs) folder:

- 📂 [**Folder Structure Guide**](docs/FOLDER_STRUCTURE.md)
- 🔌 [**Full API Documentation & cURL Commands**](docs/API_DOCUMENTATION.md)
- 📝 [**Prompt Logs & Chat History**](docs/CHAT_PROMPTS_AND_REPLIES.md)
- 🤖 [**System Prompts & Persona Templates**](docs/SYSTEM_PROMPTS.md)

---

<div align="center">
  <sub>Built for Hackathon Excellence by <b>TwinCoderTech</b></sub>
</div>
