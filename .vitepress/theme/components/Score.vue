<script setup lang="ts">

const scoreList = [
    {
        name: "jesse205",
        score: 4.5
    },
]

let allScore = 0

for (let item of scoreList) {
    allScore += item.score
}

const average = allScore / scoreList.length
const scoredBy = scoreList.length
</script>

<template>
    <meter id="fuel" min="0" max="50" low="25" high="40" optimum="45" :value="average * 10"></meter>
    {{ average }} 分（{{ scoredBy }} 人打分）
    
</template>

<style scoped></style>