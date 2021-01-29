import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';

import imgBackHome from '../../assets/car-home.png';
import { useNavigation } from '@react-navigation/native';

const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Conheça o novo Corolla 2020</Text>
        <Text style={styles.description}>O carro que irá proporcionar conforto e segurança para você e toda a sua família</Text>
        <Image source={imgBackHome} style={styles.image}/>
        <View style={styles.nextButtonContent}>
          <TouchableOpacity style={styles.nextButton} onPress={()=>navigation.navigate('Dashboard')}>
            <MaterialIcons name="skip-next" color="#fff" size={25}/>
          </TouchableOpacity>
          <Text style={styles.nextButtonText}>Visite nossa lója</Text>
        </View>
      </View>
    </View>
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2980B9',
    padding:20,
  },

  content:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  title:{
    fontFamily:'Ubuntu_700Bold',
    color:'#fff',
    fontSize:25,
    width:192,
    alignSelf:'flex-start',
    marginBottom:16
  },

  description:{
    fontSize:14,
    color:'#ECF0F1',
    fontFamily:'Ubuntu_400Regular',
    marginBottom:20
  },

  image:{
    width:'100%',
    resizeMode:'contain'
  },

  nextButtonContent:{
    width:'100%',
    height:60,
    alignItems:'center',
    flexDirection:'row',
    backgroundColor:'#3498DB',
    borderRadius:20,
    padding:10,
  },

  nextButton:{
    backgroundColor:'#2980B9',
    height:'100%',
    width:60,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center'
  },
  
  nextButtonText:{
    flex:1,
    fontFamily:'Ubuntu_700Bold',
    fontSize:16,
    color:'#fff',
    textAlign:'center'
  }
});

export default Home;