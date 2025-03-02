import { defineStore } from "pinia";
import SunatService from '@shared/services/sunat.service.js';

const LS_SUNAT_KEY = "sunat_exchange_rate";

export const useSunatStore = defineStore("sunat", {

  state: () => ({
    salePrice: null,
    date: null,
  }),

  actions: {
    async fetchExchangeRate(date) {

      const cachedData = JSON.parse(localStorage.getItem(LS_SUNAT_KEY));

      if (cachedData && cachedData.date === date) {
        console.log('Using cached exchange rate for date', date);
        this.salePrice = cachedData.salePrice;
        this.date = cachedData.date;
        return;
      }

      try {
        const exchangeRate = await SunatService.fetchExchangeRate(date);
        this.salePrice = exchangeRate.precioVenta;
        this.date = exchangeRate.fecha;

        localStorage.setItem(LS_SUNAT_KEY, JSON.stringify({
          salePrice: exchangeRate.precioVenta,
          date: exchangeRate.fecha
        }));
      }
      catch (err) {
        console.error('Error fetching exchange rate: ', err);
        throw err;
      }
    },

    loadExchangeRateFromStorage() {
      const cachedData = JSON.parse(localStorage.getItem(LS_SUNAT_KEY));
      
      if (cachedData) {
        this.salePrice = cachedData.salePrice;
        this.date = cachedData.date;
      }
    }
  }
});