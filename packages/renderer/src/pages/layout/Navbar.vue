<template>
  <v-navigation-drawer :rail="rail" rail-width="72" class="drag-area">
    <div class="pl-2">
      <drawer-toggle />
    </div>
    <div class="content-warp flex-fill no-drag-area" :class="{ 'rail-nav': rail }">
      <v-list class="list-content d-flex flex-column justify-center" rounded :nav="true">
        <v-list-item
          v-for="item in nav"
          :key="item.val"
          class="drawer-item rounded-pill"
          :to="item.to"
          active-class="text-primary"
          :style="{ minHeight: '56px' }"
        >
          <template #prepend>
            <div class="d-flex justify-center align-center" :style="{ width: '40px', height: '40px' }">
              <v-icon size="small" :icon="item.icon" color="primary"></v-icon>
            </div>
          </template>
          <v-list-item-title class="font-weight-bold">
            {{ $t(item.title) }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
      <div class="list-dummy"></div>
    </div>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { mdiAlbum, mdiHome } from '@mdi/js'
import { storeToRefs } from 'pinia'

import { useSettingStore } from '@/store/setting'
import is from '@/util/is'

const { rail } = storeToRefs(useSettingStore())

const nav = computed(() => {
  const list = [
    {
      icon: mdiHome,
      val: 'home',
      title: 'main.nav.home',
      to: '/home',
    },
    {
      icon: mdiAlbum,
      val: 'about',
      title: 'main.nav.about',
      to: '/about',
    },
  ]
  return list
})
</script>
