import React, { Component } from 'react'
import {
  View,
  Text,
  Image
} from 'react-native'

export default class GriddyPlaceholder extends Component {
  constructor(props) {
    super()

    this.state = {}
  }

  render() {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',

          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 4,
          paddingBottom: 4
        }}
      >
        <View
          style={{
            width: 64,
            height: 64
          }}
        />
        <Text
          style={{
            color: 'transparent'
          }}
        >{ this.props.title }</Text>
      </View>
    )
  }
}
