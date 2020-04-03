import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './pages/Home'
import Login from './pages/Login'
import Main from './pages/Main'

AppStack = createStackNavigator()

export default function Routes() {
    return (
        <NavigationContainer>

            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name="Main" component={ Main } />
                <AppStack.Screen name="Home" component={ Home } />
                <AppStack.Screen name="Login" component={ Login } />
            </AppStack.Navigator>

        </NavigationContainer>
    )
}
