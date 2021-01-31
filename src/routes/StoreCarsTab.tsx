import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from '../pages/Dashboard';
import Favorites from '../pages/Favorites';

const { Navigator, Screen } = createBottomTabNavigator();

const StoreCarsTab: React.FC = () => {
    return (
        <Navigator
            tabBarOptions={{
                showLabel:false,
                style: {
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 54,
                },
                tabStyle: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#2980B9'
                },
                iconStyle: {
                    flex: 0,
                    width: 20,
                    height: 20,
                },
                inactiveBackgroundColor: '#fafafc',
                activeBackgroundColor: '#ebebf5',
                inactiveTintColor: '#c1bccc',
                activeTintColor: '#32264d',
            }}
        >
            <Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <MaterialIcons
                                name="home"
                                size={size}
                                color={focused ? '#fff' : color}
                            />
                        );
                    },
                }}
            />

            <Screen
                name="Favorites"
                component={Favorites}
                options={{
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <MaterialIcons
                                name="favorite"
                                size={size}
                                color={focused ? '#fff' : color}
                            />
                        );
                    },
                }}
            />
        </Navigator>
    )
}

export default StoreCarsTab;
