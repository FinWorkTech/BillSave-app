<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import PortfolioForm from '../components/portfolio-form.component.vue';
import { useRouteParams } from '@shared/composable/use-route-params.composable.js'; 

import { createPortfolioUseCase } from '@features/portfolio/application/create-portfolio.usecase.js';
import { updatePortfolioUseCase } from '@features/portfolio/application/update-portfolio.usecase.js';

const router = useRouter();
const loading = ref(false); 
const errorMessage = ref('');

const portfolioId = parseInt(useRouteParams('portfolioId').value);

async function createPortfolio(portfolioPayload) {
  await createPortfolioUseCase(portfolioPayload);
  alert('Portfolio created successfully! 🎉');
  router.push('/portfolios');
}

async function updatePortfolio(portfolioPayload) {
  await updatePortfolioUseCase(portfolioPayload);
  alert('Portfolio updated successfully! 🎉');
  router.push('/portfolios');
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
    console.error('Error creating or updating portfolio:', error);
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
    <portfolio-form @submit="handleCreateOrEditPortfolio"/>
    <p v-if="errorMessage" class="text-red-500 mt-4">{{ errorMessage }}</p>
  </div>
</template>