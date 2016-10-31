import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

export default class App extends Component {
  render() {
    return (
      <View style={ style.container }>
        <Text style={ style.content }>Hello World!</Text>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212'
  },
  content: {
    fontSize: 14,
    color: '#fcfcfc'
  }
})
