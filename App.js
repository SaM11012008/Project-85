import React, { Component } from 'react'
import Profile from './screens/Profile'
import CreatePost from './screens/CreatePost'
import Feed from './screens/Feed'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator()

export default function app() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            var iconName
            if (route.name === 'Feed') {
              iconName = focused ? "book" : "book-outline"
            } else if (route.name === 'CreatePost') {
              iconName = focused ? "create" : "create-outline"
            }
            return <Ionicons name={iconName} size={size} color={color} />
          }
        })}

        tabBarOptions={{ activeTintColor: "tomato", activeTintColor: "gray" }}>

        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="CreateStory" component={CreatePost} />

      </Tab.Navigator>

    </NavigationContainer>
  )

}
