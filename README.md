````markdown

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
