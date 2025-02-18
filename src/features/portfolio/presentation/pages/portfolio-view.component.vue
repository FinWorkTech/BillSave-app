<script setup>
import { ref, onMounted } from 'vue';

import { AuthService } from '@shared/services/auth.service.js';
import SearchInput from '@shared/components/search.component.vue'

import PortfolioItem from '../components/portfolio-item.component.vue';
import { fetchPortfoliosUseCase } from '@features/portfolio/application/fetch-portfolios.usecase.js';


defineOptions({
  name: 'portfolio-view',
});

const userId = AuthService.getUserId();

const portfolios = ref([]);

onMounted(async () => {
  portfolios.value  = await fetchPortfoliosUseCase(userId);
  console.log('Portfolios obtenidos desde onMounted: ', portfolios.value);
});

</script>

<template>
  <div class="px-4 py-8 flex flex-col gap-4 lg:mt-10">

    <div class="flex flex-col lg:flex-row lg:justify-between lg:px-4 gap-4">
      
      <router-link to="/portfolios/create" class="w-full lg:w-[300px] bg-[#66798a] block px-4 py-2 rounded-4xl text-white text-center">
        <span>Create</span>
      </router-link>

      <search-input placeholder="Search portfolios..." class="lg:max-w-[500px]"/>
    </div>

    <div v-if="portfolios.length === 0" class="bg-[#afb6bd] max-h-[calc(100vh-10rem)] rounded-lg py-4 mt-3 px-6 overflow-y-auto min-h-[300px] flex items-center justify-center">
      <p class="text-center text-gray-700">You have no portfolios.</p>
    </div>

    <div v-else class="bg-[#afb6bd] max-h-[calc(100vh-10rem)] rounded-lg py-4 mt-3 px-6 overflow-y-auto min-h-[300px]">
      <portfolio-item 
        v-for="portfolio in portfolios" 
        :key="portfolio.id"
        :portfolioId="portfolio.id"
        :name="portfolio.name" 
        :date="portfolio.discountDate" 
        :assoc-docs="portfolio.totalDocuments" 
        :tcea="portfolio.effectiveAnnualCostRate" />
    </div>

  </div>
</template>

<style scoped>

</style>