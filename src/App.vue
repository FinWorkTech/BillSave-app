<script setup>
import Toolbar from './public/components/toolbar.component.vue';

</script>

<template>
  <div class="flex flex-col lg:min-h-screen lg:overflow-hidden">
    <Toolbar/>
    <div class="lg:mt-15">
      <router-view/>
    </div>
  </div>
</template>

<style>
</style>