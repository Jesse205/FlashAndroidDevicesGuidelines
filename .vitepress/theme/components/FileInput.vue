<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import VPButton from 'vitepress/dist/client/theme-default/components/VPButton.vue'

const fileInput = ref<HTMLInputElement>()


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
        if (name.includes(' '))
            name = `"${name}"`
        emit('change', name)
    } else if (holderName) {
        emit('change', holderName)
    }
}

function fileChangeHandler(event: Event) {
    let fileName = (fileInput.value?.files ?? [])[0]?.name
    name.value = fileName
}

watchEffect(() => {
    emitName(name.value)
})

const dropActive = ref(false)

function dropHandler(event: DragEvent) {
    const dataTransfer = event.dataTransfer
    if (!dataTransfer)
        return
    dataTransfer.dropEffect = 'link'
    if (dataTransfer.items) {
        for (var i = 0; i < dataTransfer.items.length; i++) {
            const item = dataTransfer.items[i]
            if (item.kind === "file") {
                let file = item.getAsFile()
                if (file?.name) {
                    name.value = file.name
                    break
                }
            } else if (item.kind === 'string') {
                item.getAsString((s) => {
                    name.value = s
                })
                break
            }
        }
    }
    dropActive.value = false
}

function dragoverHandler(event: DragEvent) {
    const dataTransfer = event.dataTransfer
    if (!dataTransfer)
        return
    dataTransfer.dropEffect = 'link'
}



function selectFileHandler(event: Event) {
    fileInput.value?.focus()
    fileInput.value?.click()
}

</script>

<template>
    <div class="inputArea" :class="{ dragover: dropActive }" @drop.prevent="dropHandler"
        @dragover.prevent="dragoverHandler">
        <span>
            <slot>请选择文件</slot>：
        </span>
        <input class="nameInput" v-model="name" :placeholder="holderName" />
        <VPButton class="button" text="选择" theme="alt" @click="selectFileHandler" />
        <input ref="fileInput" class="fileInput" type="file" @change="fileChangeHandler" />
    </div>
</template>

<style scoped lang="scss">
.inputArea {
    display: flex;
    align-items: center;
}


.nameInput {
    background-color: var(--vp-input-bg-color);
    border: var(--vp-input-border-color) solid 1px;
    padding: 2px 8px;
    height: 40px;
    border-radius: 8px;
    transition: border-color 0.25s;
    margin: 4px;
}

.nameInput:hover {
    border-color: var(--vp-input-hover-border-color);
}

.nameInput:focus {
    border-color: var(--vp-c-brand);
}

.fileInput {
    display: none;
}

.button,
.button.VPButton.medium {
    border-radius: 8px;
    margin: 4px;
}
</style>