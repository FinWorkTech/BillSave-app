<script setup>

// Importing Vue Composition API
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';

// Importing Shared Components
import ComboBox from '@shared/components/combo-box.component.vue';
import SearchInput from '@shared/components/search.component.vue';

import DocumentItem from '../components/document-item.component.vue';

// Importing Use Cases
import { fetchDocumentsUseCase } from '@features/sales/application/fetch-documents.usecase.js';
import { deleteDocumentUseCase } from '@features/sales/application/delete-document.usecase.js';

// Importing Sunat Store and StoreToRefs to access the store
import { useSunatStore } from '@shared/presentation/store/sunat.store.js';
import { storeToRefs } from 'pinia';

const route = useRoute();

defineOptions({
  name: 'document-view',
});

const options = [
  { value: 'option1', text: 'Option 1' },
  { value: 'option2', text: 'Option 2' },
  { value: 'option3', text: 'Option 3' }
];

// Declaring variables and computed properties
const documents = ref([]);
const exchangeRate = ref(0.0);
const portfolioId = computed(() => route.params.portfolioId);

// Accessing Sunat Store and storeToRefs to access the store
const sunatStore = useSunatStore();
const { salePrice, date } = storeToRefs(sunatStore);

// Methods

// Load documents from the database
const loadDocuments = async () => {
  documents.value = await fetchDocumentsUseCase(portfolioId.value);
};

// Delete a document from the database
const handleDeleteDocument = async ({ documentId, portfolioId}) => {
  await deleteDocumentUseCase(documentId, portfolioId);
  loadDocuments();
};

// Load the exchange rate from the Sunat API
const loadExchangeRate = async () => {
  const today = new Date().toISOString().split('T')[0];

  sunatStore.loadExchangeRateFromStorage();

  if (date.value !== today) {
    await sunatStore.fetchExchangeRate(today);
  }

  exchangeRate.value = salePrice.value;
}

// Convert the Nominal Value from USD to PEN
const convertUSDToPEN = (document) => {
  
  if (document.currency === 'USD' && exchangeRate.value > 0) {
    return (document.nominalAmount * exchangeRate.value).toFixed(2);
  }

  return document.nominalAmount;
}

// Lifecycle Hooks
onMounted(() => {
  loadDocuments();
  loadExchangeRate();
});
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

      <div class="flex flex-col items-center lg:flex-row lg:justify-between py-2 gap-3 ">
      
        <router-link :to="`/portfolios/${portfolioId}/documents/create`" class="w-full lg:w-[250px] bg-[#66798a] block px-4 py-2 rounded-4xl text-white text-center">
          <span>Create</span>
        </router-link>

        <div class="flex items-center bg-white shadow-md rounded-3xl px-6 py-2 border border-gray-300 text-sm">
          <span class="text-gray-700 font-semibold">FX Rate:</span>
          <span class="ml-2 text-red-700 font-bold">{{ exchangeRate }}</span>
        </div>

        <div class="flex flex-row gap-4 w-full lg:w-1/2">
          <combo-box :options="options" placeholder="Filter by" class=""/>
          <search-input placeholder="Search " class=""/>
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
          :nominalAmount="convertUSDToPEN(document)"

          :documentId="document.id"
          :portfolioId="document.portfolioId"
          @delete-document="handleDeleteDocument"
        />
      </div>
    </div>

    </div>

  </div>
</template>