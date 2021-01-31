import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';

import toyotaImage from '../../assets/toyota.png';
import hyundaiImage from '../../assets/hyundai.png';
import hondaImage from '../../assets/honda.png';
import bmwImage from '../../assets/bmw.png';

import corollaImage from '../../assets/corolla.png';

const Dashboard: React.FC = () => {
  return(
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.searchCar}>
          <Text style={styles.searchCarTitle}>Encontre o seu veículo</Text>
          <View style={styles.searchCarBox}>
            <MaterialIcons name="search" color="#BDC3C7" size={20}/>
            <TextInput 
              placeholder="Digite o modelo do veículo" 
              style={styles.searchCarBoxInput}
              placeholderTextColor="#BDC3C7"
            />
          </View>
        </View>
      
        <View style={styles.modelCar}>
          <ScrollView 
            style={styles.modelCarContent}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.modelCarItem}>
              <Image source={toyotaImage}/>
            </View>

            <View style={styles.modelCarItem}>
              <Image source={hyundaiImage}/>
            </View>

            <View style={styles.modelCarItem}>
              <Image source={hondaImage}/>
            </View>

            <View style={styles.modelCarItem}>
              <Image source={bmwImage}/>
            </View>
          </ScrollView>
        </View>
      
        <ScrollView 
          style={styles.cars}
          showsVerticalScrollIndicator={false}
        >
          <TouchableOpacity style={styles.carsItem}>
            <Image source={corollaImage} style={styles.carsItemImage}/>

            <View style={styles.carItemBoxDescription}>
              <View style={styles.carsItemDescription}>
                <Text style={styles.carsItemDescriptionTitle}>Toyota Corolla 2020</Text>
                <Text style={styles.carsItemDescriptionPrice}>R$: 75.800,00</Text>
              </View>

              <View style={styles.carsItemNoteBox}>
                <MaterialIcons name='star-rate' color='#FFA502' size={23}/>
                <Text style={styles.carsItemNoteBoxValue}>4,5</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.carsItem}>
            <Image source={corollaImage} style={styles.carsItemImage}/>

            <View style={styles.carItemBoxDescription}>
              <View style={styles.carsItemDescription}>
                <Text style={styles.carsItemDescriptionTitle}>Toyota Corolla 2020</Text>
                <Text style={styles.carsItemDescriptionPrice}>R$: 75.800,00</Text>
              </View>

              <View style={styles.carsItemNoteBox}>
                <MaterialIcons name='star-rate' color='#FFA502' size={23}/>
                <Text style={styles.carsItemNoteBoxValue}>4,5</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.carsItem}>
            <Image source={corollaImage} style={styles.carsItemImage}/>

            <View style={styles.carItemBoxDescription}>
              <View style={styles.carsItemDescription}>
                <Text style={styles.carsItemDescriptionTitle}>Toyota Corolla 2020</Text>
                <Text style={styles.carsItemDescriptionPrice}>R$: 75.800,00</Text>
              </View>

              <View style={styles.carsItemNoteBox}>
                <MaterialIcons name='star-rate' color='#FFA502' size={23}/>
                <Text style={styles.carsItemNoteBoxValue}>4,5</Text>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  )
}

export const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    padding:20
  },

  content:{
    flex:1
  },

  searchCar:{
    marginTop:50,
  },

  searchCarTitle:{
    fontFamily:'Ubuntu_700Bold',
    color:'#2F3640',
    fontSize:20,
    marginBottom:15
  },

  searchCarBox:{
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#f1f1f1',
    paddingHorizontal:15,
    paddingVertical:10,
    borderRadius:10,
    borderWidth:1,
    borderColor:'#DBDEE0',
    fontFamily:'Ubuntu_400Regular',
  },

  searchCarBoxInput:{
    flex:1,
    marginLeft:10
  },

  modelCar:{
    marginTop:29
  },

  modelCarContent:{},
  
  modelCarItem:{
    borderWidth:1,
    borderColor:'#2980B9',
    padding:15,
    borderRadius:10,
    marginRight:10,
  },

  cars:{
    flex:1,
    marginTop:25,
  },

  carsItem:{
    height:203,
    marginBottom:20
  },

  carsItemImage:{
    width:'100%',
    resizeMode:'stretch',
    height:143,
  },

  carItemBoxDescription:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:12
  },

  carsItemDescription:{},

  carsItemDescriptionTitle:{
    fontFamily:'Ubuntu_700Bold',
    fontSize:18,
    color:'#2F3542'
  },

  carsItemDescriptionPrice:{
    fontFamily:'Ubuntu_700Bold',
    fontSize:15,
    color:'#FF4757',
    marginTop:5
  },

  carsItemNoteBox:{
    flexDirection:'row',
    alignItems:'center'
  },

  carsItemNoteBoxValue:{
    fontFamily:'Ubuntu_700Bold',
    fontSize:15,
    color:'#2F3542',
    marginLeft:5
  }
  
})

export default Dashboard;