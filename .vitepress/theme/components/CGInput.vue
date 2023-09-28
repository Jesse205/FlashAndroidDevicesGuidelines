<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import VFInput from './VFInput.vue'

const props = defineProps<{
  default?: string
  holder?: string
}>()

const holderName = props.holder
const name = ref()

const emit = defineEmits<{
  (e: 'change', v: string): void
}>()

function emitName(name: string) {
  if (name) {
    if (name.includes(' ') || name.includes('"')) {
      name = name.replaceAll('\\', '\\\\').replaceAll('"', '\\"')
      name = `"${name}"`
    }
    emit('change', name)
  } else if (holderName) {
    emit('change', holderName)
  }
}

watchEffect(() => {
  emitName(name.value)
})

function dropHandler(event: DragEvent) {
  const dataTransfer = event.dataTransfer
  if (!dataTransfer) return
  if (dataTransfer.items) {
    for (var i = 0; i < dataTransfer.items.length; i++) {
      const item = dataTransfer.items[i]
      if (item.kind === 'string') {
        item.getAsString((s) => {
          name.value = s
        })
        break
      }
    }
  }
}

function dragoverHandler(event: DragEvent) {
  const dataTransfer = event.dataTransfer
  if (!dataTransfer) return
  dataTransfer.dropEffect = 'link'
}
</script>

<template>
  <div class="inputArea" @drop.prevent="dropHandler" @dragover.prevent="dragoverHandler">
    <span> <slot>请输入内容</slot>： </span>
    <VFInput class="nameInput" v-model="name" :placeholder="holderName" />
  </div>
</template>

<style scoped lang="scss">
.inputArea {
  display: flex;
  align-items: center;
}
</style>
