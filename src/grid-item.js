import React, { Component } from 'react'
import {
  Text,
  Image,
  View,
  TouchableHighlight
} from 'react-native'
import style, { gridStyle } from './style'

export default class GridItem extends Component {
  constructor() {
    super()

    this.isSelected = false
    this.isDraggable = false
  }

  render () {
    return (
      <TouchableHighlight
        underlayColor="transparent"
      >
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',

          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 4,
          paddingBottom: 4
        }}>
          <View style={ gridStyle.cell }>
            <Image
              style={ gridStyle.img }
              source={ this.props.source }
            />
          </View>
          <Text style={[
            style.content,
            { paddingTop: 4 }
          ]}>{ this.props.text }</Text>
        </View>
      </TouchableHighlight>
    )
  }
}
