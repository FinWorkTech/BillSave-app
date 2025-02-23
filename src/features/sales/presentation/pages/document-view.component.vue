<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';

import ComboBox from '@shared/components/combo-box.component.vue';
import SearchInput from '@shared/components/search.component.vue';

import DocumentItem from '../components/document-item.component.vue';
import { fetchDocumentsUseCase } from '@features/sales/application/fetch-documents.usecase.js';
import { deleteDocumentUseCase } from '@features/sales/application/delete-document.usecase.js';

const route = useRoute();

defineOptions({
  name: 'document-view',
});

const options = [
  { value: 'option1', text: 'Option 1' },
  { value: 'option2', text: 'Option 2' },
  { value: 'option3', text: 'Option 3' }
];

const portfolioId = computed(() => route.params.portfolioId);

const documents = ref([]);

const loadDocuments = async () => {
  documents.value = await fetchDocumentsUseCase(portfolioId.value);
};

const handleDeleteDocument = async ({ documentId, portfolioId}) => {
  await deleteDocumentUseCase(documentId, portfolioId);
  loadDocuments();
};

onMounted(loadDocuments);
</script>

<template>
  <div class="lg:my-12">
    <div class="bg-[#4F5966] p-8 lg:flex lg:justify-center my-1">
      <div class="text-white text-center grid grid-cols-2 gap-6 lg:flex lg:w-1/2 lg:justify-between">

        <div class="flex flex-col">
          <span class="font-bold">
            Name
          </span>

          <span>
            new_name
          </span>
        </div>

        <div class="flex flex-col">
          <span class="font-bold">
            Dscto. Date
          </span>

          <span>
            20/06/2025
          </span>
        </div>

        <div class="flex flex-col">
          <span class="font-bold">
            Assoc. Docs
          </span>

          <span>
            0
          </span>
        </div>

        <div class="flex flex-col">
          <span class="font-bold">
            TCEA
          </span>

          <span>
            0
          </span>
        </div>

      </div>
    </div>

    <div class="flex flex-col p-4 lg:py-3 lg:px-30 gap-4 justify-between">

      <div class="flex flex-col lg:flex-row lg:justify-between py-2 gap-3 ">
      
      <router-link :to="`/portfolios/${portfolioId}/documents/create`" class="w-full lg:w-[300px] bg-[#66798a] block px-4 py-2 rounded-4xl text-white text-center">
        <span>Create</span>
      </router-link>

      <div class="flex flex-row gap-4">
        <combo-box :options="options" placeholder="Filter by" class="lg:w-[300px]"/>
        <search-input placeholder="Search " class="lg:max-w-[500px]"/>
      </div>
    </div>
    
    <div v-if="documents.length === 0" class="bg-[#afb6bd] max-h-[calc(100vh-10rem)] rounded-lg py-4 mt-3 px-6 overflow-y-auto min-h-[300px] flex items-center justify-center">
      <p class="text-center text-gray-700">This portfolio has no documents</p>
    </div>

    <div v-else class="bg-[#afb6bd] flex flex-row flex-wrap gap-6 px-6 py-4 rounded-2xl justify-between overflow-auto h-[500px]">
      <div v-for="document in documents" :key="document.id" class=" w-full md:max-w-[330px] lg:max-w-[350px] xl:max-w-[450px]">
        <document-item
          :code="document.code"
          :currency="document.currency"
          :dueDate="document.dueDate"
          :issueDate="document.issueDate"
          :rateType="document.rateType"
          :rateValue="document.rateValue"
          :nominalAmount="document.nominalAmount"

          :documentId="document.id"
          :portfolioId="document.portfolioId"
          @delete-document="handleDeleteDocument"
        />
      </div>
    </div>

    </div>

  </div>
</template>