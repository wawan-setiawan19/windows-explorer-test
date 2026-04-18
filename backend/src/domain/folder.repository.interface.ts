export interface IFolderRepository {
    findAll(): Promise<any[]>
    findByParentId(parentId: number | null): Promise<any[]>
    findFilesByFolderId(folderId: number): Promise<any[]>
    search(keyword: string): Promise<any[]>
}

export interface Folder {
  id: number
  name: string
  parent_id: number | null
  children?: Folder[]
}