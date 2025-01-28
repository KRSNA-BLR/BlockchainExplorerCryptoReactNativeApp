import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import HomeScreen from './app/screens/HomeScreen'; 
// Ojo a la ruta: si 'screens' está dentro de 'app', 
// y App.tsx está en la raíz, entonces './app/screens/...'

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <HomeScreen />
    </SafeAreaView>
  );
};

export default App;
