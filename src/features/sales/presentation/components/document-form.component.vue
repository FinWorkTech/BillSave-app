<script setup>
import { ref, onMounted } from 'vue';
import { useRouteParams } from '@shared/composable/use-route-params.composable.js';
import { useDocumentStore } from '@features/sales/presentation/store/document.store.js';

import ComboBox from '@shared/components/combo-box.component.vue'

const documentStore = useDocumentStore();

defineOptions({
  name: 'document-form',
});

// variables for form fields
const code = ref('');
const dueDate = ref('');
const currency = ref('');
const rateType = ref('');
const rateValue = ref(0.0);
const issueDate = ref('');
const nominalAmount = ref('');

const documentId = parseInt(useRouteParams('documentId').value);
const portfolioId = parseInt(useRouteParams('portfolioId').value);

// variables for combo box to select rate type
const rateOptions = [
  { value: 'Nominal', text: 'Nominal' },
  { value: 'Effective', text: 'Effective' },
];

// variables for combo box to select money
const moneyOptions = [
  { value: 'USD', text: 'USD' },
  { value: 'PEN', text: 'PEN' },
];

// emit event to parent component
const emit = defineEmits(['submit']);

// function to check if form is valid
function isFormValid() {
  return code.value && dueDate.value && currency.value && rateType.value && rateValue.value && issueDate.value && nominalAmount.value;
}

// function to handle form submission
function handleSubmit() {

  if (!isFormValid()) {
    alert('Please fill in all fields');
    return;
  }

  const rawData = {
    code: code.value,
    issueDate: issueDate.value,
    dueDate: dueDate.value,
    rateType: rateType.value,
    rateValue: parseFloat(rateValue.value),
    currency: currency.value,
    nominalAmount: parseFloat(nominalAmount.value),
    portfolioId: portfolioId
  };

  if (documentId) {
    documentStore.updateDocumentById(documentId, rawData);
  }

  emit('submit', rawData);
  
  handleClear();
}

// function to handle cancel button
function handleCancel() {
  handleClear();
}

// function to clear form fields
function handleClear() {
  code.value = '';
  dueDate.value = '';
  currency.value = '';
  rateType.value = '';
  rateValue.value = 0.0;
  issueDate.value = '';
  nominalAmount.value = '';
}

const loadDocumentDataIntoTheForm = async () => {
  const documentFound = await documentStore.fetchDocumentById(documentId);

  if (documentFound) {
    code.value = documentFound.code;
    dueDate.value = documentFound.dueDate;
    currency.value = documentFound.currency;
    rateType.value = documentFound.rateType;
    rateValue.value = documentFound.rateValue;
    issueDate.value = documentFound.issueDate;
    nominalAmount.value = documentFound.nominalAmount;
  }
}

onMounted(loadDocumentDataIntoTheForm);
</script>

<template>
  <div class="bg-white w-full md:max-w-[450px] px-6 py-10 rounded-lg">
    <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
      
      <div class="bg-[#d6d7d8] rounded-2xl shadow-lg"> 
        <label for="code" class="block text-gray-700"></label>
        <input type="text" id="code" v-model="code" 
          class="w-full px-6 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#353e49] focus:border-transparent"
          placeholder="Document Code"/>
      </div>

      <div class="bg-[#d6d7d8] rounded-2xl shadow-lg">
        <label for="nominalAmount" class="block text-gray-700"></label>
        <input type="text" id="nominalAmount" v-model="nominalAmount"
          class="w-full px-6 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#353e49] focus:border-transparent"
          placeholder="Nominal Value"/>
      </div>

      <div class="flex flex-row justify-between">
        <div class="bg-[#d6d7d8] rounded-2xl shadow-lg w-[48%]">
          <label for="issueDate" class="block text-gray-700"></label>
          <input type="date" id="issueDate" v-model="issueDate"
            class="w-full px-6 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#353e49] focus:border-transparent"/>
        </div>

        <div class="bg-[#d6d7d8] rounded-2xl shadow-lg w-[48%]">
          <label for="dueDate" class="block text-gray-700"></label>
          <input type="date" id="dueDate" v-model="dueDate"
            class="w-full px-6 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#353e49] focus:border-transparent"/>
        </div>
      </div>

      <div class="flex flex-row justify-between">
        <div class="bg-[#d6d7d8] rounded-2xl shadow-lg w-[48%]">
          <label for="rateType" class="block text-gray-700"></label>
          <combo-box id="rateType" v-model="rateType" :options="rateOptions" placeholder="Select Rate" paddingY="py-3"/>
        </div>

        <div class="bg-[#d6d7d8] rounded-2xl shadow-lg w-[48%]">
          <label for="rateValue" class="block text-gray-700"></label>
          <input type="text" id="rateValue" v-model="rateValue"
            class="w-full px-6 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#353e49] focus:border-transparent"
            placeholder="Rate Value"/>
        </div>
      </div>

      <div class="bg-[#d6d7d8] rounded-2xl shadow-lg">
        <label for="currency" class="block text-gray-700"></label>
        <combo-box id="currency" v-model="currency" :options="moneyOptions" placeholder="Select Money" paddingY="py-3"/>
      </div>


      <div class="flex justify-between mt-3">
        <router-link :to="`/portfolios/${portfolioId}/documents`"
          class="px-4 py-2 rounded-4xl bg-[#353e49] text-white hover:bg-[#2c333a] shadow-lg">
          <button type="button" @click.prevent="handleCancel" class="cursor-pointer">
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