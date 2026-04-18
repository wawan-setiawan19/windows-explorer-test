<script setup lang="ts">
import { ref, onMounted, watch, computed } from "vue"
import { getTree, getContent, searchFolders, getChildren } from "./api/folder.api"
import FolderNode from "./components/FolderNode.vue"

const tree = ref([])
const folders = ref([])
const files = ref([])
const selectedId = ref<number | null>(null)
const search = ref("")
const loading = ref(false)

const isEmpty = computed(() => {
  return !loading.value && folders.value.length === 0 && files.value.length === 0
})

async function selectFolder(folder: any) {
  selectedId.value = folder.id
  loading.value = true

  const res = await getContent(folder.id)
  folders.value = res.folders
  files.value = res.files

  loading.value = false
}

async function expandFolder(folder: any) {
  if (folder.loaded) return

  folder.children = await getChildren(folder.id)
  folder.loaded = true
}

watch(search, async (val) => {
  tree.value = val ? await searchFolders(val) : await getTree()
})

onMounted(async () => {
  tree.value = await getTree()
})
</script>

<template>
  <div class="flex h-screen bg-gray-50 text-gray-800">

    
    <aside class="w-80 bg-white border-r flex flex-col">

      
      <div class="p-4 border-b">
        <div class="text-lg font-semibold">File Explorer</div>

        <input
          v-model="search"
          placeholder="Search folders..."
          class="mt-3 w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-200"
        />
      </div>

      
      <div class="flex-1 overflow-auto p-2">
        <FolderNode
          v-for="f in tree"
          :key="f.id"
          :folder="f"
          :selectedId="selectedId"
          @select="selectFolder"
          @expand="expandFolder"
        />
      </div>

    </aside>

    
    <main class="flex-1 p-6 overflow-auto">

      
      <div class="flex items-center justify-between mb-6">
        <div>
          <h1 class="text-xl font-semibold">Content</h1>
          <p class="text-sm text-gray-400">Browse your folders and files</p>
        </div>
      </div>

      
      <div v-if="loading" class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div
          v-for="i in 8"
          :key="i"
          class="h-28 rounded-xl bg-gray-200 animate-pulse"
        />
      </div>

      
      <template v-else>

        
        <section v-if="folders.length" class="mb-8">
          <div class="text-xs font-semibold text-gray-400 mb-3 uppercase">
            Folders
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div
              v-for="f in folders"
              :key="f.id"
              @dblclick="selectFolder(f)"
              class="group bg-white border rounded-xl p-4 hover:shadow-lg transition cursor-pointer"
            >
              <div class="text-3xl mb-2 group-hover:scale-110 transition">
                📁
              </div>

              <div class="font-medium truncate">
                {{ f.name }}
              </div>

              <div class="text-xs text-gray-400 mt-1">
                Folder
              </div>
            </div>
          </div>
        </section>

        <section v-if="files.length">
          <div class="text-xs font-semibold text-gray-400 mb-3 uppercase">
            Files
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div
              v-for="f in files"
              :key="f.id"
              class="bg-white border rounded-xl p-4 hover:shadow-lg transition cursor-pointer"
            >
              <div class="text-3xl mb-2">📄</div>

              <div class="font-medium truncate">
                {{ f.name }}
              </div>

              <div class="text-xs text-gray-400 mt-1">
                File
              </div>
            </div>
          </div>
        </section>

        
        <div
          v-if="isEmpty"
          class="flex flex-col items-center justify-center py-24 text-center"
        >
          <div class="text-7xl mb-4">📂</div>

          <div class="text-lg font-semibold text-gray-700">
            No content here
          </div>

          <div class="text-sm text-gray-400 mt-1">
            This folder is empty or has no files yet
          </div>
        </div>

      </template>

    </main>

  </div>
</template>