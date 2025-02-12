<script setup>
import { ref } from 'vue';

defineOptions({
  name: 'portfolio-form',
});

const portfolioName = ref('');
const portfolioDate = ref('');

function handleSubmit() {
  // Handle form submission logic here
  console.log('Form submitted:', { portfolioName: portfolioName.value, portfolioDate: portfolioDate.value });
}

function handleCancel() {
  // Handle cancel logic here
  portfolioName.value = '';
  portfolioDate.value = '';
}
</script>

<template>
  <div class="bg-white w-full md:max-w-[450px] px-6 py-10 rounded-lg">
    <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
      
      <div class="bg-[#d6d7d8] rounded-2xl shadow-lg"> 
        <label for="portfolioName" class="block text-gray-700"></label>
        <input type="text" id="portfolioName" v-model="portfolioName" 
          class="w-full px-6 py-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#353e49] focus:border-transparent"
          placeholder="Portfolio Name"/>
      </div>

      <div class="bg-[#d6d7d8] rounded-2xl shadow-lg">
        <label for="portfolioDate" class="block text-gray-700"></label>
        <input type="date" id="portfolioDate" v-model="portfolioDate"
          class="w-full px-6 py-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#353e49] focus:border-transparent"/>
      </div>

      <div class="flex justify-between mt-3">
        <router-link to="/portfolios"
          class="px-4 py-2 rounded-4xl bg-[#353e49] text-white hover:bg-[#2c333a] shadow-lg">
          <button type="button" @click="handleCancel" class="cursor-pointer">
            Cancel
          </button>
        </router-link>
        
        <button type="submit" 
          class="px-4 py-2 rounded-4xl bg-[#353e49] text-white hover:bg-[#2c333a] shadow-lg cursor-pointer">Save
        </button>
      </div>
    </form>
  </div>
</template>