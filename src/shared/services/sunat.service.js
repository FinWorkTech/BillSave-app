import axios from 'axios';

const http = axios.create({
    baseURL: '/api/sunat',

    headers: {
      Accept: 'application/json',
    }
});

class SunatService {

  static async fetchExchangeRate(date) {

    try {

      const token = import.meta.env.VITE_SUNAT_API_TOKEN;

      if (!token) {
        throw new Error('Authentication token is not defined');
      }

      const response = await http.get('/tipo-cambio', {
        params: { date },
        
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      return response.data;
    }
    catch(err) {
      console.error('Error fetching exchange rate: ', err);
      throw err;
    }
  }
};

export default SunatService;