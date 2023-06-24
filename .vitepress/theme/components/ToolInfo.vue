<script setup lang="ts">
import tools from '../data/tools'
import { computed } from 'vue'

const props = defineProps<{
    name: string
    badges?: string[]
}>()

const item = tools.find((item) => item.name === props.name)

const name = computed(() => {
    if (item?.name.indexOf('-PC'))
        return item.name.split('-PC')[0]
    else
        return item?.name

})
</script>

<template>
    <template v-if="item">
        <a :href="item.url" :target="item.url.indexOf('http') === 0 ? '_blank' : '_self'" rel="noreferrer">{{ name }}</a>
        <template v-if="item.license">
            <badge type="tip" class="badge" :text="`开源：${item.license}`" />
        </template>
        <badge v-if="item.commdline" class="badge" type="tip" text="命令行" />
        <badge v-for="text in badges" class="badge" :text="text" />
        <template v-if="item.developer">
            <badge type="tip" class="badge" :text="`开发者：${item.developer}`" />

        </template>：{{ item.info }}
        <template v-if="item.links">
            <br />
            （相关链接： <template v-for="(link, index) in item.links">
                <a :href="link.url" target="_blank" rel="noreferrer"> {{ link.name }}</a>
                <template v-if="index === item.links?.length"> | </template>
            </template>
            ）
        </template>
    </template>
</template>

<style scoped>
.badge {
    margin: 0 4px;
}
</style>