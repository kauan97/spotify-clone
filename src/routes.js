import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { StyleSheet, TouchableOpacity, View, Text, StatusBar } from 'react-native'
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons'

// StatusBar.setBackgroundColor('')

function MyTabBar({ state, descriptors, navigation }) {
    return (
      <View style={ styles.container }>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key]
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name
  
          const isFocused = state.index === index

          const getIcon = () => {
              switch (route.name) {
                case 'Início':
                    return (<MaterialCommunityIcons name="home-outline" color={isFocused ? '#fff' : '#a1a1a1'} size={25} />)
                case 'Buscar':
                    return (<Feather name="search" color={isFocused ? '#fff' : '#a1a1a1'} size={25} />)
                case 'Sua Biblioteca':
                    return (<MaterialCommunityIcons name="library-music" color={isFocused ? '#fff' : '#a1a1a1'} size={25} />)
              }
          }
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            })
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name)
            }
          }
  
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            })
          }
  
          return (
            <View key={ route.name } style={ styles.tabContainer }>
                <TouchableOpacity
                    accessibilityRole="button"
                    accessibilityStates={isFocused ? ['selected'] : []}
                    accessibilityLabel={options.tabBarAccessibilityLabel}
                    testID={options.tabBarTestID}
                    onPress={onPress}
                    onLongPress={onLongPress}
                    style={ styles.tabButton }
                    >
                    <View style={ styles.iconContainer }>
                        { getIcon() }
                        <Text style={[styles.tabText, { color: isFocused ? '#fff' : '#a1a1a1' }]}>
                            {label}
                        </Text>
                    </View>
                    </TouchableOpacity>    
            </View>
            
          )
        })}
      </View>
    )
  }

import Home from './pages/Home'
import Login from './pages/Login'
import Main from './pages/Main'

const Tab = createBottomTabNavigator()

export default function Routes() {
    return (
        <NavigationContainer>
            <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
                <Tab.Screen name="Início" component={ Main } />
                <Tab.Screen name="Buscar" component={ Home } />
                <Tab.Screen name="Sua Biblioteca" component={ Login } />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: { 
        flexDirection: 'row' 
    },
    tabContainer: { 
        flex: 1, 
        backgroundColor: '#282828' 
    },
    tabButton: { 
        width:'auto', 
        alignSelf: 'center' 
    },
    iconContainer: { 
        alignItems: 'center', 
        paddingTop: 8 
    },
    tabText: { 
        fontSize: 10, 
        paddingVertical: 3 
    }


})


