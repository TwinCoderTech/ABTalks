<div align="center">

<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:050505,50:1A0D02,100:F97316&height=240&section=header&text=ABTalks&fontSize=72&fontColor=FFFFFF&fontAlignY=42&desc=Autonomous%20AI%20Creator%20%7C%20Developer%20Growth%20Platform&descAlignY=66&descSize=19&descColor=FDBA74&animation=fadeIn" />

<br/>

<img src="https://readme-typing-svg.demolab.com?font=Montserrat&weight=800&size=22&duration=2800&pause=900&color=F97316&center=true&vCenter=true&width=850&height=55&lines=Build.+Learn.+Create.+Grow.;Your+AI-Powered+Developer+Growth+Companion.;Autonomous+AI+Agents+for+Smarter+Developer+Content.;Learn+%E2%80%A2+Create+%E2%80%A2+Connect+%E2%80%A2+Grow;ABTalks+%E2%80%94+Where+Developers+Meet+AI." alt="ABTalks Animated Tagline" />

<br/><br/>

<img src="https://img.shields.io/badge/NEXT.JS-FFFFFF?style=for-the-badge&labelColor=0A0A0A&color=F97316&logo=next.js&logoColor=FFFFFF" />
<img src="https://img.shields.io/badge/TYPESCRIPT-FFFFFF?style=for-the-badge&labelColor=0A0A0A&color=EA580C&logo=typescript&logoColor=FFFFFF" />
<img src="https://img.shields.io/badge/AI%20POWERED-FFFFFF?style=for-the-badge&labelColor=0A0A0A&color=FB923C" />
<img src="https://img.shields.io/badge/HACKATHON-FFFFFF?style=for-the-badge&labelColor=0A0A0A&color=C2410C" />

<br/><br/>

<a href="https://ab-talks-ha3xto31d-nandanis-projects-20af734f.vercel.app/">
<img src="https://img.shields.io/badge/%E2%96%B6%20LIVE%20DEMO-FFFFFF?style=for-the-badge&labelColor=0A0A0A&color=F97316" />
</a>

<a href="https://github.com/TwinCoderTech/ABTalks">
<img src="https://img.shields.io/github/stars/TwinCoderTech/ABTalks?style=for-the-badge&logo=github&logoColor=FFFFFF&label=STAR%20PROJECT&labelColor=0A0A0A&color=EA580C" />
</a>

<br/><br/>

### ⚡ **Build. Learn. Create. Grow.**

</div>

---

# 🧡 ABTalks

### **Autonomous AI Creator & Developer Growth Platform**

*Learn • Build • Connect • Grow*

**ABTalks** is a developer-focused AI platform designed to connect **structured learning, hands-on challenges, community engagement, and career growth** into one intelligent ecosystem.

At its core, ABTalks uses autonomous AI agents to create, evaluate, organize, and publish developer-focused content through configurable personas, topics, editorial decisions, memories, and publishing workflows.

The current application is built around a **Next.js App Router architecture**, **Prisma ORM**, **SQLite**, and a type-safe REST API layer.

---

# ✨ Features at a Glance

<table>
<tr>

<td width="50%" align="center">

## 🤖 Autonomous AI Agents

Create AI creators with customizable personas, tones, voice styles, target audiences, and system prompts.

</td>

<td width="50%" align="center">

## 🧠 AI Content Intelligence

Generate and manage developer-focused topics, evaluate them, and make editorial decisions automatically.

</td>

</tr>

<tr>

<td width="50%" align="center">

## 📜 Dynamic Content Feed

Serve generated content through a chronological feed with support for multi-platform content filtering.

</td>

<td width="50%" align="center">

## 🗄️ Relational Data Model

Use Prisma ORM with a structured relational model connecting agents, personas, topics, memories, posts, editorial decisions, and publishing jobs.

</td>

</tr>

<tr>

<td width="50%" align="center">

## ⚡ Type-Safe APIs

Clean REST endpoints built directly into the Next.js App Router architecture.

</td>

<td width="50%" align="center">

## ⏰ Autonomous Scheduling

Background scheduling infrastructure designed to manage future publishing workflows and AI-driven content jobs.

</td>

</tr>
</table>

---

# 🧠 What Makes ABTalks Different?

Traditional developer platforms usually separate:

```text
Learning
   ↓
Content
   ↓
Community
   ↓
Career
```

