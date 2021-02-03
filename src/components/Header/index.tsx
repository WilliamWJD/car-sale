import React, { useCallback } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface HeaderProps{
  handleFavorite():void;
  favoriteEnabled?:boolean;
}

const Header: React.FC<HeaderProps> = ({ handleFavorite, favoriteEnabled }) => {
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
          <TouchableOpacity onPress={handleFavorite}>
            <MaterialIcons name="favorite" color={favoriteEnabled ? "#FF4757" : "#ccc"} size={25}/>
          </TouchableOpacity>
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