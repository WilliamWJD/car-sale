import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Home from '../pages/Home';
import StoreCarsTab from './StoreCarsTab';


const Routes:React.FC = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown:false
                }}
            >
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="StoreCarsTab" component={StoreCarsTab}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;