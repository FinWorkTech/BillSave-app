import { defineStore } from "pinia";
import SunatService from '@shared/services/sunat.service.js';

export const useSunatStore = defineStore("sunat", {

  state: () => ({
    salePrice: null,
    date: null,
  }),

  actions: {
    async fetchExchangeRate(date) {

      if (this.date == date) {
        console.log('Using cached exchange rate for date', date);
        return;
      }

      try {
        const exchangeRate = await SunatService.fetchExchangeRate(date);
        this.salePrice = exchangeRate.precioVenta;
        this.date = exchangeRate.fecha;
      }
      catch (err) {
        console.error('Error fetching exchange rate: ', err);
        throw err;
      }
    }
  }
});