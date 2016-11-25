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
    this.state.layout = {}
    this.state.isSelected = props.isSelected
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.isSelected !== nextState.isSelected) return true
    return false
  }

  render() {
    return (
      <TouchableHighlight
        onLayout={ e => this.state.layout = e.nativeEvent.layout }
        onLongPress={ this.props.onLongPress }
        onPress={ e => this.setState({ isSelected: !this.state.isSelected }) }
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
