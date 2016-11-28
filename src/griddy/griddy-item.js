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

    this.handleOnLayout = this.handleOnLayout.bind(this)

    this.state = {}
    this.state.layout = {}
    this.state.isSelected = props.isSelected

    this.state.pan = new Animated.ValueXY()

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: _ => true,
      onMoveShouldSetPanResponder: _ => true,
      onPanResponderGrant: this.handlePanResponderStart.bind(this),
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
        onLayout={ this.handleOnLayout }
        style={[
          this.state.isSelected ? { position: 'absolute' } : null,
          this.state.pan.getLayout()
        ]}
      >
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

  handleOnLayout(e) {
    this.state.layout = e.nativeEvent.layout
    // console.log(JSON.parse(JSON.stringify(e.nativeEvent.layout)))
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
