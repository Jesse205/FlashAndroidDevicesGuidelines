<script setup lang="ts">
import { ScoreItem } from '../ts/interfaces/score.interfaces';


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
</script>

<template>
    <meter id="fuel" min="0" max="50" low="25" high="40" optimum="45" :value="average * 10"></meter>
    {{ average }} 分（{{ scoredBy }} 人打分）
    <div class="tip custom-block">
        <p class="custom-block-title">TIP</p>
        <p>如果您需要打分，请点击文末“在 Gitee 上编辑此页面”手动编辑此页进行打分。</p>
    </div>
</template>

<style scoped></style>