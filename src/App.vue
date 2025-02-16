<script setup>
import Toolbar from './public/components/toolbar.component.vue';

</script>

<template>
  <div class="flex flex-col min-h-screen">
    <header v-if="$route.meta.showToolbar">
      <Toolbar/>
    </header>
    <main :class="['flex-grow overflow-auto', { 'lg:mt-15': $route.meta.showToolbar }]">
      <router-view/>
    </main>
  </div>
</template>

<style>
html, body {
  height: 100%;
  margin: 0;
  overflow: auto;
}

@media (min-width: 1024px) {
  html, body {
    overflow: hidden;
  }
}
</style>