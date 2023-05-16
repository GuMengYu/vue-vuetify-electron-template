import { createApp } from 'vue'

import App from './App.vue'
// directives
import { useDirectives } from './directives'
import { useContextMenu } from './plugins/contextmenu'
// plugins
import { useDayjs } from './plugins/dayjs'
import { useElectron } from './plugins/electron'
import { useI18n } from './plugins/i18n'
import { usePinia } from './plugins/pinia'
import { useToast } from './plugins/toast'
import { useVuetify } from './plugins/vuetify'
import { useFonts } from './plugins/webfontloader'
import { useRouter } from './router'

// 加载css fonts等资源
useFonts()
import './styles/animate.scss'
import './styles/global.scss'
import './styles/utility.scss'

import is from '@/util/is'
const app = createApp(App)
const router = useRouter(app)

usePinia(app)
useVuetify(app)
useI18n(app)
useToast(app)
useDirectives(app)
useDayjs(app)
useElectron(router)
useContextMenu(app)
app
  .mount('#app')
  .$nextTick()
  .then(() => {
    if (is.electron()) {
      postMessage({ payload: 'removeLoading' }, '*')
    }
  })
