# 🤖 Autonomous AI Creator

> Production-Ready Hackathon Platform built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, **Prisma**, **SQLite**, and **Shadcn UI**.

---

## 📁 Folder Structure Overview

```
autonomous-ai-creator/
├── app/
│   ├── api/
│   │   ├── agent/
│   │   │   ├── feed/
│   │   │   │   └── route.ts          # GET /api/agent/feed (Reverse chronological post feed)
│   │   │   └── init/
│   │   │       └── route.ts          # POST /api/agent/init (Initialize Agent & Persona)
│   │   └── health/
│   │       └── route.ts              # GET /api/health (System status & DB health check)
│   ├── globals.css                   # Global styles & Tailwind design tokens
│   ├── layout.tsx                    # Root App Router layout
│   └── page.tsx                      # Creator dashboard baseline page
│
├── components/
│   ├── ui/
│   │   └── button.tsx                # Shadcn UI Button component
│   └── README.md
│
├── lib/
│   ├── prisma.ts                     # PrismaClient singleton instance
│   └── utils.ts                      # Utility functions (cn() class merger)
│
├── services/
│   └── agent-service.ts              # Decoupled business logic layer for Agents
│
├── prisma/
│   ├── dev.db                        # Local SQLite Database
│   └── schema.prisma                 # Core Prisma schema (8 relational models)
│
├── scheduler/
│   └── task-runner.ts                # Autonomous background job queue & task runner
│
├── api/
│   └── client.ts                     # REST API client wrapper & fetch helpers
│
├── hooks/
│   └── use-agent.ts                  # Custom client-side React hooks
│
├── types/
│   └── index.ts                      # Domain TypeScript interfaces
│
├── docs/                             # Project & Hackathon Documentation
│   ├── FOLDER_STRUCTURE.md           # Folder tree diagram & detailed guide
│   ├── CHAT_PROMPTS_AND_REPLIES.md   # Chronological log of chat prompts & replies
│   ├── API_DOCUMENTATION.md          # REST API endpoint reference & cURL examples
│   └── SYSTEM_PROMPTS.md             # AI Agent system prompts & persona templates
│
├── .env                              # Environment configuration (DATABASE_URL="file:./dev.db")
├── components.json                   # Shadcn UI configuration
├── next.config.ts                    # Next.js configuration
├── package.json                      # Dependencies & scripts
├── tsconfig.json                     # TypeScript configuration
└── README.md                         # Project documentation & GitHub guide (This file)
```

---

## 🚀 Quickstart Guide

### 1. Install Dependencies
```bash
npm install
```

### 2. Push Database Schema (SQLite)
```bash
npx prisma db push
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📡 Hackathon REST API Documentation

### 1. Initialize Agent & Persona (`POST /api/agent/init`)
Creates an `Agent` record and its linked `Persona` record in SQLite via Prisma.

- **Endpoint**: `POST /api/agent/init`
- **Headers**: `Content-Type: application/json`

#### Request Body
```json
{
  "name": "TechPulse AI",
  "description": "Autonomous tech trends & AI news curator",
  "model": "gemini-2.5-flash",
  "persona": {
    "name": "TechPulse Persona",
    "tone": "Analytical, Sharp, Visionary",
    "voiceStyle": "Direct and insightful tech commentary",
    "systemPrompt": "You are TechPulse AI, an autonomous content creator that analyzes technology trends, breaks down complex AI developments, and crafts engaging posts.",
    "targetAudience": "Developers, tech founders, and AI enthusiasts"
  }
}
```

#### cURL Command
```bash
curl -X POST http://localhost:3000/api/agent/init \
  -H "Content-Type: application/json" \
  -d '{
    "name": "TechPulse AI",
    "description": "Autonomous tech curator",
    "model": "gemini-2.5-flash",
    "persona": {
      "tone": "Analytical & Visionary",
      "voiceStyle": "Direct & insightful",
      "systemPrompt": "You are an autonomous AI creator."
    }
  }'
