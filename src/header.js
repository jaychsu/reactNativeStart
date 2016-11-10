import React, { Component } from 'react'
import {
  Text,
  View,
  StatusBar,
  TouchableHighlight
} from 'react-native'
import RCTDeviceEventEmitter from 'RCTDeviceEventEmitter'
import style from './style'

export default class Header extends Component {
  render() {
    return (
      <View style={ style.header }>
        <StatusBar hidden={ true } />
        <View style={ style.navigator }>
          <Text style={ style.content }>C</Text>
          <TouchableHighlight
            style={{
              paddingLeft: 20,
              paddingRight: 20,
              height: 30,

              flex: 1,
              justifyContent: 'center',
              alignItems: 'center'
            }}
            onPress={_ => {
              global.isCoverListExpand = !global.isCoverListExpand
              RCTDeviceEventEmitter.emit('isCoverListExpand')
            }}
          >
            <Text style={ style.content }>SketchBook</Text>
          </TouchableHighlight>
          <Text style={ style.content }>N</Text>
        </View>
      </View>
    )
  }
}
