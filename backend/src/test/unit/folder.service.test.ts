import { expect, test } from "bun:test"
import { FolderService } from "../../service/folder.service"

const mockRepo = {
  findAll: async ()=> [{ id:1, name:"root" }],
  findByParentId: async ()=> [],
  findFilesByFolderId: async ()=> [],
  search: async ()=> []
}

const service = new FolderService(mockRepo as any)

test("should return tree", async ()=>{
  const res = await service.getTree()
  expect(res.length).toBe(1)
})