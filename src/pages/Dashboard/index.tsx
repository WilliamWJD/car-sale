import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Dashboard: React.FC = () => {
  return(
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>Dashboard</Text>
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

export default Dashboard;