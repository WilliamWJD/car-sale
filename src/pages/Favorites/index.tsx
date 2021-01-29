import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Favorites: React.FC = () => {
  return(
    <View style={styles.container}>
      <View style={styles.content}>

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