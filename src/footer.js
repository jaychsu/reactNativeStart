import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native'
import style from './style'

export default class Footer extends Component {
  render() {
    return (
      <View style={ style.footer }>
        <View style={ style.navigator }>
          <Text style={ style.content }>C</Text>
          <Text style={ style.content }>A</Text>
          <Text style={ style.content }>L</Text>
        </View>
      </View>
    )
  }
}
