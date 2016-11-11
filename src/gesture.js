import React, { Component } from 'react'
import {
  View,
  Image,
  Animated,
  PanResponder
} from 'react-native'
import ImgSource from './asset/img-source'

const contentSource = new ImgSource(1)

export default class Gesture extends Component {
  constructor() {
    super()

    this.state = {}
    this.state.position = { x: 150, y: 150 }
    this.state.pan = new Animated.ValueXY(this.state.position)

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: _ => true,
      onMoveShouldSetPanResponder: _ => true,
      onPanResponderGrant: this._handlePanResponderGrant.bind(this),
      onPanResponderMove: Animated.event([
        null,
        {
          moveX: this.state.pan.x,
          moveY: this.state.pan.y
        }
      ], {
        listener: (proxy, event) => {
          console.log({
            event,
            instantEvent: JSON.parse(JSON.stringify(event)),
            pan: JSON.parse(JSON.stringify(this.state.pan))
          })
        }
      }),
      onPanResponderRelease: this._handlePanResponderEnd.bind(this),
      onPanResponderTerminate: this._handlePanResponderEnd.bind(this)
    })
  }

  render() {
    return (
      <Animated.Image
        {...this.panResponder.panHandlers}
        source={ contentSource.getThumbSrc(0) }
        style={[
          {
            position: 'absolute',
            width: 120,
            height: 120,
            borderRadius: 2
          },
          this.state.pan.getLayout()
        ]}
      />
    )
  }

  _handlePanResponderGrant(e, gesture) {}

  _handlePanResponderEnd(e, gesture) {
    // Animated.spring(this.state.pan, {
    //   toValue: this.state.position
    // }).start()
  }
}
