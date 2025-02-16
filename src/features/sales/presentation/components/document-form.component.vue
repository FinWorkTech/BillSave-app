<script setup>
import { ref } from 'vue';
import ComboBox from '../../../../shared/components/combo-box.component.vue'

defineOptions({
  name: 'document-form',
});

const documentId = ref('');
const nominalValue = ref('');
const dstoFecha = ref('');
const expFecha = ref('');
const rate = ref('');
const rateValue = ref('');
const money = ref('');

const rateOptions = [
  { value: 'Nominal', text: 'Nominal' },
  { value: 'Effective', text: 'Effective' },
];

const moneyOptions = [
  { value: 'usd', text: 'USD' },
  { value: 'pen', text: 'PEN' },
];

function handleSubmit() {
  // Handle form submission logic here
  console.log('Form submitted:', { documentId: documentId.value, nominalValue: nominalValue.value, dstoFecha: dstoFecha.value, expFecha: expFecha.value, rate: rate.value, rateValue: rateValue.value, money: money.value });
}

function handleCancel() {
  // Handle cancel logic here
  documentId.value = '';
  nominalValue.value = '';
  dstoFecha.value = '';
  expFecha.value = '';
  rate.value = '';
  rateValue.value = '';
  money.value = '';
}
</script>

<template>
  <div class="bg-white w-full md:max-w-[450px] px-6 py-10 rounded-lg">
    <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
      
      <div class="bg-[#d6d7d8] rounded-2xl shadow-lg"> 
        <label for="documentId" class="block text-gray-700"></label>
        <input type="text" id="documentId" v-model="documentId" 
          class="w-full px-6 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#353e49] focus:border-transparent"
          placeholder="Document ID"/>
      </div>

      <div class="bg-[#d6d7d8] rounded-2xl shadow-lg">
        <label for="nominalValue" class="block text-gray-700"></label>
        <input type="text" id="nominalValue" v-model="nominalValue"
          class="w-full px-6 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#353e49] focus:border-transparent"
          placeholder="Nominal Value"/>
      </div>

      <div class="flex flex-row justify-between">
        <div class="bg-[#d6d7d8] rounded-2xl shadow-lg w-[48%]">
          <label for="dstoFecha" class="block text-gray-700"></label>
          <input type="date" id="dstoFecha" v-model="dstoFecha"
            class="w-full px-6 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#353e49] focus:border-transparent"/>
        </div>

        <div class="bg-[#d6d7d8] rounded-2xl shadow-lg w-[48%]">
          <label for="expFecha" class="block text-gray-700"></label>
          <input type="date" id="expFecha" v-model="expFecha"
            class="w-full px-6 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#353e49] focus:border-transparent"/>
        </div>

      </div>

      <div class="bg-[#d6d7d8] rounded-2xl shadow-lg">
        <label for="rate" class="block text-gray-700"></label>
        <combo-box id="rate" v-model="rate" :options="rateOptions" placeholder="Select Rate" paddingY="py-3"/>
      </div>

      <div class="bg-[#d6d7d8] rounded-2xl shadow-lg">
        <label for="rateValue" class="block text-gray-700"></label>
        <input type="text" id="rateValue" v-model="rateValue"
          class="w-full px-6 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#353e49] focus:border-transparent"
          placeholder="Rate Value"/>
      </div>

      <div class="bg-[#d6d7d8] rounded-2xl shadow-lg">
        <label for="money" class="block text-gray-700"></label>
        <combo-box id="money" v-model="money" :options="moneyOptions" placeholder="Select Money" paddingY="py-3"/>
      </div>

      <div class="flex justify-between mt-3">
        <router-link to="/portfolios"
          class="px-4 py-2 rounded-4xl bg-[#353e49] text-white hover:bg-[#2c333a] shadow-lg">
          <button type="button" @click="handleCancel" class="cursor-pointer">
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