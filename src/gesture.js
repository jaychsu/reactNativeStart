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
    this.state.pos = { x: 200, y: 200 }
    this.state.size = { width: 120, height: 120 }
    this.state.pan = new Animated.ValueXY(this.state.pos)
    this.state.pan.setOffset({
      x: -this.state.size.width/2,
      y: -this.state.size.height/2
    })

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
          // console.log('onPanResponderMove::listener', {
          //   event,
          //   instantEvent: JSON.parse(JSON.stringify(event)),
          //   pan: JSON.parse(JSON.stringify(this.state.pan))
          // })
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
            borderRadius: 2
          },
          this.state.size,
          this.state.pan.getLayout()
        ]}
      />
    )
  }

  _handlePanResponderGrant(e, gesture) {
    // console.log('onPanResponderGrant::_handlePanResponderGrant', {
    //   event: e,
    //   gesture: JSON.parse(JSON.stringify(gesture)),
    //   pan: JSON.parse(JSON.stringify(this.state.pan))
    // })
  }

  _handlePanResponderEnd(e, gesture) {
    // Animated.spring(this.state.pan, {
    //   toValue: this.state.pos
    // }).start()
  }
}
