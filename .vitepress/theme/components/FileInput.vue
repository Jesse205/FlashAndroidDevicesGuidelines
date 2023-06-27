<script setup lang="ts">
import { ref } from 'vue'
const input = ref<HTMLInputElement>()

const props = defineProps<{
    default?: string
}>()
const defaultName = props.default

const emit = defineEmits<{
    (e: 'change', v: string): void
}>()

function changeValue(event: Event) {
    let fileName = (input.value?.files ?? [])[0]?.name
    if (fileName) {
        if (fileName.includes(' '))
            fileName = `"${fileName}"`
        emit('change', fileName)
    } else if (defaultName) {
        emit('change', defaultName)
    }
}

</script>

<template>
    <input @change="changeValue" type="file" ref="input" multiple="false" />
</template>

<style scoped></style>