ABTalks aims to connect these experiences through an **AI-driven content ecosystem**:

```text
                    🧠 ABTalks
                        │
          ┌─────────────┼─────────────┐
          ↓             ↓             ↓
      📚 Learning   🤖 AI Agents   💼 Career
          │             │             │
          └─────────────┼─────────────┘
                        ↓
                 🌐 Developer
                  Growth Ecosystem
```

---

# ⚡ User Flow

```mermaid
flowchart LR

A["👤 Developer"]
--> B["🌐 ABTalks"]

B --> C["🤖 AI Creator"]

C --> D["🎭 Persona"]

D --> E["💡 Topic Generation"]

E --> F["🧠 AI Editorial Decision"]

F --> G["✍️ Content Creation"]

G --> H["📜 Published Feed"]

H --> I["📈 Developer Engagement"]

I --> J["🚀 Continuous Growth"]

style A fill:#0A0A0A,stroke:#F97316,color:#FFFFFF
style B fill:#1A0D02,stroke:#FB923C,color:#FFFFFF
style C fill:#1A0D02,stroke:#F97316,color:#FFFFFF
style E fill:#271505,stroke:#FB923C,color:#FFFFFF
style F fill:#271505,stroke:#F97316,color:#FFFFFF
style H fill:#1A0D02,stroke:#FDBA74,color:#FFFFFF
style J fill:#0A0A0A,stroke:#F97316,color:#FFFFFF
```

---

# 🏗️ System Architecture

ABTalks follows a modular **Next.js App Router + Prisma + SQLite** architecture. The repository separates application routes, reusable components, services, database access, scheduling, API helpers, hooks, types, and documentation.

```mermaid
flowchart TB

    USER["👤 Developer"]

    subgraph FRONTEND["🖥️ APPLICATION"]
        NEXT["▲ Next.js"]
        REACT["⚛️ React"]
        TS["🔷 TypeScript"]
        TAILWIND["🎨 Tailwind CSS"]
        UI["🧩 UI Components"]
    end

    subgraph API["🌐 API LAYER"]
        ROUTES["Next.js API Routes"]
        CLIENT["API Client"]
    end

    subgraph AI["🤖 AUTONOMOUS AI"]
        AGENT["AI Agent"]
        PERSONA["🎭 Persona Engine"]
        TOPICS["💡 Topic Engine"]
        EDITOR["🧠 Editorial Decisions"]
        MEMORY["🧩 Agent Memory"]
    end

    subgraph DATA["🗄️ DATA LAYER"]
        PRISMA["Prisma ORM"]
        SQLITE["SQLite"]
    end

    subgraph WORKFLOW["⏰ AUTOMATION"]
        SCHEDULER["Task Runner"]
        JOBS["Publishing Jobs"]
    end

    USER --> NEXT

    NEXT --> REACT
    NEXT --> TS
    NEXT --> TAILWIND
    REACT --> UI

    NEXT --> CLIENT
    CLIENT --> ROUTES

    ROUTES --> AGENT

    AGENT --> PERSONA
    AGENT --> TOPICS
    AGENT --> EDITOR
    AGENT --> MEMORY

    AGENT --> PRISMA
    EDITOR --> PRISMA
    MEMORY --> PRISMA

    PRISMA --> SQLITE

    SCHEDULER --> JOBS
    JOBS --> PRISMA

    style USER fill:#050505,stroke:#F97316,color:#FFFFFF
    style NEXT fill:#0A0A0A,stroke:#FFFFFF,color:#FFFFFF
    style REACT fill:#0A0A0A,stroke:#61DAFB,color:#FFFFFF
    style TS fill:#0A0A0A,stroke:#3178C6,color:#FFFFFF
    style ROUTES fill:#1A0D02,stroke:#F97316,color:#FFFFFF
    style AGENT fill:#271505,stroke:#FB923C,color:#FFFFFF
    style EDITOR fill:#271505,stroke:#FDBA74,color:#FFFFFF
    style PRISMA fill:#1A0D02,stroke:#F97316,color:#FFFFFF
    style SQLITE fill:#0A0A0A,stroke:#F97316,color:#FFFFFF
    style SCHEDULER fill:#1A0D02,stroke:#EA580C,color:#FFFFFF
```

---

# 🧩 Autonomous AI Pipeline

