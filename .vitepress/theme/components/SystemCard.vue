<script setup lang="ts">
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue'
export interface System {
  name?: string
  summary: string
  link: string
  icon?: string
  company?: string
  details?: string
  cover: string
  coverScaleDown?: boolean
}

const props = defineProps<System>()

/**
 * 绝对路径的链接，用于向用户展示
 */
/*const absLink = computed(() => {
  if (!import.meta.env.SSR) {
    return new URL(props.link, location.href).href
  }
})*/
</script>

<template>
  <VPLink class="SystemCard" :href="link" :no-icon="true" :tag="link ? 'a' : 'div'" :alt="name">
    <article class="box">
      <div class="head">
        <img v-if="icon" class="icon" :src="icon" data-disable-zoom />
        <div class="headRight">
          <span v-if="name" class="name" v-html="name" />
          <span v-else class="name">
            <slot name="name"></slot>
          </span>
          <span class="link" :title="summary">{{ summary }}</span>
        </div>
      </div>
      <img v-if="cover" class="cover" :class="{ coverScaleDown }" :src="cover" data-disable-zoom />
      <p v-if="details" v-html="details" class="details" />
      <p v-else class="details">
        <slot />
      </p>

      <div class="space"></div>
      <div class="foot">
        <!-- <template v-if="destinationConfig">
          <img class="icon" :src="destinationConfig.icon" />
          <span class="name">{{ destinationConfig.name }}</span>
        </template> -->
        <span class="name">查看</span>
        <span class="openIcon" />
      </div>
    </article>
  </VPLink>
</template>

<style scoped lang="scss">
.SystemCard {
  display: block;
  // 去除a标签样式的影响
  font-weight: normal;
  color: unset;
  text-decoration: unset;
  text-underline-offset: unset;
}

a.SystemCard:hover {
  color: unset;
}

.box {
  padding: 16px;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 12px;
  height: 100%;
  background-color: var(--vp-c-bg-soft);
  transition: border-color 0.25s;

  &:hover {
    border-color: var(--vp-c-brand-1);
  }

  * {
    line-height: normal;
  }
  // 修复其他组件因为 line-height 的改变导致的一系列问题
  :deep(.VPBadge) {
    line-height: normal;
    padding: 2px 8px;
  }

  .head {
    display: flex;
    margin-bottom: 16px;
    .icon {
      width: 40px;
      height: 40px;
      margin-right: 16px;
    }
    .headRight {
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 1;
      overflow: hidden;
      .name {
        font-weight: 600;
        font-size: 16px;
      }
      .link {
        width: 100%;
        font-size: 14px;
        color: var(--vp-c-text-2);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  .cover {
    aspect-ratio: 24/9;
    object-fit: cover;
    margin-bottom: 8px;
  }
  .coverScaleDown {
    object-fit: scale-down;
  }
  .details {
    margin: 0;
    color: var(--vp-c-text-1);
    font-size: 14px;
  }
  .space {
    flex-grow: 1;
    -webkit-box-flex: 1;
  }
  .foot {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    opacity: 0.5;
    margin-top: 8px;
    transition: opacity 0.25s;
    .icon {
      height: 14px;
      width: 14px;
    }
    .name {
      margin-left: 4px;
      font-size: 12px;
      line-height: normal;
    }
    .openIcon {
      margin-left: 4px;
      width: 11px;
      height: 11px;
      transition: transform 0.25s;
      background-color: currentColor;
      -webkit-mask-image: url('@/assets/images/right.svg');
      mask-image: url('@/assets/images/right.svg');
    }
  }
  &:hover {
    .foot {
      opacity: 0.8;
      .openIcon {
        transform: translateX(4px);
      }
    }
  }
}
</style>