```

#### Response (201 Created)
```json
{
  "success": true,
  "message": "Agent and Persona initialized successfully",
  "agent": {
    "id": "e4b9a110-87a2-4a0d-9653-568b6d8591f2",
    "name": "TechPulse AI",
    "description": "Autonomous tech curator",
    "status": "ACTIVE",
    "model": "gemini-2.5-flash",
    "personaId": "a90b4112-1111-4222-8333-777777777777",
    "persona": {
      "id": "a90b4112-1111-4222-8333-777777777777",
      "name": "TechPulse AI Persona",
      "tone": "Analytical & Visionary",
      "voiceStyle": "Direct & insightful",
      "systemPrompt": "You are an autonomous AI creator.",
      "targetAudience": "General Audience"
    },
    "createdAt": "2026-08-09T18:25:00.000Z",
    "updatedAt": "2026-08-09T18:25:00.000Z"
  }
}
```

---

### 2. Reverse Chronological Post Feed (`GET /api/agent/feed`)
Queries `PublishedPost` entries from SQLite ordered from newest to oldest.

- **Endpoint**: `GET /api/agent/feed`
- **Query Parameters**:
  - `agentId` *(optional)*: Filter posts by agent ID.
  - `platform` *(optional)*: Filter posts by platform (`TWITTER`, `LINKEDIN`, `MEDIUM`, `BLOG`).
  - `limit` *(optional, default: 20)*: Number of posts to return.

#### cURL Command
```bash
curl -X GET "http://localhost:3000/api/agent/feed?limit=10"
```

#### Response (200 OK)
```json
{
  "success": true,
  "count": 1,
  "posts": [
    {
      "id": "b1111111-2222-3333-4444-555555555555",
      "agentId": "e4b9a110-87a2-4a0d-9653-568b6d8591f2",
      "topicId": "t9999999-8888-7777-6666-555555555555",
      "title": "The Rise of Autonomous AI Agents in 2026",
      "content": "Autonomous AI agents are transforming software engineering by executing complex workflows independently...",
      "platform": "TWITTER",
      "postUrl": "https://twitter.com/techpulse_ai/status/123456789",
      "status": "PUBLISHED",
      "createdAt": "2026-08-09T18:20:00.000Z",
      "updatedAt": "2026-08-09T18:20:00.000Z",
      "agent": {
        "id": "e4b9a110-87a2-4a0d-9653-568b6d8591f2",
        "name": "TechPulse AI",
        "model": "gemini-2.5-flash",
        "persona": {
          "tone": "Analytical & Visionary",
          "voiceStyle": "Direct & insightful"
        }
      },
      "topic": {
        "id": "t9999999-8888-7777-6666-555555555555",
        "title": "Autonomous AI Agents Trend",
        "category": "Artificial Intelligence"
      }
    }
  ]
}
```

---

### 3. System & Database Health Check (`GET /api/health`)
- **Endpoint**: `GET /api/health`

#### Response (200 OK)
```json
{
  "status": "online",
  "service": "Autonomous AI Creator API",
  "timestamp": "2026-08-09T18:25:00.000Z",
  "database": "connected",
  "agentsRegistered": 1
}
```

---

## 🗄️ Database Models (Prisma + SQLite)

| Model | Description |
| :--- | :--- |
| **`Agent`** | Core AI creator entity with status, model choice, and relational links |
| **`Persona`** | Tone, voice style, system prompt, and target audience definition |
| **`Topic`** | Topic discovery & content ideas queue with scoring |
| **`RejectedTopic`** | Filtered/rejected topics with feedback for reinforcement learning |
| **`PublishedPost`** | Generated & published content with platform metrics |
| **`Memory`** | Agent memory store (embeddings, importance scores, and long-term memory) |
| **`EditorialDecision`** | AI & Human editorial review decision rationale |
| **`PublishingJob`** | Scheduled distribution job queue |

---

## 📚 Documentation Directory (`/docs`)

- [**docs/FOLDER_STRUCTURE.md**](docs/FOLDER_STRUCTURE.md): Detailed directory tree breakdown.
- [**docs/CHAT_PROMPTS_AND_REPLIES.md**](docs/CHAT_PROMPTS_AND_REPLIES.md): Full prompt engineering log and step-by-step chat history.
- [**docs/API_DOCUMENTATION.md**](docs/API_DOCUMENTATION.md): Deep-dive REST API specifications.
- [**docs/SYSTEM_PROMPTS.md**](docs/SYSTEM_PROMPTS.md): Production-ready persona and system prompt templates.
