<script setup lang="ts">


const props = defineProps<{
    name: string
}>()

</script>

<template>
    <img :src="`/emoji/${name}.png`" data-emoji/>
</template>

<style scoped>
img {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    vertical-align: text-bottom;
}
</style>