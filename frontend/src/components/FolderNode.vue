<script setup lang="ts">
import { ref, computed } from "vue"

const props = defineProps({
  folder: Object,
  selectedId: Number
})

const emit = defineEmits(["select", "expand"])
const open = ref(false)

const isActive = computed(() => props.folder.id === props.selectedId)

function toggle() {
  open.value = !open.value

  emit("select", props.folder)

  if (open.value && !props.folder.loaded) {
    emit("expand", props.folder)
  }
}
</script>

<template>
  <div class="select-none">

    <!-- NODE -->
    <div
      class="flex items-center gap-2 px-2 py-1.5 rounded-lg cursor-pointer transition-all duration-150 group"
      :class="[
        isActive
          ? 'bg-indigo-50 text-indigo-700'
          : 'hover:bg-gray-100 text-gray-700'
      ]"
      @click="toggle"
    >

      <!-- EXPAND ICON -->
      <div class="w-5 flex justify-center">
        <span
          v-if="folder.children?.length"
          class="text-xs transition-transform duration-200"
          :class="{ 'rotate-90': open }"
        >
          ▶
        </span>
      </div>

      <!-- FOLDER ICON -->
      <div class="text-lg transition-transform group-hover:scale-110">
        {{ open ? "📂" : "📁" }}
      </div>

      <!-- NAME -->
      <div class="truncate text-sm font-medium">
        {{ folder.name }}
      </div>

    </div>

    <!-- CHILDREN -->
    <transition name="fade-slide">
      <div v-if="open" class="pl-6 mt-1 space-y-1 border-l border-gray-200 ml-3">

        <FolderNode
          v-for="child in folder.children"
          :key="child.id"
          :folder="child"
          :selectedId="selectedId"
          @select="emit('select', $event)"
          @expand="emit('expand', $event)"
        />

      </div>
    </transition>

  </div>
</template>

<style scoped>
.folder{
  cursor:pointer;
  padding:4px;
  border-radius:4px;
}

.folder:hover{
  background:#f3f3f3;
}

.active{
  background:#e6f2ff;
}

.children{
  padding-left:15px;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.15s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(-3px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-3px);
}
</style>