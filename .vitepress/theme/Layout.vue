<script setup lang="ts">
import mediumZoom, { ZoomOptions } from 'medium-zoom'
import { Zoom } from 'medium-zoom'
import { useData } from 'vitepress';
import DefaultTheme from 'vitepress/theme'
import { nextTick, watch } from 'vue'

const { Layout } = DefaultTheme

// Zoom
const SELECTOR = '.content-container :not(a) > img:not([data-emoji])'
const OPTIONS: ZoomOptions = {
    background: 'var(--vp-backdrop-bg-color)',
    margin: 16
}
let zoom: Zoom

/**
 * 更新缩放
 */
function updateZoom() {
    nextTick(() => {
        if (zoom) {
            zoom.detach()
        }
        zoom = mediumZoom(SELECTOR, OPTIONS)
        zoom.attach()
    })
}
const data = useData()

if (!import.meta.env.SSR) {
    watch(data.page, (dir) => {
        updateZoom()
    }, { immediate: true })
}
</script>

<template>
    <Layout>
    </Layout>
</template>

<style scoped></style>