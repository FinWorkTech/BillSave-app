<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import PortfolioForm from '../components/portfolio-form.component.vue';
import { createPortfolioUseCase } from '@features/portfolio/application/create-portfolio.usecase.js';
import { updatePortfolioUseCase } from '@features/portfolio/application/update-portfolio.usecase.js';

const router = useRouter();
const loading = ref(false); 
const errorMessage = ref('');

async function handleCreatePortfolio(portfolioData) {
  loading.value = true;
  errorMessage.value = '';

  try {
    await createPortfolioUseCase(portfolioData);
    alert('Portfolio created successfully! 🎉');
    router.push('/portfolios');
  }
  catch(error) {
    console.error('Error creating portfolio:', error);
    errorMessage.value = 'Failed to create portfolio. Please try again.';
  } finally {
    loading.value = false;
  }
}

async function handleUpdatePortfolio(portfolioData) {
  loading.value = true;
  errorMessage.value = '';

  try {
    await updatePortfolioUseCase(portfolioData);
    alert('Portfolio updated successfully! 🎉');
    router.push('/portfolios');
  }
  catch(error) {
    console.error('Error updating portfolio:', error);
    errorMessage.value = 'Failed to update portfolio. Please try again.';
  } finally {
    loading.value = false;
  }
}

</script>

<template>
  <div class="flex items-center justify-center h-[93vh] bg-gray-100 p-4">
    <portfolio-form @submit="handleCreatePortfolio"/>
    <p v-if="errorMessage" class="text-red-500 mt-4">{{ errorMessage }}</p>
  </div>
</template>