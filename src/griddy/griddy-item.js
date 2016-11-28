import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  Animated,
  PanResponder
} from 'react-native'

export default class GriddyItem extends Component {
  constructor(props) {
    super()

    this.state = {}
    this.state.layout = {}
    this.state.isSelected = props.isSelected

    this.state.pan = new Animated.ValueXY()

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: _ => true,
      onMoveShouldSetPanResponder: _ => true,
      onPanResponderStart: this.handlePanResponderStart.bind(this),
      onPanResponderMove: Animated.event([
        null,
        {
          dx: this.state.pan.x,
          dy: this.state.pan.y
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
      onPanResponderRelease: this.handlePanResponderEnd.bind(this),
      onPanResponderTerminate: this.handlePanResponderEnd.bind(this)
    })
  }

  shouldComponentUpdate(nProps, nState) {
    if (this.state.isSelected !== nState.isSelected) return true
    return false
  }

  render() {
    return (
      <Animated.View
        { ...this.panResponder.panHandlers }
        style={[
          this.state.isSelected ? { position: 'absolute' } : null,
          this.state.pan.getLayout()
        ]}
      >
        <TouchableHighlight
          onLayout={ e => this.state.layout = e.nativeEvent.layout }
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
      </Animated.View>
    )
  }

  handlePanResponderStart(e, gesture) {
    this.setState({ isSelected: true })
    // console.log('onPanResponderStart::handlePanResponderStart', {
    //   event: e,
    //   gesture: JSON.parse(JSON.stringify(gesture)),
    //   pan: JSON.parse(JSON.stringify(this.state.pan))
    // })
  }

  handlePanResponderEnd(e, gesture) {
    this.setState({ isSelected: false })
    // Animated.spring(this.state.pan, {
    //   toValue: this.state.pos
    // }).start()
  }
}
