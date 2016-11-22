import React, { Component } from 'react'
import {
  Text,
  View,
  Platform,
  UIManager
} from 'react-native'
import style from './style'

import Header from './header'
import CoverList from './cover-list'
import Gesture from './gesture'
import Footer from './footer'

export default class App extends Component {
  constructor() {
    super()

    // Enable LayoutAnimation under Android
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true)
    }
  }

  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#121212'
      }}>
        <View style={{
          flex: 1,
          justifyContent: 'space-between',
          alignItems: 'stretch'
        }}>
          <Header />
          <CoverList />
          <Gesture />
          <Footer />
        </View>
      </View>
    )
  }
}
