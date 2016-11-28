import React, { Component } from 'react'
import {
  Text,
  View,
  Platform,
  UIManager
} from 'react-native'
import style from './style'

import Header from './header'
import Footer from './footer'

import MockData from './asset/mock-data'
import Griddy from './griddy/griddy'

let mockData = new MockData(100)

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
          <Griddy
            data={ mockData.data }
            sorter={ mockData.sorter }
          />
          <Footer />
        </View>
      </View>
    )
  }
}
