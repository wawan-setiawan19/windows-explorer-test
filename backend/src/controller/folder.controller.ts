import { Elysia } from "elysia";
import { FolderService } from "../service/folder.service";
import { FolderRepository } from "../repository/folder.repository";

const repo = new FolderRepository();
const service = new FolderService(repo);

export const folderController =
new Elysia({ prefix: "/api/v1/folders" })

.get("/", () => service.getTree())

.get("/children/:id", ({ params }) =>
  service.getChildren(Number(params.id))
)

.get("/:id/content", ({ params }) =>
  service.getFolderContent(Number(params.id))
)

.get("/search/:q", ({ params }) =>
  service.search(params.q)
);