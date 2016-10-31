import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native'
import style from './style'

export default class Header extends Component {
  render() {
    return (
      <View style={ style.header }>
        <View style={{
          flexDirection: 'row',
          flex: 1,
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Text style={ style.content }>C</Text>
          <Text style={ style.content }>SketchBook</Text>
          <Text style={ style.content }>N</Text>
        </View>
      </View>
    )
  }
}
