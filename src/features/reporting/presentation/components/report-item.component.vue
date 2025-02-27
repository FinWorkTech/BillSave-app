<script setup>

defineOptions({
  name: 'report-item',
});

const props = defineProps({
  documentCode: {
    type: String,
    required: true,
    default: 'N/A'
  },
  issueDate: {
    type: String,
    required: true,
    default: 'N/A'
  },
  dueDate: {
    type: String,
    required: true,
    default: 'N/A'
  },
  nominalAmount: {
    type: Number,
    required: true,
    default: 0
  },
  rateValue: {
    type: Number,
    required: true,
    default: 0
  },
});

</script>

<template>
  <div class="portfolio-item flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 bg-white p-8 rounded-2xl my-4 xl:px-14 transition duration-300 ease-in-out transform hover:bg-gray-100 hover:shadow-lg no-underline">
    <div class="flex flex-row justify-between lg:justify-start lg:gap-6">
      <span class="text-black font-bold">Document Code</span>
      <p>{{ documentCode }}</p>
    </div>

    <div class="flex flex-row justify-between lg:justify-start lg:gap-6">
      <span class="text-black font-bold">Issue Date</span>
      <p>{{ issueDate }}</p>
    </div>

    <div class="flex flex-row justify-between lg:justify-start lg:gap-6">
      <span class="text-black font-bold">Due Date</span>
      <p class="text-[#de7728] font-bold">{{ dueDate }}</p>
    </div>

    <div class="flex flex-row justify-between lg:justify-start lg:gap-6">
      <span class="text-black font-bold">Rate Value</span>
      <p class="text-[#de7728] font-bold">{{ rateValue }}</p>
    </div>

    <div class="flex flex-row justify-between lg:justify-start lg:gap-6">
      <span class="text-black font-bold">Nominal Amount</span>
      <p class="text-[#de7728] font-bold">{{ nominalAmount }}</p>
    </div>
  </div>
</template>