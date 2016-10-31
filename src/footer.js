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
        <View style={{
          flexDirection: 'row',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text style={ style.content }>2016 copyright.</Text>
        </View>
      </View>
    )
  }
}
