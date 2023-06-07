<script setup lang="ts">

interface ScreeenshotDataItem {
    title: string,
    src: string
}

const props = defineProps<{
    title: string,
    src: string,
    isPad?: boolean,
}>()


</script>

<template>
    <img :class="{ pad: isPad }" :src="src" :key="title" :alt="title" :title="title" />
</template>

<style scoped>
img {
    margin: 2px;
    width: 200px;
    border: 1px solid var(--c-border);
    border-radius: 4px;
}

img.pad {
    width: 600px;
}
</style>