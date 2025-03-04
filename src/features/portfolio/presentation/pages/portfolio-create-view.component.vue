<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import PortfolioForm from '../components/portfolio-form.component.vue';
import { useRouteParams } from '@shared/composable/use-route-params.composable.js'; 

import { PortfolioUseCases } from '@features/portfolio/application/portfolio.usecases.js';

const router = useRouter();
const loading = ref(false); 
const errorMessage = ref('');

const portfolioId = parseInt(useRouteParams('portfolioId').value);

const portfolioUseCases = new PortfolioUseCases();

async function createPortfolio(portfolioPayload) {
  await portfolioUseCases.createPortfolio(portfolioPayload);
  alert('Portfolio created successfully! 🎉');
  router.push('/portfolios');
}

async function updatePortfolio(portfolioPayload) {
  const response = await portfolioUseCases.updatePortfolio(portfolioPayload);

  console.log('response', response);

  if (response.status == 200) {
    alert('Portfolio updated successfully! 🎉');
    router.push('/portfolios');
  }
  else if (response.status == 400) {
    alert('Invalid data. Please check the form and try again.');
  }
  else {
    errorMessage.value = 'Failed to update portfolio. Please try again.';
  }
}

async function handleCreateOrEditPortfolio(portfolioData) {
  loading.value = true;
  errorMessage.value = '';

  const portfolioPayload = { ...portfolioData, id: portfolioId };

  try {
    if (portfolioId) {
      await updatePortfolio(portfolioPayload);
    } else {
      await createPortfolio(portfolioData);
    }
  } catch (error) {
  
    if (portfolioId) {
      errorMessage.value = 'Failed to update portfolio. Please try again.';
    } else {
      errorMessage.value = 'Failed to create portfolio. Please try again.';
    }
  } finally {
    loading.value = false;
  }
}

</script>

<template>
  <div class="flex items-center justify-center h-[93vh] bg-gray-100 p-4">
    <portfolio-form @submit.prevent="handleCreateOrEditPortfolio"/>
    <p v-if="errorMessage" class="text-red-500 mt-4">{{ errorMessage }}</p>
  </div>
</template>