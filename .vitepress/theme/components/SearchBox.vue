<script setup lang="ts">
import VPButton from 'vitepress/dist/client/theme-default/components/VPButton.vue'
import VFInput from './VFInput.vue'
import { ref, watchEffect } from 'vue';

const props = defineProps<{
    content: string
}>()

const searchUrl = ref<string>()
const keyWorldName = ref<string>()
const searchEngine = ref('baidu')

watchEffect(() => {
    const engine = searchEngine.value
    switch (searchEngine.value) {
        case 'baidu': {
            keyWorldName.value = 'wd'
            searchUrl.value = 'https://www.baidu.com/s'
            break
        }
        case 'bing': {
            keyWorldName.value = 'q'
            searchUrl.value = 'https://cn.bing.com/search'
            break
        }
    }
})

</script>

<template>
    <form class="searchArea" :action="searchUrl" method="get" target="_blank">
        <VFInput class="input" :value="props.content" :name="keyWorldName" :prepend-line="true">
            <template #prepend>
                <select v-model="searchEngine" class="select">
                    <option value="baidu">百度</option>
                    <option value="bing">Bing</option>
                </select>
            </template>
        </VFInput>
        <VPButton class="SearchBox-button" text="搜索" type="submit" />
    </form>
</template>

<style scoped>
.searchArea {
    display: flex;
    flex-wrap: nowrap;
    text-align: center;
}

.input {
    width: 100%;
}

.select {
    height: 100%;
    appearance: listbox;
    background: transparent;
    padding: 2px 4px;
    margin-right: 4px;
}

.SearchBox-button{
    margin: 4px;
}

</style>