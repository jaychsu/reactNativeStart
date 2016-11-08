import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native'
import style from './style'

import Header from './header'
import CoverList from './cover-list'
import Grid from './grid'
import Footer from './footer'

export default class App extends Component {
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
          <Grid />
          <Footer />
        </View>
      </View>
    )
  }
}
