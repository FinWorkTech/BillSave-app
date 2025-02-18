<script setup>

defineOptions({
  name: 'document-item'
});

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  currency: {
    type: String,
    required: true
  },
  dueDate: {
    type: String,
    required: true
  },
  issueDate: {
    type: String,
    required: true
  },
  rateValue: {
    type: Number,
    required: true
  },
  rateType: {
    type: String,
    required: true
  },
  nominalAmount: {
    type: Number,
    required: true
  }
});
</script>

<template>
  <div class="bg-[#DCDCDC] rounded-2xl p-3">
    <div class="flex flex-row py-2 px-4 justify-between">
      <span>{{ id }}</span>
      <span>{{ currency }}</span>
    </div>

    <div class="px-3">
      <div class="w-full h-px bg-gray-400 my-2"></div>
    </div>

    <div class="px-8 py-2 flex flex-col gap-2">
      <span><span class="font-bold">Due date:</span> {{ dueDate }}</span>
      <span><span class="font-bold">Issue date:</span> {{ issueDate }}</span>
      <span><span class="font-bold">Rate value:</span> {{ rateValue }}</span>
      <span><span class="font-bold">Rate type:</span> {{ rateType }}</span>
      <span><span class="font-bold">Nominal amount:</span> {{ nominalAmount }}</span>
    </div>

    <div class="flex flex-row gap-6 justify-center my-2">
      <button class="bg-[#66798a] px-6 py-2 rounded-4xl">
        <span>Edit</span>
      </button>

      <button class="bg-[#66798a] px-6 py-2 rounded-4xl">
        <span>Delete</span>
      </button>
    </div>
  </div>
</template>
