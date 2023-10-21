<script setup lang="ts">
import SystemCard from '@/components/SystemCard.vue'
import HMOSCover from './images/logo/hmos.png'
import MIUICover from './images/logo/miui_cover.webp'
import LicenseOSCover from './images/logo/lineage.svg'
</script>

<template>
  <slot name="offical" />
  <div class="system-cards">
    <SystemCard
      name="EMUI 类"
      logo=""
      summary="EMUI（全称 Emotion UI）是华为基于 Android 进行开发的情感化操作系统。"
      link="./emui.html"
      :cover="`${HMOSCover}`"
    >
      EMUI 类操作系统包括华为的 EMUI、HarmonyOS，以及荣耀的 MagicUI、MagicOS
      <ul>
        <li><a href="https://www.harmonyos.com/" target="_blank">HarmonyOS 官方网站</a></li>
        <li><a href="https://www.hihonor.com/cn/magic-ui/" target="_blank">MagicUI 官方网站</a></li>
        <li><a href="https://www.hihonor.com/cn/magic-os/" target="_blank">MagicOS 官方网站</a></li>
      </ul>
    </SystemCard>

    <SystemCard
      name="MIUI"
      logo=""
      summary="更轻巧，更流畅，更安全，更人性化！"
      link="./miui.html"
      :cover="`${MIUICover}`"
      ><ul>
        <li><a href="https://home.miui.com" target="_blank">官方网站</a></li>
      </ul>
    </SystemCard>
  </div>
  <slot name="offical-more" />
  <slot name="thirdparty" />
  <div class="system-cards">
    <SystemCard
      logo=""
      summary="用于各种设备的免费和开源的操作系统，基于安卓移动平台。"
      link="./lineageos.html"
      :cover="`${LicenseOSCover}`"
      :cover-scale-down="true"
    >
      在所有类原生中，LineageOS 绝对是老爷级的存在，有很多优秀的类原生都派生自此项目。
      <ul>
        <li><a href="https://home.miui.com" target="_blank">官方网站</a></li>
      </ul>
      <template v-slot:name>
        LineageOS <Badge text='刷机必备' />
      </template>
    </SystemCard>
  </div>
  <slot name="thirdparty-more" />
</template>

<style scoped lang="scss">
.system-cards {
  display: flex;
  flex-wrap: wrap;
  margin: -8px;
  .SystemCard {
    width: 100%;
    padding: 8px;
    @media (min-width: 600px) {
      width: 50%;
    }
  }
}
</style>
