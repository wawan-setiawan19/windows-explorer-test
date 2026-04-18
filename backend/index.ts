import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { folderController } from "./src/controller/folder.controller";

const app = new Elysia();

app.use(
  cors({
    origin: "*"
  })
);

app.use(folderController);

app.listen(3000);

console.log("Server running on http://localhost:3000");

export { app }