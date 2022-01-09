import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Profile from './screens/Profile'
import CreatePost from './screens/CreatePost'
import Feed from './screens/Feed'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Mam , what do we have to write in App.js ? </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})