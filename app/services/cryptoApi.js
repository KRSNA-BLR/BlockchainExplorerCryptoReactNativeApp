// app/services/cryptoApi.js
import axios from 'axios';

// URL base de CoinGecko
const BASE_URL = 'https://api.coingecko.com/api/v3';

/**
 * Obtiene la lista de las 20 criptomonedas top (por market cap) 
 * en USD. Retorna un arreglo con información de cada cripto.
 */
export const getTopCryptos = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/coins/markets`, {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 20,
        page: 1,
        sparkline: false,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error en getTopCryptos:', error);
    throw error;
  }
};

/**
 * Obtiene el precio de un conjunto de criptos en varias divisas a la vez.
 * @param {string[]} coinIds - Array de IDs de las criptos (ej: ['bitcoin', 'ethereum']).
 * @param {string[]} vsCurrencies - Array de divisas (ej: ['usd','eur','gbp']).
 */
export const getMultiCurrencyPrices = async (coinIds = [], vsCurrencies = []) => {
  try {
    const response = await axios.get(`${BASE_URL}/simple/price`, {
      params: {
        ids: coinIds.join(','),            // 'bitcoin,ethereum,dogecoin'
        vs_currencies: vsCurrencies.join(','), // 'usd,eur,gbp,jpy,aud'
      },
    });
    // Devuelve un objeto { bitcoin: { usd: 20000, eur: 19000, ...}, ethereum: {...}, ... }
    return response.data;
  } catch (error) {
    console.error('Error en getMultiCurrencyPrices:', error);
    throw error;
  }
};
