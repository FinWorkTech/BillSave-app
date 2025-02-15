<script setup>

defineOptions({
  name: 'combo-box',
});

const props = defineProps({
  options: {
    type: Array,
    required: true
  },
  placeholder: {
    type: String,
    default: 'Filter by'
  }
});
</script>

<template>
  <div class="relative w-full">
    <select class="w-full px-4 py-2 rounded-4xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#66798a] focus:border-transparent appearance-none">
      <option value="">{{ placeholder }}</option>
      <option v-for="option in options" :key="option.value" :value="option.value">{{ option.text }}</option>
    </select>
    <img src="../../assets/images/svg/down.svg" alt="Arrow Down" class="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none"/>
  </div>
</template>

<style scoped>
/* Add any additional styles here if needed */
</style>