```markdown
# Jira Clone (Code With Antonio)

A real-time, Kanban-style task tracker inspired by Jira—built step-by-step following Code With Antonio’s tutorial, using Next.js, React, Tailwind CSS, Hono.js, and npm for package management.

🔗 **Live Demo:** https://next15-jira-clone-npm.vercel.app

---

## 📝 Overview

This project implements core Jira features:

- **Workspaces & Projects**  
  Organize your work into multiple workspaces, each containing one or more projects.

- **Kanban Boards & Columns**  
  Within each project you can create customizable columns (e.g. To Do, In Progress, Done) and drag-and-drop issues between them.

- **Issues (Tickets)**  
  Create, edit, assign, comment on, and close tickets. View detailed modals for each issue.

- **Users & Members**  
  Invite members to your workspace/project and assign tickets to specific users.

- **Real-Time Collaboration**  
  All updates (boards, tickets, comments) broadcast instantly via WebSockets.

- **Authentication & Authorization**  
  Sign up / Sign in with secure sessions. Route protection ensures only authorized users can access private pages.

- **Responsive Design**  
  Mobile-first layout with a sticky bottom navigation and an accessible sidebar for desktop.

---

## 🧰 Tech Stack

- **Framework:** Next.js (App Router, in `src/app/`)  
- **Language:** TypeScript  
- **Styling:** Tailwind CSS + shadcn/ui components  
- **Backend & Realtime:** Hono.js (API routes under `src/app/api`) + WebSocket  
- **Package Manager:** npm (swapped from Bun)  
- **Deployment:** Vercel

---

## 🚀 Features

1. **Dynamic Workspaces & Projects**  
   - Create, rename, delete workspaces and projects  
2. **Custom Columns & Boards**  
   - Add/remove columns, reorder via drag & drop (React DnD)  
3. **Issue Detail Modals**  
   - Edit title, description, status, assign members, add comments  
4. **Live Sync**  
   - WebSocket–powered real-time updates across clients  
5. **User Management**  
   - Invite members, assign roles, manage permissions  
6. **Auth Guard**  
   - Protected layouts in `src/app/(auth)` and middleware in `src/lib/session-middleware.ts`

---

## 📁 Project Structure

```

.
├── .env.local              # Environment variables
├── next.config.mjs         # Next.js config
├── package.json            # npm scripts & dependencies
└── src/
├── app/
│   ├── (auth)/         # Sign-in / Sign-up flows & protected layouts
│   ├── (dashboard)/    # Main dashboard & workspace/project pages
│   ├── (standalone)/   # Public or error pages
│   ├── api/            # Hono.js API & WebSocket handlers
│   ├── fonts/          # Custom font imports
│   ├── oauth/          # OAuth callback handlers
│   ├── layout.tsx      # Root layout & global providers
│   ├── loading.tsx     # Global loading indicator
│   └── error.tsx       # Global error UI
├── components/
│   ├── ui/             # shadcn/ui primitives
│   ├── navbar.tsx
│   ├── sidebar.tsx
│   ├── navigation.tsx
│   ├── workspace-switcher.tsx
│   ├── responsive-modal.tsx
│   └── analytics-card.tsx
├── features/
│   ├── auth/           # Sign-in, sign-up, session hooks
│   ├── workspaces/     # Workspace CRUD & UI logic
│   ├── projects/       # Project pages & service calls
│   ├── tasks/          # Issue/ticket components and API clients
│   └── members/        # Invite & manage workspace members
├── hooks/
│   └── use-confirm.tsx # Custom “confirm before delete” hook
├── lib/
│   ├── config.ts       # Environment/config helper
│   ├── oauth.ts        # OAuth utilities
│   ├── rcp.ts          # tRPC client (if used)
│   ├── session-middleware.ts
│   └── utils.ts        # Shared helper functions
└── styles/
└── globals.css     # Tailwind base imports & overrides

````

---

## 💻 Getting Started

### Prerequisites

- **Node.js** ≥ 18  
- **Git**

### Install & Run

```bash
git clone https://github.com/<your-username>/jira-clone-node.git
cd jira-clone-node
npm install

# Development (hot reload)
npm run dev

# Build for production
npm run build
npm start
````

Open [http://localhost:3000](http://localhost:3000) to view your app.

---

## 🔧 Environment Variables

Copy and customize:

```bash
cp .env.local.example .env.local
```

* `NEXT_PUBLIC_WS_URL` — WebSocket endpoint (e.g. `ws://localhost:3000/api/ws`)
* `JWT_SECRET` — Secret for signing sessions
* Any OAuth client IDs/secrets under `oauth.*`

---


## 🎉 Acknowledgements

Built following Code With Antonio’s two-part series:
“Build a Jira Clone With Next.js, React, Tailwind, Hono.js”

> by [Code With Antonio](https://www.youtube.com/@CodeWithAntonio)

```
```
