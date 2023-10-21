/***
 * 从 vitepress/dist/client/theme-default/composables/edit-link 复制
 */
import { computed } from 'vue'
import { useData } from 'vitepress'

interface EditLink {
  url?: string
  text: string
}

export function useEditLink() {
  const { theme, page } = useData()
  return computed<EditLink>(() => {
    const { text = 'Edit this page', pattern = '' } = theme.value.editLink || {}
    let url: string
    if (typeof pattern === 'function') {
      url = pattern(page.value)
    } else {
      url = pattern.replace(/:path/g, page.value.filePath)
    }
    return { url, text }
  })
}
