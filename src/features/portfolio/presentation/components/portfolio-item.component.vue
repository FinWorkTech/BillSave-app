<script setup>
import { useRouter } from 'vue-router';
import { PortfolioUseCases } from '@features/portfolio/application/portfolio.usecases.js';

const router = useRouter();
const portfolioUseCases = new PortfolioUseCases();

defineOptions({
  name: 'portfolio-item',
});

const props = defineProps({
  portfolioId: {
    type: Number,
    required: true
  },
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
  },
  refreshPortfolios: {
    type: Function,
    required: true
  }
});

const deletePortfolio = async () => {
  await portfolioUseCases.deletePortfolio(props.portfolioId);
  props.refreshPortfolios();
};

</script>

<template>
  <div class="portfolio-item flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 bg-white p-8 rounded-2xl my-4 xl:px-14 transition duration-300 ease-in-out transform hover:bg-gray-100 hover:shadow-lg no-underline">
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

      <router-link :to="`/portfolios/${props.portfolioId}/documents`">
        <button class="view-button rounded-4xl p-3 hover:cursor-pointer">
          <img src="@svg/view.svg" alt="View Logo" class="size-7 "/>
        </button>
      </router-link>

      <router-link :to="`/portfolios/${props.portfolioId}/edit`">
        <button class="edit-button rounded-4xl p-3 hover:cursor-pointer">
          <img src="@svg/edit.svg" alt="Edit Logo" class="size-7 "/>
        </button>
      </router-link>

      <button @click.prevent="deletePortfolio" class="delete-button rounded-4xl p-3 hover:cursor-pointer">
        <img src="@svg/trash.svg" alt="Trash Logo" class="size-7 "/>
      </button>
    </div>
  </div>
</template>

<style scoped>

.delete-button {
  transition: box-shadow 0.2s ease-in-out;
}

.delete-button:hover {
  box-shadow: 0 4px 8px rgba(255, 0, 0, 0.5);
}

.edit-button {
  transition: box-shadow 0.3s ease-in-out;
}

.edit-button:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 255, 0.5);
}

.view-button {
  transition: box-shadow 0.3s ease-in-out;
}

.view-button:hover {
  box-shadow: 0 4px 8px rgba(0, 255, 0, 0.5);
}
</style>