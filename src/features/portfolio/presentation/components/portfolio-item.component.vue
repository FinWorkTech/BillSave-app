<script setup>

defineOptions({
  name: 'portfolio-item',
});

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  assocDocs: {
    type: Number,
    required: true
  },
  tcea: {
    type: Number,
    required: true
  }
});
</script>

<template>
  <div class="portfolio-item flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 bg-white p-8 rounded-2xl my-4 xl:px-14 transition duration-300 ease-in-out transform hover:bg-gray-100 hover:shadow-lg hover:cursor-pointer">
    
    <div class="flex flex-row justify-between lg:justify-start lg:gap-6">
      <span class="text-black font-bold">Name</span>
      <p>{{ name }}</p>
    </div>

    <div class="flex flex-row justify-between lg:justify-start lg:gap-6">
      <span class="text-black font-bold">Dsto. Date</span>
      <p>{{ date }}</p>
    </div>

    <div class="flex flex-row justify-between lg:justify-start lg:gap-6">
      <span class="text-black font-bold">Assoc. Docs</span>
      <p class="text-[#de7728] font-bold">{{ assocDocs }}</p>
    </div>

    <div class="flex flex-row justify-between lg:justify-start lg:gap-6">
      <span class="text-black font-bold">TCEA</span>
      <p class="text-[#de7728] font-bold">{{ tcea }}</p>
    </div>

    <div class="flex flex-row justify-evenly lg:gap-8 mt-4 lg:-mt-0.5">
      <img src="@svg/view.svg" alt="View Logo" class="size-9"/>
      <img src="@svg/edit.svg" alt="Edit Logo" class="size-7"/>
      <img src="@svg/trash.svg" alt="Trash Logo" class="size-7"/>
    </div>
  </div>
</template>

<style scoped>
/* No additional styles needed */
</style>