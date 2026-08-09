# Autonomous AI Creator - Project Folder Structure

This document outlines the clean, production-ready directory structure for the **Autonomous AI Creator** Next.js 15 project.

```
autonomous-ai-creator/
├── app/
│   ├── api/
│   │   ├── agent/
│   │   │   ├── feed/
│   │   │   │   └── route.ts          # GET /api/agent/feed (Reverse chronological feed)
│   │   │   └── init/
│   │   │       └── route.ts          # POST /api/agent/init (Agent & Persona initialization)
│   │   └── health/
│   │       └── route.ts              # GET /api/health (System status & DB health check)
│   ├── favicon.ico
│   ├── globals.css                   # Tailwind CSS styling and theme variables
│   ├── layout.tsx                    # Root Next.js App Router layout
│   └── page.tsx                      # Dashboard baseline page
│
├── components/
│   ├── ui/
│   │   └── button.tsx                # Shadcn UI Button component
│   └── README.md                     # UI components guidelines
│
├── lib/
│   ├── prisma.ts                     # PrismaClient singleton instance
│   └── utils.ts                      # Utility functions (cn() helper for Tailwind classes)
│
├── services/
│   └── agent-service.ts              # Business logic layer for Agent operations
│
├── prisma/
│   ├── dev.db                        # SQLite Database file
│   └── schema.prisma                 # Core Prisma schema (8 models, relations, timestamps)
│
├── scheduler/
│   └── task-runner.ts                # Background job queue and task scheduler framework
│
├── api/
│   └── client.ts                     # REST API fetch helpers and type-safe utilities
│
├── hooks/
│   └── use-agent.ts                  # Custom React hooks for agent data fetching
│
├── types/
│   └── index.ts                      # Domain-wide TypeScript type definitions
│
├── docs/                             # Documentation & Chat Prompt Logs
│   ├── FOLDER_STRUCTURE.md           # Visual tree and directory description (This file)
│   ├── CHAT_PROMPTS_AND_REPLIES.md   # Chronological log of chat prompts and assistant responses
│   ├── API_DOCUMENTATION.md          # REST API endpoint documentation with JSON payloads
│   └── SYSTEM_PROMPTS.md             # Persona system prompts and AI agent prompt templates
│
├── .env                              # Environment configuration (DATABASE_URL="file:./dev.db")
├── .eslintrc.json                    # ESLint configuration
├── components.json                   # Shadcn UI configuration
├── next.config.ts                    # Next.js configuration
├── package.json                      # NPM dependencies and scripts
├── postcss.config.mjs                # PostCSS configuration for Tailwind
├── tsconfig.json                     # TypeScript compiler configuration
└── README.md                         # Project overview and execution guide
```

---

## Detailed Directory Overview

| Directory | Purpose | Key Files |
| :--- | :--- | :--- |
| `app/` | Next.js 15 App Router pages, global styles, and REST API handlers | `page.tsx`, `layout.tsx`, `api/` |
| `components/` | Reusable React UI components and Shadcn UI primitives | `ui/button.tsx` |
| `lib/` | Shared utilities, database client singletons, and helper functions | `prisma.ts`, `utils.ts` |
| `services/` | Business logic service layer decoupling APIs from database operations | `agent-service.ts` |
| `prisma/` | Database schema definitions and local SQLite database | `schema.prisma`, `dev.db` |
| `scheduler/` | Background job execution engine for autonomous content scheduling | `task-runner.ts` |
| `api/` | REST API client abstractions and fetch wrappers | `client.ts` |
| `hooks/` | Custom client-side React hooks for state and API interactions | `use-agent.ts` |
| `types/` | TypeScript interfaces and type definitions | `index.ts` |
| `docs/` | Comprehensive project documentation, prompt logs, and API guides | `CHAT_PROMPTS_AND_REPLIES.md` |
