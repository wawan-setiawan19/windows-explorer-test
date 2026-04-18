import { ref, computed } from "vue"
import { getTree, getContent, searchFolders, getChildren } from "../api/folder.api"

export function useFileExplorer() {
  const tree = ref<any[]>([])
  const folders = ref<any[]>([])
  const files = ref<any[]>([])
  const selectedId = ref<number | null>(null)
  const search = ref("")
  const loading = ref(false)

  const isEmpty = computed(() =>
    !loading.value &&
    folders.value.length === 0 &&
    files.value.length === 0
  )

  async function loadTree() {
    const res = await getTree()
    tree.value = res ?? []
  }

  async function selectFolder(folder: any) {
    selectedId.value = folder.id
    loading.value = true

    const res = await getContent(folder.id)
    folders.value = res?.folders ?? []
    files.value = res?.files ?? []

    loading.value = false
  }

  async function expandFolder(folder: any) {
    if (folder.loaded) return
    folder.children = await getChildren(folder.id)
    folder.loaded = true
  }

  async function handleSearch(val: string) {
    search.value = val
    tree.value = val ? await searchFolders(val) : await getTree()
  }

  return {
    tree,
    folders,
    files,
    selectedId,
    search,
    loading,
    isEmpty,

    loadTree,
    selectFolder,
    expandFolder,
    handleSearch
  }
}