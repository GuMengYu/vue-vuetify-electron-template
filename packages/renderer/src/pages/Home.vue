<template>
  <div class="text-center">
    <div class="d-flex justify-center">
      <v-img height="140" :src="electron" />
      <v-img height="140" :src="vite" />
      <v-img height="140" :src="vue" />
      <v-img height="140" :src="vuetify" />
    </div>
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite + Vuetify" />
    <Context class="my-2" />
  </div>
</template>
<script setup lang="ts">
import electron from '../assets/electron.png'
import vite from '../assets/vite.svg'
import vue from '../assets/vue.png'
import vuetify from '../assets/vuetify.svg'
import Context from './components/Context.vue'
import HelloWorld from './components/HelloWorld.vue'
</script>
