import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native'

export default class GriddyItem extends Component {
  constructor() {
    super()

    this.state = {}
  }

  render() {
    return (
      <TouchableHighlight
        underlayColor="transparent"
      >
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
          <Image
            source={ this.props.thumbnail }
            style={{
              width: 64,
              height: 64
            }}
          />
          <Text
            style={{
              color: 'white'
            }}
          >{ this.props.title }</Text>
        </View>
      </TouchableHighlight>
    )
  }
}
