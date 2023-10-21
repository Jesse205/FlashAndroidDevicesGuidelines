<script setup lang="ts">
import { useData } from 'vitepress'
import { ScoreItem } from '../ts/interfaces/score.interfaces'
import { computed } from 'vue'
import { useEditLink } from '../data/edit-link'
import VPIconEdit from 'vitepress/dist/client/theme-default/components/icons/VPIconEdit.vue'
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'

const props = defineProps<{
  scoreList: ScoreItem[]
}>()

const scoreList = props.scoreList

let allScore = 0

for (let item of props.scoreList) {
  allScore += item.score
}

const average = allScore / scoreList.length
const scoredBy = scoreList.length

const { theme, frontmatter } = useData()

const hasEditLink = computed(() => {
  return theme.value.editLink && frontmatter.value.editLink !== false
})

const editLink = useEditLink()
</script>

<template>
  <meter id="fuel" min="0" max="50" low="25" high="40" optimum="45" :value="average * 10"></meter>
  {{ average }} 分（{{ scoredBy }} 人打分）
  <div v-if="hasEditLink" class="tip custom-block">
    <p class="custom-block-title">TIP</p>
    <p>
      如果您需要打分，请点击“
      <VPLink class="edit-link-button" :href="editLink.url" :no-icon="true">
        <VPIconEdit class="edit-link-icon" aria-label="edit icon" />
        {{ editLink.text }}
      </VPLink>
      ”手动编辑此页进行打分。
    </p>
  </div>
</template>

<style scoped>

.edit-link-button {
  border: 0;
  line-height: 32px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-brand-1);
  transition: color 0.25s;
  display: inline-flex;
  align-items: center;
}

.edit-link-button:hover {
  color: var(--vp-c-brand-2);
}

.edit-link-icon {
  margin-right: 8px;
  margin-left: 4px;
  width: 14px;
  height: 14px;
  fill: currentColor;
}
</style>
