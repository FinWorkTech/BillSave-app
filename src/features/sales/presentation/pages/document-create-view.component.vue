<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import DocumentForm from '../components/document-form.component.vue';
import { useRouteParams } from '@shared/composable/use-route-params.composable.js';

import { createDocumentUseCase } from '@features/sales/application/create-document.usecase.js';
import { updateDocumentUseCase } from '@features/sales/application/update-document.usecase.js'; 

const router = useRouter();

defineOptions({
  name: 'document-create-view',
});

const loading = ref(false);
const errorMessage = ref('');

const documentId = parseInt(useRouteParams('documentId').value);

// function to create a document
async function createDocument(documentPayload) {
  const response = await createDocumentUseCase(documentPayload);
  console.log('Document created respose:', response);
  alert('Document created successfully! 🎉');
  router.push(`/portfolios/${documentPayload.portfolioId}/documents`);
}

// function to update a document
async function updateDocument(documentPayload) {
  const response = await updateDocumentUseCase(documentPayload);
  alert('Document updated successfully! 🎉');
  router.push(`/portfolios/${documentPayload.portfolioId}/documents`);
}

// function to handle document creation or edition
async function handleCreateOrEditDocument(documentData) {
  loading.value = true;
  errorMessage.value = '';

  const documentPayLoad = { ...documentData, id: documentId };

  try {
    if (documentId) {
      await updateDocument(documentPayLoad);
    }
    else {
      await createDocument(documentData);
    } 
    
  } catch (error) {

    if (documentId) {
      errorMessage.value = 'Failed to update document. Please try again.';
      return;
    }
    
    errorMessage.value = 'Failed to create document. Please try again.';
  } finally {
    loading.value = false;
  }
}

</script>

<template>
  <div class="flex items-center justify-center h-[93vh] bg-gray-100 p-4">
    <document-form @submit="handleCreateOrEditDocument"/>
    <p v-if="errorMessage" class="text-red-500 mt-4">{{ errorMessage }}</p>
  </div>
</template>