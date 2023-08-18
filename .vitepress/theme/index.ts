import { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import Score from './components/Score.vue'
import Emoji from './components/Emoji.vue'
import ToolInfo from './components/ToolInfo.vue'
import CGFileInput from './components/CGFileInput.vue'
import SearchBox from './components/SearchBox.vue'
import VFInput from './components/VFInput.vue'
import CGInput from './components/CGInput.vue'

import './styles/index.scss'

import { useZoom } from './events/zoom'

export default <Theme>{
    // Layout: Layout,
    extends: DefaultTheme,
    enhanceApp(ctx) {
        // DefaultTheme.enhanceApp(ctx)
        const { app } = ctx

        app.component('Score', Score)
        app.component('Emoji', Emoji)
        app.component('ToolInfo', ToolInfo)
        app.component('CGFileInput', CGFileInput)
        app.component('SearchBox', SearchBox)
        app.component('VFInput', VFInput)
        app.component('CGInput', CGInput)
    },
    setup() {
        // Zoom
        useZoom()
    }
}