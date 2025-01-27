<script setup>
import { ref } from 'vue';

var count = ref(0);

const increment = () => {
  count.value++;
};
</script>

<template>
  <div class="w-full h-screen flex items-center justify-center">
    <div class="text-center">
      <h1 class="my-3">{{ count }}</h1>
      <button @click="increment" class="px-5 py-2 bg-blue-500 rounded-xl">Increment</button>
    </div>
  </div>
</template>