<script setup>

const props = defineProps({
  name: 'search-input',
  
  placeholder: {
    type: String,
    default: 'Search...'
  },
  maxWidth: {
    type: String,
    default: '100%' 
  },

  modelValue: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['update:modelValue']);
</script>

<template>
  <div class="relative flex justify-center w-full">
    <input 
      type="text" 
      :placeholder="placeholder" 
      :style="{ maxWidth: maxWidth }"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#66798a] focus:border-transparent pr-10"/>
    
      <img src="../../assets/images/svg/search.svg" alt="Search Logo" class="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5"/>
  </div>
</template>