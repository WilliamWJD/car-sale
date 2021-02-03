import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface DetailProps{
  id:number,
  model:number,
  imageBack:string;
  title:string;
  price:number;
  note:number;
  year:string;
  km:number;
  cambio:string;
  description:string;
  description2:string;
  images:Array<{
    id:number;
    image:string;
  }>
}

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<DetailProps[]>([])
  
  useEffect(()=>{
    async function loadFavorites(){
      try{
        const response = await AsyncStorage.getItem('@storage_cars');
        if(response !== null){
          setFavorites(JSON.parse(response))
        }
      }catch(err){
        console.log(err.message)
      }
    }

    loadFavorites();
  },[])

  return(
    <View style={styles.container}>
      <View style={styles.content}>
        {favorites.map(item=>(
          <Text key={item.id}>{item.title}</Text>
        ))}
      </View>
    </View>
  )
}

export const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    padding:10
  },

  content:{
    flex:1,
    
  }
})

export default Favorites;