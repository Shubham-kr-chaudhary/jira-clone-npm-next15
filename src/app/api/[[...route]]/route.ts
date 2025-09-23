// import {Hono} from "hono";
// import {handle} from "hono/vercel";
// import auth from "@/features/auth/server/route";
// import workspaces from"@/features/workspaces/server/route";
// import members from "@/features/members/server/route";
// import projects from "@/features/projects/server/route";
// import tasks from "@/features/tasks/server/route";
// import { cors } from 'hono/cors';


// const app= new Hono().basePath("/api")


// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// const routes = app
//  .route("/auth",auth)
//  .route("/workspaces",workspaces)
//  .route("/members",members)
//  .route("/projects",projects)
//  .route("/tasks",tasks);


 
// // export const GET = handle(app);
// // export const POST = handle(app);
// // export const PATCH = handle(app);
// // export const DELETE = handle(app);


// // export type AppType = typeof routes;

// const allowedOrigins = (process.env.ALLOWED_ORIGINS || '').split(',').map(s => s.trim()).filter(Boolean);

// function originResolver(origin: string | null) {
//   if (!origin) return false;
//   // allow explicit env list
//   if (allowedOrigins.includes(origin)) return origin;
//   // allow vercel preview domains that include your project slug (pragmatic for preview deploys)
//   if (origin.includes('vercel.app') && origin.includes('jira-clone-npm-next15')) return origin;
//   // fallback: deny
//   return false;
// }

// // IMPORTANT: apply CORS **globally** so preflight and all responses include headers
// app.use('/*', cors({
//   origin: (origin) => {
//     const resolved = originResolver(origin);
//     return resolved === false ? null : resolved;
//   },
//   allowHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Cookie'],
//   allowMethods: ['GET','POST','PUT','DELETE','OPTIONS','PATCH'],
//   exposeHeaders: ['Content-Length', 'Set-Cookie'],
//   maxAge: 86400,
//   credentials: true, // required if you want cookies to be sent/accepted cross-site
// }));

// // now mount your middlewares / routes (sessionMiddleware should come after CORS)
// //// example:
// // app.use('/auth/*', sessionMiddleware);
// // app.route('/workspaces', workspacesRoutes);
// // ... register all your route groups / handlers here

// // Export handlers for all methods (Hono `handle` wrapper)
// export const GET = handle(app);
// export const POST = handle(app);
// export const PUT = handle(app);
// export const DELETE = handle(app);
// export const OPTIONS = handle(app);
// export const PATCH = handle(app);


// export type AppType = typeof routes;


// src/app/api/[[...route]]/route.ts  (replace existing file with this)
import { Hono } from "hono";
import { handle } from "hono/vercel";
import { cors } from "hono/cors";

// import your route handlers
import auth from "@/features/auth/server/route";
import workspaces from "@/features/workspaces/server/route";
import members from "@/features/members/server/route";
import projects from "@/features/projects/server/route";
import tasks from "@/features/tasks/server/route";

// <-- adjust this import to the actual path of your session middleware file
// you provided the middleware code earlier; put its file path here:
import { sessionMiddleware } from "@/lib/session-middleware";

const app = new Hono().basePath("/api");

// Allowed origins logic
const allowedOrigins = (process.env.ALLOWED_ORIGINS || "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

/**
 * Return the exact origin string when allowed, otherwise null.
 * Hono's cors expects string | string[] | ((origin, ctx) => string | null | Promise<...> | undefined)
 */
function originResolver(origin?: string): string | null {
  if (!origin) return null;
  if (allowedOrigins.includes(origin)) return origin;
  if (origin.includes("vercel.app") && origin.includes("jira-clone-npm-next15"))
    return origin;
  return null;
}

// IMPORTANT: register CORS middleware BEFORE any routes or auth middleware
app.use(
  "/*",
  cors({
    // Provide a function that returns string | null
    origin: (origin) => originResolver(origin ?? undefined),
    allowHeaders: [
      "Content-Type",
      "Authorization",
      "X-Requested-With",
      "Cookie",
    ],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH", "HEAD"],
    exposeHeaders: ["Content-Length", "Set-Cookie"],
    maxAge: 86400,
    credentials: true,
  })
);
// Now apply session middleware to the routes that require authentication.
// This ensures even early 401 responses include the CORS headers above.
app.use("/workspaces/*", sessionMiddleware);
app.use("/workspaces", sessionMiddleware);
app.use("/members/*", sessionMiddleware);
app.use("/projects/*", sessionMiddleware);
app.use("/tasks/*", sessionMiddleware);

// Mount routes
app
  .route("/auth", auth)
  .route("/workspaces", workspaces)
  .route("/members", members)
  .route("/projects", projects)
  .route("/tasks", tasks);

// Export handlers
export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export const DELETE = handle(app);
export const OPTIONS = handle(app);
export const PATCH = handle(app);

export type AppType = typeof app;