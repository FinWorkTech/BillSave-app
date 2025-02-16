<template>
    <div class="flex justify-center items-center min-h-screen bg-gray-100">
      <form @submit.prevent="savePortfolio" class="bg-white p-6 rounded-lg shadow-md w-96">
        <!-- Campo de Nombre -->
        <div class="mb-4">
          <input type="text" v-model="portfolio.name" required
            class="w-full px-4 py-3 bg-gray-200 rounded-lg text-gray-600 placeholder-gray-500 focus:outline-none"
            placeholder="Nombre portafolio">
        </div>
  
        <!-- Campo de Fecha con Ícono y Placeholder -->
        <div class="mb-4 relative">
          <input type="text"
            :value="portfolio.date ? portfolio.date : 'Dsto. Fecha'" 
            readonly
            class="w-full px-4 py-3 bg-gray-200 rounded-lg text-gray-600 placeholder-gray-500 focus:outline-none cursor-pointer"
            @click="openDatePicker">
          
          <!-- Ícono de calendario -->
          <span class="absolute right-3 top-3 text-gray-500 cursor-pointer" @click="openDatePicker">
            📅
          </span>
  
          <!-- Input de fecha oculto -->
          <input type="date" ref="dateInput" v-model="portfolio.date" class="absolute opacity-0 w-0 h-0">
        </div>
  
        <!-- Botones -->
        <div class="flex justify-center gap-4">
          <button type="submit"
            class="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition">
            Save
          </button>
          <button type="button" @click="cancel"
            class="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition">
            Cancel
          </button>
        </div>
  
        <!-- Mensajes de estado -->
        <p v-if="successMessage" class="text-green-600 text-center mt-4">{{ successMessage }}</p>
        <p v-if="errorMessage" class="text-red-600 text-center mt-4">{{ errorMessage }}</p>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        portfolio: {
          name: '',
          date: ''
        },
        successMessage: '',
        errorMessage: ''
      };
    },
    methods: {
      async savePortfolio() {
        if (!this.portfolio.name || !this.portfolio.date) {
          this.errorMessage = "Todos los campos son obligatorios.";
          return;
        }
        const randomCurrency = Math.random() < 0.5 ? "S/" : "USD"; // 50% de probabilidad para cada moneda
        const randomTcea = (Math.random() * 20).toFixed(2); // Número aleatorio entre 0 y 20 con 2 decimales

        const newPortfolio = {
          name: this.portfolio.name,
          discount_date: this.portfolio.date,
          user_id: 1, // Puedes cambiar esto según el usuario actual
          currency: randomCurrency,
          average_tcea: parseFloat(randomTcea)
        };
  
        try {
          const response = await fetch("http://localhost:3000/portfolios", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newPortfolio)
          });
  
          if (response.ok) {
            this.successMessage = "Portafolio guardado exitosamente.";
            this.portfolio.name = "";
            this.portfolio.date = "";
          } else {
            throw new Error("Error al guardar el portafolio.");
          }
        } catch (error) {
          this.errorMessage = error.message;
        }
  
        setTimeout(() => {
          this.successMessage = "";
          this.errorMessage = "";
        }, 3000);
      },
      cancel() {
        this.portfolio.name = "";
        this.portfolio.date = "";
      },
      openDatePicker() {
        if (this.$refs.dateInput.showPicker) {
          this.$refs.dateInput.showPicker();
        } else {
          this.$refs.dateInput.focus();
        }
      }
    }
  };
  </script>  