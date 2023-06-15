import DefaultTheme from 'vitepress/theme'
import { Theme, defineConfigWithTheme } from 'vitepress'
import Score from './components/Score.vue'
import { h } from 'vue'
import './custom.css'
import './index.css'
import Layout from './Layout.vue'


export default <Theme>{
    Layout: Layout,
    extends: DefaultTheme,
    enhanceApp(ctx) {
        DefaultTheme.enhanceApp(ctx)
        // register your custom global components
        ctx.app.component('Score', Score)

    }
}