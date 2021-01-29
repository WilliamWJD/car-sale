import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';


const Routes:React.FC = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown:false
                }}
            >
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Dashboard" component={Dashboard}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;