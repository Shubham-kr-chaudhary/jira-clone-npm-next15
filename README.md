````markdown
# Jira Clone (Code With Antonio)

A real-time, Kanban-style task tracker inspired by Jira—built step-by-step following Code With Antonio’s tutorial, using Next.js, React, Tailwind CSS, Hono.js, and npm.

🔗 **Live Demo:** https://next15-jira-clone-npm.vercel.app

---

## 📝 Table of Contents

1. [Overview](#overview)  
2. [Features](#features)  
3. [Tech Stack](#tech-stack)  
4. [Project Structure](#project-structure)  
5. [Getting Started](#getting-started)  
6. [Environment Variables](#environment-variables)  
7. [Contributing](#contributing)  
8. [License](#license)  
9. [Acknowledgements](#acknowledgements)  

---

## Overview

This Jira Clone implements the core workflows of an issue-tracking system:

- **Workspaces & Projects**  
- **Kanban Boards & Columns**  
- **Issues (Create, Edit, Drag-and-Drop)**  
- **Real-Time Collaboration via WebSockets**  
- **Authentication & Authorization**  
- **Responsive, Mobile-First Design**  

---

## Features

- **Dynamic Workspaces & Projects**  
- **Custom Columns per Board**  
- **Drag-and-Drop Tickets** (React DnD)  
- **Issue Detail Modals** (title, description, assignees, comments)  
- **Live Synchronization** (Hono.js WebSocket)  
- **Role-Based Access & Protected Routes**  
- **Sticky Bottom Navigation & Sidebar**  
- **Dark & Light Modes**  

---

## Tech Stack

| Layer                | Technology                        |
| -------------------- | --------------------------------- |
| Framework            | Next.js (App Router)              |
| Language             | TypeScript                        |
| Styling              | Tailwind CSS + shadcn/ui          |
| API & Realtime       | Hono.js + WebSocket               |
| Package Management   | npm / Yarn                        |
| Deployment           | Vercel                            |

---

## Project Structure

``` 
.
├── .env.local                # Environment variables
├── next.config.mjs           # Next.js config
├── package.json              # npm scripts & dependencies
└── src
    ├── app
    │   ├── (auth)            # Sign-in / Sign-up flows & protected layouts
    │   ├── (dashboard)       # Workspace & project pages
    │   ├── (standalone)      # Public, error & loading pages
    │   ├── api               # Hono.js API routes & WebSocket handlers
    │   ├── fonts             # Custom font imports
    │   ├── oauth             # OAuth callback handlers
    │   ├── layout.tsx        # Root layout & global providers
    │   ├── loading.tsx       # Global loading indicator
    │   └── error.tsx         # Global error UI
    ├── components            # Reusable UI components
    │   ├── ui                # shadcn/ui primitives
    │   ├── navbar.tsx
    │   ├── sidebar.tsx
    │   ├── navigation.tsx
    │   └── workspace-switcher.tsx
    ├── features              # Domain logic & API clients
    │   ├── auth              # Authentication hooks & services
    │   ├── workspaces
    │   ├── projects
    │   ├── tasks
    │   └── members
    ├── hooks                 # Custom React hooks
    │   └── use-confirm.tsx
    ├── lib                   # Utilities & middleware
    │   ├── config.ts
    │   ├── oauth.ts
    │   ├── rpc.ts
    │   └── session-middleware.ts
    └── styles                # Global styles
        └── globals.css       # Tailwind base & overrides
````


## Getting Started

### Prerequisites

* Node.js ≥ 18
* Git

### Installation

``` 
git clone https://github.com/<your-username>/jira-clone-node.git
cd jira-clone-node
npm install
```

### Development

``` 
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production

``` 
npm run build
npm start
```

---

## Environment Variables

Copy and customize:

``` 
cp .env.local.example .env.local
```

* `NEXT_PUBLIC_WS_URL` — WebSocket endpoint (e.g. `ws://localhost:3000/api/ws`)
* `JWT_SECRET` — Secret for signing sessions
* Any OAuth client IDs/secrets

---



## Acknowledgements

* **Code With Antonio**: “Build a Jira Clone With Next.js, React, Tailwind, Hono.js” tutorial
* **Next.js**, **Tailwind CSS**, **Hono.js**, **shadcn/ui**, **React DnD**

```
```
