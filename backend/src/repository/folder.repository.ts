import { eq, sql } from "drizzle-orm";
import { db } from "../database/db";
import { folders, files } from "../database/schema";

export class FolderRepository {

  async findAll() {
  const data = await db.select().from(folders);

  return data.map(f => ({
    id: f.id,
    name: f.name,
    parent_id: f.parentId
  }));
}

  async findByParentId(parentId: number) {
    return db
      .select()
      .from(folders)
      .where(eq(folders.parentId, parentId));
  }

  async findFilesByFolderId(folderId: number) {
    return db
      .select()
      .from(files)
      .where(eq(files.folderId, folderId));
  }

  async search(keyword: string) {
    return db
      .select()
      .from(folders)
      .where(sql`LOWER(${folders.name}) LIKE LOWER(${`%${keyword}%`})`);
  }
}