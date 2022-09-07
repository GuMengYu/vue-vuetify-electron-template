import { defineStore } from 'pinia'
import { reactive, toRefs } from 'vue'

import { WindowState } from '@/util/enum'

export interface AppState {
  showControlCenter: boolean
  showCommandPalette: boolean
  windowState: WindowState
}
export const useAppStore = defineStore('app', {
  state: () => {
    const state = reactive<AppState>({
      showControlCenter: false,
      showCommandPalette: false,
      windowState: WindowState.NORMAL,
    })
    return {
      ...toRefs(state),
    }
  },
  actions: {
    async init() {},
  },
})
