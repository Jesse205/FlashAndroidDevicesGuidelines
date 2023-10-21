<script setup lang="ts">
import { withBase } from 'vitepress';



const props = defineProps<{
    name: string
}>()

</script>

<template>
    <img :src="withBase(`/emoji/${name}.png`)" data-disable-zoom />
</template>

<style scoped>
img {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    vertical-align: text-bottom;
}
</style>