// app/screens/HomeScreen.js

import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Image,
} from 'react-native';
import {
  getTopCryptos,
  getMultiCurrencyPrices,
} from '../services/cryptoApi';

const HomeScreen = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [prices, setPrices] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Creamos la referencia del intervalo
    let intervalId;

    // Función principal para cargar data
    const initData = async () => {
      try {
        setLoading(true);

        // 1. Obtener top 20 criptos
        const data = await getTopCryptos();
        setCryptoData(data);

        // 2. Obtener precios en 5 divisas
        const coinIds = data.map((coin) => coin.id);
        const vsCurrencies = ['usd', 'eur', 'gbp', 'jpy', 'aud'];
        const priceData = await getMultiCurrencyPrices(coinIds, vsCurrencies);
        setPrices(priceData);
      } catch (error) {
        console.error('Error al cargar criptomonedas:', error);
      } finally {
        setLoading(false);
      }
    };

    // Llamada inicial
    initData();

    // Configuramos el intervalo para refrescar cada 30s
    intervalId = setInterval(() => {
      initData();
    }, 30000);

    // Limpieza: al desmontar el componente, limpiamos el intervalo
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, []);

  // Renderizado de cada item de cripto
  const renderCryptoItem = ({ item }) => {
    const coinPrices = prices[item.id] || {}; // Precios para esta cripto

    return (
      <View style={styles.itemContainer}>
        <Text style={styles.cryptoName}>
          {item.name} ({item.symbol.toUpperCase()})
        </Text>
        <View style={styles.priceRow}>
          <Text style={styles.priceText}>USD: {coinPrices.usd ?? 'N/A'}</Text>
          <Text style={styles.priceText}>EUR: {coinPrices.eur ?? 'N/A'}</Text>
          <Text style={styles.priceText}>GBP: {coinPrices.gbp ?? 'N/A'}</Text>
          <Text style={styles.priceText}>JPY: {coinPrices.jpy ?? 'N/A'}</Text>
          <Text style={styles.priceText}>AUD: {coinPrices.aud ?? 'N/A'}</Text>
        </View>
      </View>
    );
  };

  // Pantalla de carga
  if (loading) {
    return (
      <View style={[styles.container, styles.loaderContainer]}>
        <ActivityIndicator size="large" color="#E10600" />
        <Text style={{ marginTop: 10 }}>Cargando datos...</Text>
      </View>
    );
  }

  // Render principal
  return (
    <View style={styles.container}>
      {/* Header con el logo */}
      <View style={styles.header}>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
        />
      </View>

      {/* Lista de criptos */}
      <FlatList
        data={cryptoData}
        keyExtractor={(item) => item.id}
        renderItem={renderCryptoItem}
      />
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Fondo blanco
  },
  loaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#E10600', // Rojo
    alignItems: 'center',
    paddingVertical: 16,
  },
  logo: {
    width: 300,     // Ajusta según tu preferencia
    height: 100,
    resizeMode: 'contain',
  },
  itemContainer: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginTop: 16,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#101820', // Borde oscuro
    elevation: 2, // sombra en Android
  },
  cryptoName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#101820', // Texto principal en negro
    marginBottom: 8,
  },
  priceRow: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceText: {
    color: '#E10600', // Rojo para destacar precios
  },
});

export default HomeScreen;
