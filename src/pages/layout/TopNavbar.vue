<template>
  <div
    class="d-flex rounded-pill elevation-1 no-drag-area"
    style="height: 46px; background-color: rgba(var(--v-theme-primary), 0.1)"
  >
    <div class="d-flex align-center justify-center">
      <v-btn
        height="46"
        rounded="pill"
        :class="{
          'text-primary': homeActive,
          'v-btn--active': homeActive,
        }"
        class="px-9 text-caption text-decoration-none"
        @click="to('/home')"
      >
        <v-icon class="mr-1">{{ mdiHome }}</v-icon
        >Home
      </v-btn>
      <v-btn height="46" variant="text" rounded="pill" class="px-9 text-caption" @click="to('/setting')">
        <v-icon class="mr-1">{{ mdiCog }}</v-icon> Setting
      </v-btn>

      <v-btn height="46" rounded="pill" class="px-9 text-caption" @click="to('/playground')">
        <v-icon class="mr-1">{{ mdiPodcast }}</v-icon
        >Playground
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { mdiCog, mdiHome, mdiPodcast } from '@mdi/js'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

import useInForeground from '@/hooks/useInForeground'
const { t } = useI18n()

const router = useRouter()
function handleSearch() {
  // todo search
}
function to(url: string) {
  router.push(url)
}
const { isActive: homeActive } = useInForeground('home')
</script>

<style scoped></style>
