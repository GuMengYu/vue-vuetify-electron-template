<template>
  <div class="d-flex justify-center">
    <v-card
      variant="tonal"
      color="tertiary"
      width="250"
      height="250"
      class="d-flex align-center justify-center rounded-lg"
      @contextmenu="openContextMenu"
    >
      右键这里
    </v-card>
  </div>
</template>
<script setup lang="ts">
import { useToast } from 'vue-toastification'
import { useContextMenu } from 'vuetify-ctx-menu/lib/main'

import { useCurrentTheme } from '@/hooks/useTheme'
const { themeName } = useCurrentTheme()

const contextMenu = useContextMenu()

const toast = useToast()

function openContextMenu(event: MouseEvent) {
  const { x, y } = event
  const option = {
    theme: themeName.value,
    x,
    y,
    items: [
      {
        label: 'meun-1',
        onClick: () => {
          toast.warning('施工中...')
        },
      },
      {
        label: 'meun-2',
        onClick: () => {
          toast.warning('施工中...')
        },
      },
      {
        label: 'meun-3',
        onClick: () => {
          toast.warning('施工中...')
        },
      },
      {
        label: 'meun-4',
        onClick: () => {
          toast.warning('施工中...')
        },
      },
    ],
    customClass: 'bg-surfaceVariant',
  }
  contextMenu(option)
}
</script>