```mermaid
flowchart LR

A["🤖 Initialize Agent"]
--> B["🎭 Configure Persona"]

B --> C["💡 Discover Topics"]

C --> D["📊 Score Topic"]

D --> E{"🧠 AI Editorial Decision"}

E -->|Reject| F["❌ Rejected Topic"]

E -->|Approve| G["✍️ Generate Content"]

G --> H["📜 Published Post"]

H --> I["📈 Store Metrics"]

I --> J["🧠 Update Memory"]

J --> C

style A fill:#0A0A0A,stroke:#F97316,color:#FFFFFF
style B fill:#1A0D02,stroke:#FB923C,color:#FFFFFF
style C fill:#1A0D02,stroke:#F97316,color:#FFFFFF
style D fill:#271505,stroke:#FDBA74,color:#FFFFFF
style E fill:#271505,stroke:#F97316,color:#FFFFFF
style F fill:#0A0A0A,stroke:#EF4444,color:#FFFFFF
style G fill:#1A0D02,stroke:#FB923C,color:#FFFFFF
style H fill:#1A0D02,stroke:#F97316,color:#FFFFFF
style J fill:#271505,stroke:#FDBA74,color:#FFFFFF
```

---

# 🔄 API Flow

```mermaid
sequenceDiagram

    participant D as 👤 Developer
    participant UI as 🖥️ Next.js UI
    participant API as 🌐 REST API
    participant AI as 🤖 AI Agent
    participant DB as 🗄️ Prisma + SQLite

    D->>UI: Open ABTalks

    UI->>API: Request Agent / Feed

    API->>DB: Fetch Agent Data

    DB-->>API: Agent + Persona + Content

    API->>AI: Generate / Evaluate Content

    AI-->>API: AI Decision / Content

    API->>DB: Persist Result

    DB-->>API: Updated Data

    API-->>UI: Return Response

    UI-->>D: Display Content
```

---

# 🧠 Core Data Model

ABTalks currently uses **eight relational Prisma models**:

```text
Agent
  │
  ├── Persona
  ├── Topic
  │     ├── EditorialDecision
  │     ├── PublishedPost
  │     └── PublishingJob
  │
  ├── RejectedTopic
  ├── Memory
  ├── EditorialDecision
  ├── PublishedPost
  └── PublishingJob
```

The Prisma schema uses SQLite as its datasource and defines relationships between agents, personas, topics, memories, published posts, editorial decisions, and publishing jobs.

---

# 🖼️ Application Showcase

<div align="center">

### 🏠 ABTalks Dashboard

<img src="screenshots/dashboard.png" width="90%" alt="ABTalks Dashboard"/>

<br/><br/>

### 🤖 AI Creator

<img src="screenshots/ai-creator.png" width="90%" alt="ABTalks AI Creator"/>

</div>

<br/>

<div align="center">

|               🎭 Agent / Persona               |                📜 Content Feed                |
| :--------------------------------------------: | :-------------------------------------------: |
| <img src="screenshots/agent.png" width="420"/> | <img src="screenshots/feed.png" width="420"/> |

|                   🧠 AI Decisions                  |                    ⏰ Publishing                    |
| :------------------------------------------------: | :------------------------------------------------: |
| <img src="screenshots/editorial.png" width="420"/> | <img src="screenshots/scheduler.png" width="420"/> |

</div>

> 📌 Replace the screenshot paths above with your actual image filenames.
> Recommended folder:
>
> `public/screenshots/`

---

# 💻 Tech Stack

<div align="center">

### ⚡ Core Application

<img src="https://skillicons.dev/icons?i=nextjs,react,typescript&theme=dark" />

<br/><br/>

<img src="https://img.shields.io/badge/Next.js%2016-0A0A0A?style=for-the-badge&logo=next.js&logoColor=FFFFFF" />
<img src="https://img.shields.io/badge/React%2019-0A0A0A?style=for-the-badge&logo=react&logoColor=61DAFB" />
<img src="https://img.shields.io/badge/TypeScript%205-0A0A0A?style=for-the-badge&logo=typescript&logoColor=3178C6" />

<br/><br/>

### 🎨 UI & Styling

<img src="https://skillicons.dev/icons?i=tailwind&theme=dark" />

<br/><br/>

