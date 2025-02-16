<script setup>
import SignIn from '../components/sign-in.component.vue';

defineOptions({
  name: 'sign-up-view',
});

</script>

<template>
  <div class="min-h-screen w-full relative">
    <img src="@webp/mountains.webp" alt="Mountains Background" class="absolute inset-0 w-full h-full object-cover"/>

    <div class="absolute inset-0 flex items-center justify-center">
      <sign-in/>
    </div>
  </div>
</template>
