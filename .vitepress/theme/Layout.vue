<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useZoom } from './events/zoom'

const { Layout } = DefaultTheme

// Zoom
useZoom()
</script>

<template>
    <Layout>
    </Layout>
</template>

<style scoped></style>