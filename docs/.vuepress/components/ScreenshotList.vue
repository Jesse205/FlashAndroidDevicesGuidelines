<script setup lang="ts">
import ScreenshotItem from './ScreenshotItem.vue'

interface ScreeenshotDataItem {
    title: string,
    src: string,
    isPad: boolean
}

const props = defineProps<{
    items?: ScreeenshotDataItem[]
}>()


</script>

<template>
    <div class="screenshotList">
        <slot>
            <ScreenshotItem v-for="item in props.items" :src="item.src" :key="item.title" :title="item.title"
                :isPad="item.isPad" />
        </slot>
    </div>
</template>

<style scoped>
.screenshotList {
    display: flex;
    overflow: auto;
}
</style>