import { useLocalStorage } from '@vueuse/core'
import { defineStore } from 'pinia'

export enum APPEARANCE {
  LIGHT = 'light',
  DARK = 'dark',
  SYSTEM = 'system',
}

export enum ExitMode {
  minimize,
  exit,
  prompt,
}
export enum WallpaperColor {
  RedSandDunes = 'RedSandDunes',
  GreenRockyMountains = 'GreenRockyMountains',
  GreenMountainTop = 'GreenMountainTop',
  OrangeDesert = 'OrangeDesert',
  BlueMountains = 'BlueMountains',
  Customize = 'Customize',
}
export interface VuetifyTheme {
  name: string
  dark: boolean
  colors: Record<string, string>
}
export interface SettingState {
  locale: string
  appearance: APPEARANCE
  wallpaperColor: WallpaperColor
  customTheme: VuetifyTheme[]
  rail: boolean
  exitMode: ExitMode
}
export const useSettingStore = defineStore('setting', {
  state: () => {
    return useLocalStorage<SettingState>('setting', {
      locale: 'zhCN',
      appearance: APPEARANCE.SYSTEM,
      wallpaperColor: WallpaperColor.GreenRockyMountains,
      customTheme: [],
      rail: true,
      exitMode: ExitMode.prompt,
    })
  },
})