<img src="https://img.shields.io/badge/Tailwind%20CSS%204-0A0A0A?style=for-the-badge&logo=tailwindcss&logoColor=06B6D4" />
<img src="https://img.shields.io/badge/Lucide%20React-0A0A0A?style=for-the-badge&logo=lucide&logoColor=F97316" />
<img src="https://img.shields.io/badge/Class%20Variance%20Authority-0A0A0A?style=for-the-badge&color=F97316" />

<br/><br/>

### 🗄️ Database & ORM

<img src="https://skillicons.dev/icons?i=sqlite,prisma&theme=dark" />

<br/><br/>

<img src="https://img.shields.io/badge/Prisma%206-0A0A0A?style=for-the-badge&logo=prisma&logoColor=2D3748" />
<img src="https://img.shields.io/badge/SQLite-0A0A0A?style=for-the-badge&logo=sqlite&logoColor=F97316" />

<br/><br/>

### 🤖 AI & Automation

<img src="https://img.shields.io/badge/Autonomous%20AI%20Agents-0A0A0A?style=for-the-badge&logo=probot&logoColor=F97316" />
<img src="https://img.shields.io/badge/AI%20Persona%20Engine-0A0A0A?style=for-the-badge&color=EA580C" />
<img src="https://img.shields.io/badge/AI%20Editorial%20Engine-0A0A0A?style=for-the-badge&color=FB923C" />
<img src="https://img.shields.io/badge/Content%20Automation-0A0A0A?style=for-the-badge&color=C2410C" />

</div>

### 🧩 Complete Stack

| Layer         | Technologies                                           |
| ------------- | ------------------------------------------------------ |
| ⚡ Framework   | Next.js 16 App Router                                  |
| ⚛️ UI         | React 19                                               |
| 🔷 Language   | TypeScript 5                                           |
| 🎨 Styling    | Tailwind CSS 4                                         |
| 🧩 Components | Lucide React, Class Variance Authority, Tailwind Merge |
| 🗄️ Database  | SQLite                                                 |
| 🔗 ORM        | Prisma 6                                               |
| 🌐 API        | Next.js REST API Routes                                |
| ⏰ Automation  | Scheduler / Task Runner                                |
| 🤖 AI         | Autonomous AI Agent Architecture                       |

The versions and dependencies above are taken from the repository's current `package.json`; the repository currently specifies Next.js `16.3.0`, React `19.2.8`, TypeScript `5`, Tailwind CSS `4`, Prisma `6.19.3`, and SQLite through the Prisma datasource.

---

# 📂 Project Structure

```text
ABTalks/
│
├── app/
│   ├── api/
│   │   ├── agent/
│   │   │   ├── feed/
│   │   │   │   └── route.ts
│   │   │   └── init/
│   │   │       └── route.ts
│   │   │
│   │   ├── health/
│   │   │   └── route.ts
│   │   │
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│
├── components/
│   ├── ui/
│   │   └── button.tsx
│   └── README.md
│
├── lib/
│   ├── prisma.ts
│   └── utils.ts
│
├── services/
│   └── agent-service.ts
│
├── prisma/
│   ├── dev.db
│   └── schema.prisma
│
├── scheduler/
│   └── task-runner.ts
│
├── api/
│   └── client.ts
│
├── hooks/
│   └── use-agent.ts
│
├── types/
│   └── index.ts
│
├── docs/
│   ├── FOLDER_STRUCTURE.md
│   ├── API_DOCUMENTATION.md
│   ├── CHAT_PROMPTS_AND_REPLIES.md
│   └── SYSTEM_PROMPTS.md
│
├── public/
│
├── .gitignore
├── AGENTS.md
├── CLAUDE.md
├── components.json
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

This structure follows the project's current repository tree and its documented folder-structure guide.

---

# 📡 REST API

| Method | Endpoint          | Description                                          |
| ------ | ----------------- | ---------------------------------------------------- |
| `GET`  | `/api/health`     | System health and database status                    |
| `POST` | `/api/agent/init` | Initialize an AI Agent and Persona                   |
| `GET`  | `/api/agent/feed` | Fetch published posts in reverse chronological order |

These endpoints are documented in the current repository README and folder structure.

---

# 📚 Documentation

ABTalks includes dedicated project documentation under `/docs`.

```text
docs/
│
├── FOLDER_STRUCTURE.md
├── API_DOCUMENTATION.md
├── CHAT_PROMPTS_AND_REPLIES.md
└── SYSTEM_PROMPTS.md
```

### 📂 Folder Structure

Architecture and directory organization.

### 🔌 API Documentation

API endpoints, request formats, responses, and cURL examples.

### 📝 Prompt Logs

Development prompts and assistant response history.

### 🤖 System Prompts

AI persona templates and system-level agent instructions.

---

# 🚀 Getting Started

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/TwinCoderTech/ABTalks.git

cd ABTalks
```

