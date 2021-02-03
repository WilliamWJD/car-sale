import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { MaterialIcons, Ionicons} from '@expo/vector-icons';

import Header from '../../components/Header';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import volanteImage from '../../assets/volante.png';
import cdImage from '../../assets/cd.png';

const Detail: React.FC = () => {

  return(
    <View style={styles.container}>
      <Header/>
      
      <ScrollView
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.carTitle}>
          <Text style={styles.carTitleText}>Toyota SW4 2021</Text>
          <View style={styles.carTitleNoteBox}>
            <MaterialIcons name="star-rate" color="#FFA502" size={25}/>
            <Text style={styles.carTitleNoteBoxText}>5,0</Text>
          </View>
        </View>

        <View style={styles.boxImagePrimary}>
          <Image style={styles.boxImagePrimaryImage} source={{ uri:'https://revistacarro.com.br/wp-content/uploads/2020/11/toyota-sw4-2021-srx-2.jpg' }}/>
        
          <View style={styles.boxImages}>
            <Image style={styles.boxImagesImage} source={{ uri:'https://www.autossegredos.com.br/wp-content/uploads/2020/11/toyota-sw4-2021-1.jpg' }}/>
            <Image style={styles.boxImagesImage} source={{ uri:'https://www.autossegredos.com.br/wp-content/uploads/2020/11/toyota-sw4-2021-1.jpg' }}/>
            <Image style={styles.boxImagesImage} source={{ uri:'https://www.autossegredos.com.br/wp-content/uploads/2020/11/toyota-sw4-2021-1.jpg' }}/>
            <Image style={styles.boxImagesImage} source={{ uri:'https://www.autossegredos.com.br/wp-content/uploads/2020/11/toyota-sw4-2021-1.jpg' }}/>
          </View>
        </View>
        
        <View style={styles.boxDetailCar}>
          <View style={styles.boxDetailItem}>
            <Text style={styles.boxDetailItemTitle}>Ano</Text>
            <Text style={styles.boxDetailItemValue}>2020/2021</Text>
          </View>
          
          <View style={styles.separator}/>

          <View style={styles.boxDetailItem}>
            <Text style={styles.boxDetailItemTitle}>KM</Text>
            <Text style={styles.boxDetailItemValue}>250</Text>
          </View>

          <View style={styles.separator}/>

          <View style={styles.boxDetailItem}>
            <Text style={styles.boxDetailItemTitle}>Cambio</Text>
            <Text style={styles.boxDetailItemValue}>Automático</Text>
          </View>
        </View>

        <View style={styles.boxDescription}>
          <View style={styles.boxDescription1}>
            <Image style={styles.boxDescription1Image} source={volanteImage}/>
            <Text style={styles.boxDescription1Text}>ar-condicionado, direção hidráulica, travas elétricas, retrovisores elétricos, câmbio automático, piloto automático, direção elétrica, volante com regulagem de altura</Text>
          </View>

          <View style={styles.boxDescription2}>
            <Image style={styles.boxDescription1Image} source={cdImage}/>
            <Text style={styles.boxDescription1Text}> Kit Multimídia, entrada USB, rádio FM/AM</Text>
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
  },

  boxImagesImage:{
    width:78,
    height:52,
    marginRight:10,
    borderRadius:5,
    opacity:0.6
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