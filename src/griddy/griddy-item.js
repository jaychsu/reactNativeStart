import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native'

export default class GriddyItem extends Component {
  constructor(props) {
    super()

    this.state = {}
    this.isSelected = props.isSelected
  }

  render() {
    return (
      <TouchableHighlight
        onLongPress={ this.props.onLongPress }
        onPress={ this.props.onPress }
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
              height: 64,
              borderRadius: 2
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
