<template>
  <div>
    <app-title path="common.language" />
    <v-list-item class="pa-0">
      <v-list-item-title class="text-caption mr-4"> {{ t('main.setting.language') }} </v-list-item-title>
      <template #append>
        <AppSelect v-model="lang" :items="localeOptions" />
      </template>
    </v-list-item>
  </div>
  <div v-if="is.windows()">
    <app-title path="common.exitmode" />
    <v-list-item class="pa-0">
      <v-list-item-title class="text-caption"> {{ t('main.setting.exit') }} </v-list-item-title>
      <template #append>
        <AppSelect v-model="exitMode" :items="exitModeOptions" />
      </template>
    </v-list-item>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'

import AppSelect from '@/components/menu/Select.vue'
import AppTitle from '@/components/Title.vue'
import { ExitMode, useSettingStore } from '@/store/setting'
import is from '@/util/is'
const settingStore = useSettingStore()
const { locale: lang, exitMode } = storeToRefs(settingStore)

const { t, locale } = useI18n({ useScope: 'global' })

const localeOptions = computed(() => {
  return [
    {
      title: t('common.zh-CN'),
      value: 'zhCN',
      activeClass: 'text-primary',
      rounded: true,
    },
    {
      title: t('common.en'),
      value: 'en',
      activeClass: 'text-primary',
      rounded: true,
    },
  ]
})
const exitModeOptions = computed(() => {
  return [
    {
      title: t('message.exit_prompt'),
      value: ExitMode.prompt,
      activeClass: 'text-primary',
      rounded: true,
    },
    {
      title: t('message.exit_direct'),
      value: ExitMode.exit,
      activeClass: 'text-primary',
      rounded: true,
    },
    {
      title: t('message.exit_min'),
      value: ExitMode.minimize,
      activeClass: 'text-primary',
      rounded: true,
    },
  ]
})
watch(lang, () => {
  locale.value = lang.value
})
</script>
