<script setup>

</script>

<template>
  <div class="container min-w-full flex flex-col lg:flex-row lg:h-[calc(100vh-4rem)]">

    <div class="left flex flex-col p-4 items-center md:items-end lg:items-start bg-[#f5f5f5] w-full lg:w-[35%]">

      <div class="text-white flex flex-row lg:flex-col gap-4 md:gap-8 text-center w-full 
        lg:h-full justify-center md:justify-end lg:justify-center lg:items-center">

        <h1 class="hidden lg:block text-black text-4xl -mt-30 mb-15">Welcome Ana</h1>

        
        <router-link to="/create-portfolio" class="inline-block px-8 py-4 lg:px-14 lg:py-8 bg-[#051320] rounded-2xl lg:max-w-xs">
          <span class="text-md md:text-xl">
            New Portfolio
          </span>
        </router-link>
        
        <a href="#" class="inline-block px-8 py-4 lg:px-14 lg:py-8 bg-[#051320] rounded-2xl lg:max-w-xs">
          <span class="text-md md:text-xl">
            Generate Report
          </span>
        </a>

      </div>

      <div class="w-full h-px bg-gray-300 my-4 lg:hidden"></div>
    </div>

    <div class="right w-full p-x-4 py-6 lg:py-15 flex flex-col gap-8 items-center justify-center md:flex-row flex-wrap">

      <div class="flex flex-col gap-4 text-center justify-center border border-gray-300 
        shadow-lg p-8 rounded-lg w-full md:w-[280px] lg:w-[350px] md:h-[230px] lg:h-[300px] text-xl lg:text-2xl">
        <span>Active Portfolios</span>
        <span class="text-[#de7728]">0</span>
      </div>

      <div class="flex flex-col gap-3 text-center justify-center border border-gray-300 
        shadow-lg p-8 rounded-lg w-full md:w-[250px] lg:w-[350px] md:h-[230px] lg:h-[300px] text-xl lg:text-2xl">
        <span>Total Documents</span>
        <span>(bills/invoices)</span>
        <span class="text-[#de7728]">0</span>
      </div>

      <div class="flex flex-col gap-4 text-center justify-center border border-gray-300 
        shadow-lg p-8 rounded-lg w-full md:w-[250px] lg:w-[350px] md:h-[230px] lg:h-[300px] text-xl lg:text-2xl">
        <span>Average TCEA of portfolios</span>
        <span class="text-[#de7728]">0</span>
      </div>

    </div>

  </div>
</template>

<style scoped>

</style>