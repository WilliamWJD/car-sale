import React, { useCallback, useEffect, useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { View, Text, StyleSheet, Image, ImageProps } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import api from '../../services/api';

import toyotaImage from '../../assets/toyota.png';
import hyundaiImage from '../../assets/hyundai.png';
import hondaImage from '../../assets/honda.png';
import bmwImage from '../../assets/bmw.png';

import corollaImage from '../../assets/corolla.png';

interface modelsCars {
  id: number,
  image: ImageProps,
  selected: boolean,
}

interface CarsProps {
  id: number,
  imageBack: string,
  title: string;
  price: number,
  note: number
}

const Dashboard: React.FC = () => {
  const [modelCarSelected, setModelCarSelected] = useState<modelsCars[]>([
    {
      id: 1,
      image: toyotaImage,
      selected: false
    },
    {
      id: 2,
      image: hyundaiImage,
      selected: false
    }
  ]);
  const [cars, setCars] = useState<CarsProps[]>([]);
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    async function loadCars() {
      const response = await api.get('/cars');
      setCars(response.data)
    }
    loadCars();
  }, [])

  const handledSelectedModelCar = useCallback((id: number) => {
    const modelCarNewList = modelCarSelected.map((item) => item.id === id ? { ...item, selected: true } : { ...item, selected: false })
    setModelCarSelected(modelCarNewList)
  }, [])

  const handleEnabledFilter = useCallback(() => {
    setShowFilter(!showFilter)
  }, [showFilter])

  return (
    <View style={styles.container}>
      <View style={styles.content}>

        <View style={styles.searchCar}>
          <Text style={styles.searchCarTitle}>Encontre o seu veículo</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={styles.searchCarBox}>
              <MaterialIcons name="search" color="#BDC3C7" size={20} />
              <TextInput
                placeholder="Digite o modelo do veículo"
                style={styles.searchCarBoxInput}
                placeholderTextColor="#BDC3C7"
              />
            </View>
            <TouchableOpacity
              onPress={handleEnabledFilter}
              style={[
                showFilter ?
                {
                  borderWidth: 1,
                  borderColor: '#fff',
                  borderRadius: 5,
                  padding: 7,
                  marginLeft: 10,
                  backgroundColor:'#2980B9'
                }
                :
                {
                  borderWidth: 1,
                  borderColor: '#BDC3C7',
                  borderRadius: 5,
                  padding: 7,
                  marginLeft: 10
                }
              ]}
            >
              <MaterialIcons
                name="filter-alt"
                color={showFilter ? "#fff" : "#BDC3C7"}
                size={30}
              />
            </TouchableOpacity>
          </View>
        </View>


        <View style={[showFilter ? styles.modelCar : { display: 'none' }]}>
          <ScrollView
            style={styles.modelCarContent}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {modelCarSelected.map(item => (
              <TouchableOpacity
                key={item.id}
                onPress={() => handledSelectedModelCar(item.id)}
                style={item.selected ? styles.modelCarItemSelected : styles.modelCarItem}
              >
                <Image source={item.image} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>


        <ScrollView
          style={styles.cars}
          showsVerticalScrollIndicator={false}
        >
          {cars.map(car => (
            <TouchableOpacity style={styles.carsItem} key={car.id}>
              <Image source={{ uri: car.imageBack }} style={styles.carsItemImage} />

              <View style={styles.carItemBoxDescription}>
                <View style={styles.carsItemDescription}>
                  <Text style={styles.carsItemDescriptionTitle}>{car.title}</Text>
                  <Text style={styles.carsItemDescriptionPrice}>R$: {car.price}</Text>
                </View>

                <View style={styles.carsItemNoteBox}>
                  <MaterialIcons name='star-rate' color='#FFA502' size={23} />
                  <Text style={styles.carsItemNoteBoxValue}>{car.note}</Text>
                </View>
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
    padding: 20
  },

  content: {
    flex: 1
  },

  searchCar: {
  },

  searchCarTitle: {
    fontFamily: 'Ubuntu_700Bold',
    color: '#2F3640',
    fontSize: 20,
    marginBottom: 15
  },

  searchCarBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DBDEE0',
    fontFamily: 'Ubuntu_400Regular',
  },

  searchCarBoxInput: {
    flex: 1,
    marginLeft: 10
  },

  modelCar: {
    marginTop: 29
  },

  modelCarContent: {},

  modelCarItem: {
    width: 100,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginRight: 10,
  },

  modelCarItemSelected: {
    borderWidth: 1,
    borderColor: '#2980B9',
    borderRadius: 10,
    marginRight: 10,
    width: 100,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center'
  },

  cars: {
    flex: 1,
    marginTop: 25,
  },

  carsItem: {
    height: 280,
    marginBottom: 20
  },

  carsItemImage: {
    resizeMode: 'stretch',
    height: 200,
    borderRadius: 10
  },

  carItemBoxDescription: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 12
  },

  carsItemDescription: {},

  carsItemDescriptionTitle: {
    fontFamily: 'Ubuntu_700Bold',
    fontSize: 18,
    color: '#2F3542'
  },

  carsItemDescriptionPrice: {
    fontFamily: 'Ubuntu_700Bold',
    fontSize: 15,
    color: '#FF4757',
    marginTop: 5
  },

  carsItemNoteBox: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  carsItemNoteBoxValue: {
    fontFamily: 'Ubuntu_700Bold',
    fontSize: 15,
    color: '#2F3542',
    marginLeft: 5
  }

})

export default Dashboard;