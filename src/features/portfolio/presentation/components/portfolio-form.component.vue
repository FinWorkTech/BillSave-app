<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const name = ref("");
const date = ref("");
const isEditing = ref(false);
const editingIndex = ref(null);

onMounted(() => {
  const editingPortfolio = JSON.parse(localStorage.getItem("editingPortfolio"));
  const index = localStorage.getItem("editingIndex");

  if (editingPortfolio) {
    name.value = editingPortfolio.name;
    date.value = editingPortfolio.date;
    isEditing.value = true;
    editingIndex.value = index ? parseInt(index) : null;
  }
});

const savePortfolio = () => {
  if (name.value && date.value) {
    const newPortfolio = { name: name.value, date: date.value };
    let existingPortfolios = JSON.parse(localStorage.getItem("portfolios")) || [];

    if (isEditing.value && editingIndex.value != null) {
      existingPortfolios[editingIndex.value] = newPortfolio;
    } else {
      existingPortfolios.push(newPortfolio);
    }

    localStorage.setItem("portfolios", JSON.stringify(existingPortfolios));

    localStorage.removeItem("editingPortfolio");
    localStorage.removeItem("editingIndex");

    router.push("/portafolio-list-view");
  }
};

const cancel = () => {
  localStorage.removeItem("editingPortfolio");
  localStorage.removeItem("editingIndex");
  router.push("/portafolio-list-view");
};
</script>

<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <div class="bg-white p-6 rounded-xl shadow-md w-96">
      <h2 class="text-2xl font-bold mb-4 text-center">
        {{ isEditing ? "Editar Portafolio" : "Crear Portafolio" }}
      </h2>

      <label class="block mb-2">Nombre:</label>
      <input type="text" v-model="name" class="w-full p-2 border rounded-md mb-4" />

      <label class="block mb-2">Fecha:</label>
      <input type="date" v-model="date" class="w-full p-2 border rounded-md mb-4" />

      <div class="flex justify-between">
        <button @click="cancel" class="bg-gray-500 text-white px-4 py-2 rounded cursor-pointer">Cancelar</button>
        <button @click="savePortfolio" class="bg-green-500 text-white px-4 py-2 rounded cursor-pointer">
          {{ isEditing ? "Actualizar" : "Guardar" }}
        </button>
      </div>
    </div>
  </div>
</template>
