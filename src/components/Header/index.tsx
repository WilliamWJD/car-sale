import React, { useCallback } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Header: React.FC = () => {
  const navigation = useNavigation();

  const goBack = useCallback(()=>{
    navigation.goBack();
  },[])

  return(
      <View style={styles.container}>
          <TouchableOpacity onPress={goBack}>
            <MaterialIcons name="keyboard-arrow-left" color="#2F3640" size={40}/>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Detalhe</Text>
          <MaterialIcons name="favorite" color="#FF4757" size={25}/>
      </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:70,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:15
  },

  headerTitle:{
    fontFamily:'Ubuntu_700Bold',
    color:'#2F3640',
    fontSize:20
  }
})

export default Header;