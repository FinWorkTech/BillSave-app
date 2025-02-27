<script setup>
import { ref, onMounted, watch } from 'vue';

import ComboBox from '@shared/components/combo-box.component.vue';
import ReportItem from '@features/reporting/presentation/components/report-item.component.vue';

// TODO: refactor this implementation
import { fetchPortfoliosUseCase } from '@features/portfolio/application/fetch-portfolios.usecase.js';
// TODO: refactor this implementation
import { fetchDocumentByDateRangeUseCase } from '@features/sales/application/fetch-document-by-date-range.usecase.js';

defineOptions({
  name: 'report-view',
});

const authData = JSON.parse(localStorage.getItem('authData'));
const userId = authData ? authData.userId : null;

const userPortfolios = ref([]);
const filteredDocuments = ref([]);

const loading = ref(false);
const errorMessage = ref('');

const startDate = ref('');
const endDate = ref('');

// function to fetch user portfolios
async function loadPortfolios() {

  loading.value = true;

  try {
    const portfolios = await fetchPortfoliosUseCase(userId);

    userPortfolios.value = portfolios.map(portfolio => ({
      text: portfolio.name,
      value: portfolio.name
    }));

  } catch (error) {
    errorMessage.value = 'Failed to load portfolios';
  } finally {
    loading.value = false;
  }
}

// function to filter documents by date range
async function filterDocumentsByDateRange() {
  if (!startDate.value || !endDate.value) {
    errorMessage.value = 'Please select both start and end dates';
    return;
  }

  loading.value = true;
  try {
    const documents = await fetchDocumentByDateRangeUseCase(startDate.value, endDate.value);
    filteredDocuments.value = documents;
  } catch (error) {
    errorMessage.value = 'Failed to fetch documents';
  } finally {
    loading.value = false;
  }
}

// Load user portfolios on component mount
onMounted(() => {
  loadPortfolios();
});

watch([startDate, endDate], () => {
  if (startDate.value && endDate.value) {
    filterDocumentsByDateRange();
  }
});

</script>

<template>
  <div class="px-4 py-8 flex flex-col gap-4 lg:mt-10">

    <div class="flex flex-col lg:flex-row lg:justify-between lg:px-4 gap-4">
      
      <router-link to="/portfolios/create" class="w-full lg:w-[300px] bg-[#66798a] block px-4 py-2 rounded-4xl text-white text-center leading-8">
        <span>Generate</span>
      </router-link>

      <div class="flex flex-col gap-4 lg:flex-row items-center lg:w-1/2">

        <combo-box placeholder="Select portfolio" :options="userPortfolios"/>

        <div class="flex flex-row justify-between w-full">
          <div class="bg-[#d6d7d8] rounded-2xl shadow-lg w-[48%]">
            <label for="portfolioDate" class="block text-gray-700"></label>
            <input type="date" id="startDate" v-model="startDate"
              class="w-full px-6 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#353e49] focus:border-transparent"/>
          </div>

          <div class="bg-[#d6d7d8] rounded-2xl shadow-lg w-[48%]">
            <label for="portfolioDate" class="block text-gray-700"></label>
            <input type="date" id="endDate" v-model="endDate"
              class="w-full px-6 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#353e49] focus:border-transparent"/>
          </div>
        </div>
      </div>
    </div>

    <div v-if="filteredDocuments.length === 0" class="bg-[#afb6bd] max-h-[calc(100vh-10rem)] rounded-lg py-4 mt-3 px-6 overflow-y-auto min-h-[300px] flex items-center justify-center">
      <p class="text-center text-gray-700">You have no data to export</p>
    </div>

    <div v-else class="bg-[#afb6bd] rounded-lg py-4 mt-3 px-6 overflow-y-auto min-h-[300px] max-h-[calc(90vh-10rem)]">
      <report-item v-for="document in filteredDocuments" :key="document.code" 
      :documentCode="document.code" 
      :issueDate="document.issueDate" 
      :dueDate="document.dueDate"
      :nominalAmount="document.nominalAmount"
      :rateValue="document.rateValue"
      />
    </div>

  </div>
</template>