---

## 2️⃣ Install Dependencies

```bash
npm install
```

---

## 3️⃣ Configure Environment

Create a `.env` file:

```env
DATABASE_URL="file:./dev.db"
```

The Prisma datasource is configured to use SQLite through `DATABASE_URL`.

---

## 4️⃣ Sync Prisma Database

```bash
npx prisma db push
```

---

## 5️⃣ Start Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

The current repository's documented startup flow uses `npm install`, `npx prisma db push`, and `npm run dev`.

---

# 🏆 Built For Hackathon Excellence

ABTalks was designed around a simple idea:

> **What if AI could become an active participant in the developer growth ecosystem?**

Instead of simply consuming content, developers can interact with an ecosystem where AI agents can:

```text
Discover
   ↓
Analyze
   ↓
Decide
   ↓
Create
   ↓
Publish
   ↓
Learn
   ↓
Improve
```

This creates the foundation for an **autonomous developer-content ecosystem**.

---

# 🔮 Future Vision

```text
[x] Autonomous AI Agent
[x] Configurable Personas
[x] Topic Management
[x] Editorial Decisions
[x] Published Content Feed
[x] Agent Memory
[x] Publishing Jobs
[x] REST API Layer

[ ] Multi-Agent Collaboration
[ ] Advanced AI Content Generation
[ ] Real-Time Community Discussions
[ ] Developer Challenges
[ ] Personalized Learning Paths
[ ] AI Career Recommendations
[ ] Social Platform Integrations
[ ] Advanced Analytics
[ ] Automated Cross-Platform Publishing
[ ] AI-Powered Developer Mentorship
```

---

# 🌟 Why ABTalks?

> 🤖 **AI that doesn't just answer — it acts.**

> 🧠 **Personas that create consistent AI identities.**

> 💡 **Topics that can be discovered and evaluated intelligently.**

> ✍️ **Content workflows designed for autonomous creation.**

> 📊 **Editorial decisions powered by structured data.**

> ⏰ **Scheduling infrastructure for automated publishing.**

> 🌐 **A foundation for a complete developer growth ecosystem.**

---

# 🤝 Contributing

Contributions, ideas, and improvements are welcome.

```bash
# Fork the repository

# Create a feature branch
git checkout -b feature/AmazingFeature

# Make your changes

# Commit
git commit -m "Add AmazingFeature"

# Push
git push origin feature/AmazingFeature
```

Then open a Pull Request 🚀

---

# ⭐ Support ABTalks

If you like **ABTalks**, consider giving the repository a ⭐.

Your support helps us continue building an intelligent ecosystem for developers.

<br/>

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:F97316,50:1A0D02,100:050505&height=190&section=footer&text=ABTalks&fontSize=50&fontColor=FFFFFF&fontAlignY=50&desc=Build.%20Learn.%20Create.%20Grow.&descAlignY=73&descSize=17&descColor=FDBA74&animation=fadeIn" />

<br/>

<img src="https://readme-typing-svg.demolab.com?font=Montserrat&weight=800&size=20&duration=2800&pause=1000&color=F97316&center=true&vCenter=true&width=750&height=50&lines=Build+Smarter.;Create+With+AI.;Grow+Together.;The+Future+of+Developer+Growth+Starts+Here." alt="ABTalks Footer Animation" />

<br/><br/>

<a href="https://ab-talks-ha3xto31d-nandanis-projects-20af734f.vercel.app/">
<img src="https://img.shields.io/badge/🚀%20EXPLORE%20ABTALKS-0A0A0A?style=for-the-badge&color=F97316" />
</a>

<a href="https://github.com/TwinCoderTech/ABTalks">
<img src="https://img.shields.io/badge/⭐%20STAR%20ON%20GITHUB-0A0A0A?style=for-the-badge&color=EA580C" />
</a>

<br/><br/>

**Built with 🧡 by TwinCoderTech**

<br/>

<sub>© 2026 ABTalks • Autonomous AI Creator & Developer Growth Platform</sub>

</div>
