<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const items = ref([]); // portafolios
const searchText = ref(""); 

// Portafolios guardados
onMounted(() => {
  const savedItems = JSON.parse(localStorage.getItem("portfolios")) || [];
  items.value = savedItems;
});

//filtrar la lista de busqueda
const filteredItems = computed(() => {
  return items.value.filter((item) =>
    item.name.toLowerCase().includes(searchText.value.toLowerCase())
  );
});

// Para eliminar un portafolio
const deletePortfolio = (index) => {
  if (confirm("¿Estás seguro de que quieres eliminar este portafolio?")) {
    items.value.splice(index, 1);
    localStorage.setItem("portfolios", JSON.stringify(items.value));
  }
};

// editor de un portafolio
const editPortfolio = (index) => {
  localStorage.setItem("editingPortfolio", JSON.stringify(items.value[index]));
  localStorage.setItem("editingIndex", index);
  router.push("/portafolio-form");
};

const goToForm = () => {
  router.push("/portafolio-form");
};
</script>

<template>
  <div class="flex justify-between items-center px-40 mt-35">
    <button 
      @click="goToForm" 
      class="px-10 py-4 text-[25px] cursor-pointer bg-gray-500 text-white rounded-full active:bg-gray-700">
      Crear
    </button>

    <!-- Barra de busqueda -->
    <div class="flex items-center space-x-5">
      <div class="flex items-center border border-gray-500 rounded-full px-4 py-4 w-[250px]">
        <input
          type="text"
          v-model="searchText"
          class="outline-none bg-transparent flex-1 text-gray-700 placeholder-gray-500 text-[20px]"
          placeholder="Busca"
        />
      </div>
      <button class="flex items-center justify-center text-[30px] cursor-pointer w-15 h-15 no-border border-gray-500 rounded-full hover:bg-gray-200">
        🔍
      </button>
    </div>
  </div>

  <!-- linea para separar el boton crear con la busqueda -->
  <hr class="border-gray-500 mx-35 mt-10 mb-3" />

  <div v-if="filteredItems.length > 0" class="bg-gray-400 rounded-2xl mx-25 flex flex-col items-center p-4 gap-y-4">
    <div v-for="(item, index) in filteredItems" :key="index" class="bg-white w-[90%] rounded-xl p-4 shadow-lg">
      <div class="flex items-center justify-between w-full py-3 text-center">
        
        <div class="flex w-1/4 items-center justify-center gap-x-2">
          <span class="font-bold text-xl">Name:</span>
          <span class="text-lg">{{ item.name }}</span>
        </div>

        <div class="flex w-1/4 items-center justify-center gap-x-2">
          <span class="font-bold text-xl">Dsto. Date:</span>
          <span class="text-lg">{{ item.date }}</span>
        </div>

        <div class="flex w-1/4 items-center justify-center gap-x-2">
          <span class="font-bold text-xl">Assoc. Docs</span>
        </div>

        <div class="flex w-1/4 items-center justify-center gap-x-5">
          <span class="text-orange-500 text-[24px]">0</span>
          <span class="font-bold text-xl">TCEA</span>
          <span class="text-orange-500 text-[24px]">0</span>
        </div>

        <div class="flex w-1/4 justify-center gap-x-4">
          <button class="text-[24px]">👁️</button>
          <button @click="editPortfolio(index)" class="text-[24px] cursor-pointer">✏️</button>
          <button @click="deletePortfolio(index)" class="text-[24px] cursor-pointer">🗑️</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Si no hay ningun portfolio con ese nombre -->
  <div v-else class="text-center text-gray-600 text-xl mt-5">
    No se encontraron resultados.
  </div>
</template>
