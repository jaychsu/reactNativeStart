import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native'
import style from './style'

export default class Grid extends Component {
  render() {
    return (
      <View style={ this.props.style }>
        <View style={{
          flexDirection: 'row',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text style={ style.content }>SketchBook Online Gallery</Text>
        </View>
      </View>
    )
  }
}
