<script setup lang="ts">
import mediumZoom, { ZoomOptions } from 'medium-zoom'
import { Zoom } from 'medium-zoom'
import DefaultTheme from 'vitepress/theme'
import { nextTick, onBeforeUnmount, onMounted } from 'vue'

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

/**
 * 元素监听器，普通的 onUpdated 不生效
 */
let observer: MutationObserver

if (!import.meta.env.SSR) {
    observer = new MutationObserver(mutations => {
        updateZoom()
    })
}

onMounted(() => {
    if (observer) {
        nextTick(() => {
            let box = <Node>document.querySelector('.vp-doc')
            observer.observe(box, { attributes: true })
        })
    }
    updateZoom()
})

onBeforeUnmount(() => {
    if (observer) {
        observer.disconnect()
    }
})

</script>

<template>
    <Layout>

    </Layout>
</template>

<style scoped></style>