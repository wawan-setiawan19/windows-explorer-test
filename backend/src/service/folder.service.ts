import type { Folder, IFolderRepository } from "../domain/folder.repository.interface";

export class FolderService {

  constructor(private repository: IFolderRepository) {}

  async getTree() {
    const folders = await this.repository.findAll();
    return this.buildTree(folders);
  }

  async getChildren(parentId:number) {
    return this.repository.findByParentId(parentId);
  }

  async getFolderContent(parentId:number){
    const folders = await this.repository.findByParentId(parentId)
    const files = await this.repository.findFilesByFolderId(parentId)

    return { folders, files }
  }

  async search(keyword:string){
    return this.repository.search(keyword)
  }

  private buildTree(folders: Folder[]) {
    const map = new Map();
    const roots: any[] = [];

    for (const folder of folders) {
      map.set(folder.id, { ...folder, children: [] });
    }

    for (const folder of folders) {
      if (folder.parent_id) {
        map.get(folder.parent_id)?.children.push(
          map.get(folder.id)
        );
      } else {
        roots.push(map.get(folder.id));
      }
    }

    return roots;
  }
}