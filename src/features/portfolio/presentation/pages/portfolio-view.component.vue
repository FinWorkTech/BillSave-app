<script setup>
import SearchInput from '../../../../shared/components/search.component.vue'
import PortfolioItem from '../components/portfolio-item.component.vue';

defineOptions({
  name: 'portfolio-view',
});

</script>

<template>
  <div class="px-4 py-8 flex flex-col gap-4 lg:mt-10">

    <div class="flex flex-col lg:flex-row lg:justify-between lg:px-4 gap-4">
      
      <router-link to="/portfolios/create" class="w-full lg:w-[300px] bg-[#66798a] block px-4 py-2 rounded-4xl text-white text-center">
        <span>Create</span>
      </router-link>

      <search-input placeholder="Search portfolios..." class="lg:max-w-[500px]"/>
    </div>

    <div class="bg-[#afb6bd] max-h-[calc(100vh-10rem)] rounded-lg py-4 px-6 overflow-y-auto">

      <portfolio-item name="new_name" date="15/07/2025" assoc-docs="0" tcea="0"/>

      <portfolio-item name="new_name" date="15/07/2025" assoc-docs="0" tcea="0"/>

      <portfolio-item name="new_name" date="15/07/2025" assoc-docs="0" tcea="0"/>

    </div>

  </div>
</template>

<style scoped>

</style>