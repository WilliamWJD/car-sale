import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';

interface DetailProps {
  id: number,
  model: number,
  imageBack: string;
  title: string;
  price: number;
  note: number;
  year: string;
  km: number;
  cambio: string;
  description: string;
  description2: string;
  images: Array<{
    id: number;
    image: string;
  }>
}

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<DetailProps[]>([])

  const navigation = useNavigation();

  useEffect(() => {
    async function loadFavorites() {
      try {
        const response = await AsyncStorage.getItem('@storage_cars');
        if (response !== null) {
          setFavorites(JSON.parse(response))
        }
      } catch (err) {
        console.log(err.message)
      }
    }

    loadFavorites();
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Header
          headerTitle="Favoritos"
        />
        <ScrollView>
          {favorites.map(item => (
            <TouchableOpacity style={styles.item} key={item.id}
              onPress={() => navigation.navigate('Detail', {
                id: item.id
              })}
            >
              <Image style={styles.itemImage} source={{ uri: item.imageBack }} />
              <View style={styles.description}>
                <Text style={styles.descriptionTitle}>{item.title}</Text>
                <Text style={styles.descriptionPrice}>R$: {item.price}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },

  content: {
    flex: 1,
  },

  item: {
    width: '100%',
    height: 110,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ecebeb',
    paddingHorizontal:10
  },

  itemImage: {
    width: 150,
    height: '100%',
    resizeMode: 'stretch',
    borderRadius: 10,
    marginRight: 10
  },

  description: {},

  descriptionTitle: {
    fontFamily: 'Ubuntu_700Bold',
    color: '#2F3640',
    fontSize: 18,
    marginBottom: 15
  },

  descriptionModel: {},

  descriptionPrice: {
    fontFamily: 'Ubuntu_700Bold',
    fontSize: 15,
    color: '#FF4757',
    marginTop: 5
  }
})

export default Favorites;