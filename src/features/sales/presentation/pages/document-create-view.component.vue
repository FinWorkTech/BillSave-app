<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import DocumentForm from '../components/document-form.component.vue';

import { createDocumentUseCase } from '@features/sales/application/create-document.usecase.js';

const router = useRouter();

defineOptions({
  name: 'document-create-view',
});

const loading = ref(false);
const errorMessage = ref('');

async function createDocument(documentPayload) {
  await createDocumentUseCase(documentPayload);
  alert('Document created successfully! 🎉');
  router.push(`/portfolios/${documentPayload.portfolioId}/documents`);
}

async function handleCreateDocument(portfolioData) {
  loading.value = true;
  errorMessage.value = '';

  try {
    await createDocument(portfolioData);
  } catch (error) {
    console.error('Error creating document:', error);
    errorMessage.value = 'Failed to create document. Please try again.';
  } finally {
    loading.value = false;
  }
}

</script>

<template>
  <div class="flex items-center justify-center h-[93vh] bg-gray-100 p-4">
    <document-form @submit="handleCreateDocument"/>
    <p v-if="errorMessage" class="text-red-500 mt-4">{{ errorMessage }}</p>
  </div>
</template>