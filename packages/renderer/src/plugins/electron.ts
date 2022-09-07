import { useIpcRenderer } from '@vueuse/electron'
import { useToast } from 'vue-toastification'

import { useAppStore } from '@/store/app'

const toast = useToast()
import is from '@/util/is'

export function useElectron() {
  if (is.electron()) {
    registerIpcRenderer()
  }
}

function registerIpcRenderer() {
  const appStore = useAppStore()
  const ipcRenderer = useIpcRenderer()

  ipcRenderer.on('startDownload', (e, data) => {
    console.log('startDownload', e, data)
    // window?.app?.$toast(`开始下载 ${data.name}`, {
    //   color: 'info',
    // })
  })
  ipcRenderer.on('downloadProgress', (e, data) => {
    const { percent } = data
    console.log(percent)
  })
  ipcRenderer.on('downloadCompleted', (e, file, fileName) => {
    const { path } = file
    console.log(file)
    toast.success(`${fileName} 已下载到:${path}`, {
      timeout: 5000,
    })
  })
  ipcRenderer.on('windowState', (e, state) => {
    appStore.$state.windowState = state
  })
}
