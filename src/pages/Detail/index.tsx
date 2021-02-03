import React, { useCallback, useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { MaterialIcons, Ionicons} from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from '../../components/Header';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import volanteImage from '../../assets/volante.png';
import cdImage from '../../assets/cd.png';
import api from '../../services/api';

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

interface ParamsProps{
  id:number;
}

interface ImagesProps{
  id:number;
  image:string;
}

const Detail: React.FC = () => {
  const [detail, setDetail] = useState<DetailProps>({} as DetailProps)
  const [imageView, setImageView] = useState<ImagesProps>({} as ImagesProps);
  const [favoriteEnabled, setFavoriteEnabled] = useState(false);

  const route = useRoute() ;

  useEffect(()=>{
    async function loadDetail(){
      const params = route.params as ParamsProps;
      const response = await api.get(`/cars/${params.id}`);

      setDetail(response.data)
      setImageView(response.data.images[0])

      // FavoriteAsynStorage
      const favoriteCar = await AsyncStorage.getItem('@storage_cars');
      if(favoriteCar !== null){
        const findCar = JSON.parse(favoriteCar).find((item:DetailProps)=>item.id === response.data.id);
        if(findCar){
          setFavoriteEnabled(true)
        }
      }
    } 

    loadDetail();
  },[favoriteEnabled])

  const selectedImageView = useCallback((image: ImagesProps)=>{
    setImageView(image)
  },[])

  const handleContact = useCallback(()=>{},[])

  const handledFavorite = useCallback( async () =>{
    try{
      const response = await AsyncStorage.getItem('@storage_cars');

      if(response !== null){
        const findCar = JSON.parse(response).find((item:DetailProps)=>item.id === detail.id);

        if(findCar){
          const filterCars = JSON.parse(response).filter((item:DetailProps)=>item.id !== detail.id)
          console.log(filterCars)
          let favoriteStorageJson = [...filterCars]
          await AsyncStorage.setItem('@storage_cars', JSON.stringify(favoriteStorageJson))
          setFavoriteEnabled(false)
        }else{
          let favoriteStorageJson = [...JSON.parse(response), detail]
          await AsyncStorage.setItem('@storage_cars', JSON.stringify(favoriteStorageJson))
          setFavoriteEnabled(true)
        }
      }else{
        await AsyncStorage.setItem('@storage_cars', JSON.stringify([detail]))
      }
    }catch(err){
      console.log(err.message);
    }
  },[detail])

  if(!detail){
    return(
      <Text>Carregando</Text>
    )
  }

  return(
    <View style={styles.container}>
      <Header
        handleFavorite={handledFavorite}
        favoriteEnabled={favoriteEnabled}
      />
      
      <ScrollView
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.carTitle}>
          <Text style={styles.carTitleText}>{detail.title}</Text>
          <View style={styles.carTitleNoteBox}>
            <MaterialIcons name="star-rate" color="#FFA502" size={25}/>
            <Text style={styles.carTitleNoteBoxText}>{detail.note}</Text>
          </View>
        </View>

        <View style={styles.boxImagePrimary}>
          <Image style={styles.boxImagePrimaryImage} source={{ uri: imageView.image }}/>
        
          <ScrollView 
            showsVerticalScrollIndicator={false} 
            horizontal={true} 
            style={styles.boxImages}
          >
            {detail.images?.map(image=>(
              <TouchableOpacity key={image.id} onPress={()=>selectedImageView(image)}>
                <Image 
                  style={[imageView.id === image.id ? styles.boxImagesImageSelected : styles.boxImagesImage]} 
                  source={{ uri:image.image }}
                />
              </TouchableOpacity>
            ))}
          </ScrollView >
        </View>
        
        <View style={styles.boxDetailCar}>
          <View style={styles.boxDetailItem}>
            <Text style={styles.boxDetailItemTitle}>Ano</Text>
            <Text style={styles.boxDetailItemValue}>{detail.year}</Text>
          </View>
          
          <View style={styles.separator}/>

          <View style={styles.boxDetailItem}>
            <Text style={styles.boxDetailItemTitle}>KM</Text>
            <Text style={styles.boxDetailItemValue}>{detail.km}</Text>
          </View>

          <View style={styles.separator}/>

          <View style={styles.boxDetailItem}>
            <Text style={styles.boxDetailItemTitle}>Cambio</Text>
            <Text style={styles.boxDetailItemValue}>{detail.cambio}</Text>
          </View>
        </View>

        <View style={styles.boxDescription}>
          <View style={styles.boxDescription1}>
            <Image style={styles.boxDescription1Image} source={volanteImage}/>
            <Text style={styles.boxDescription1Text}>{detail.description}</Text>
          </View>

          <View style={styles.boxDescription2}>
            <Image style={styles.boxDescription1Image} source={cdImage}/>
            <Text style={styles.boxDescription1Text}>{detail.description2}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.buttonContact}>
          <Ionicons name="logo-whatsapp" color="#fff" size={20}/>
          <Text style={styles.buttonContactText}>Tenho interesse</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },

  carTitle:{
    paddingHorizontal:15,
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:20
  },

  carTitleText:{
    fontFamily:'Ubuntu_700Bold',
    color:'#2F3640',
    fontSize:20
  },

  carTitleNoteBox:{
    flexDirection:"row",
    alignItems:'center'
  },

  carTitleNoteBoxText:{
    fontFamily:'Ubuntu_700Bold',
    color:'#2F3640',
    fontSize:15,
    marginLeft:5
  },

  boxImagePrimary:{
    marginTop:14,
  },

  boxImagePrimaryImage:{
    width:'100%',
    height:148,
  },

  boxImages:{
    marginTop:14,
    flexDirection:'row',
    marginHorizontal:10
  },

  boxImagesImageSelected:{
    width:78,
    height:52,
    marginRight:10,
    borderRadius:5,
    opacity:1
  },

  boxImagesImage:{
    width:78,
    height:52,
    marginRight:10,
    borderRadius:5,
    opacity:0.3
  },

  boxDetailCar:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:27,
  },

  boxDetailItem:{
    alignItems:'center',
    width:100,
    paddingHorizontal:10,
  },

  separator:{
    borderLeftWidth:1,
    borderColor:'#57606F'
  },

  boxDetailItemTitle:{
    fontFamily:'Ubuntu_700Bold',
    color:'#57606F',
  },

  boxDetailItemValue:{
    fontFamily:'Ubuntu_400Regular',
    color:'#57606F',
  },

  boxDescription:{
    paddingHorizontal:15,
    marginTop:29
  },

  boxDescription1:{
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
  },

  boxDescription1Image:{
    
  },

  boxDescription1Text:{
    color:'#444444',
    fontFamily:'Ubuntu_400Regular',
    fontSize:12,
    marginLeft:11,
    flex:1,
  },

  boxDescription2:{
    width:'100%',
    flexDirection:'row',
    alignItems:'center',
    marginTop:20
  },

  buttonContact:{
    width:'90%',
    flexDirection:'row',
    backgroundColor:'#27AE60',
    borderRadius:10,
    height:45,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    marginTop:20,
    marginBottom:10
  },

  buttonContactText:{
    fontFamily:'Ubuntu_700Bold',
    color:'#fff',
    marginLeft:10
  }
})

export default Detail;