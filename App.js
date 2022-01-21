import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import DrawerNavigator from './navigation/DrawerNavigation'

export default function app() {
  return (
    <NavigationContainer>
       <DrawerNavigator />
    </NavigationContainer>
  )

}
