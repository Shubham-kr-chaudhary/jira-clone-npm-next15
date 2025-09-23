import {Hono} from "hono";
import {handle} from "hono/vercel";
import auth from "@/features/auth/server/route";
import workspaces from"@/features/workspaces/server/route";
import members from "@/features/members/server/route";
import projects from "@/features/projects/server/route";
import tasks from "@/features/tasks/server/route";



const app= new Hono().basePath("/api")

// const WHITELIST = [
//   "https://jira-clone-npm-next15-p92vlt6hv-shubham-kr-chaudharys-projects.vercel.app",
//   "http://localhost:3000",
// ];

// // CORS middleware — keep before routes
// app.use("*", async (c, next) => {
//   const origin = c.req.header("origin") ?? "";

//   if (WHITELIST.includes(origin)) {
//     c.header("Access-Control-Allow-Origin", origin);
//     c.header("Access-Control-Allow-Credentials", "true");
//     c.header("Vary", "Origin");
//   }

//   c.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS");
//   c.header(
//     "Access-Control-Allow-Headers",
//     "Content-Type, Authorization, X-Requested-With, Accept"
//   );

// if (c.req.method === "OPTIONS") {
//   return new Response(null, { status: 204 });
// }

//   await next();
// });


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const routes = app
 .route("/auth",auth)
 .route("/workspaces",workspaces)
 .route("/members",members)
 .route("/projects",projects)
 .route("/tasks",tasks);


 
export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);


export type AppType = typeof routes;
