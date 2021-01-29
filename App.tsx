import React from 'react';
import { StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Ubuntu_400Regular, Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';

import Routes from './src/routes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Ubuntu_400Regular, 
    Ubuntu_700Bold
  })

  if(!fontsLoaded){
    return(
      <AppLoading/>
    )
  }

  return (
    <>
      <StatusBar/>
      <Routes/>
    </>
  );
}

