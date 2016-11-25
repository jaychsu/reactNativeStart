import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  PanResponder,
  Animated
} from 'react-native'

export default class GriddyItem extends Component {
  constructor(props) {
    super()

    this.state = {}
    this.state.layout = {}
    this.state.isSelected = props.isSelected

    // Reorder
    this.handleOnLayout = this.handleOnLayout.bind(this)
    this.state.pan = new Animated.ValueXY()
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: _ => true,
      onMoveShouldSetPanResponder: _ => true,
      onPanResponderGrant: this.handlePanResponderGrant.bind(this),
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

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.isSelected !== nextState.isSelected) return true
    return false
  }

  render() {
    return (
      <View
        style={{
          position: 'relative'
        }}
      >
        { (this.state.isSelected)
          ? (
            <View
              style={{
                width: this.state.layout.width,
                height: this.state.layout.height
              }}
            />
          )
          : null
        }
        <TouchableHighlight
          onLayout={ this.handleOnLayout }
          // onLongPress={ this.props.onLongPress }
          // onPress={ e => this.setState({ isSelected: !this.state.isSelected }) }
          underlayColor="transparent"
        >
          <Animated.View
            { ...this.panResponder.panHandlers }
            style={[
              {
                justifyContent: 'center',
                alignItems: 'center',

                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 4,
                paddingBottom: 4,
              },
              (this.state.isSelected) ? { position: 'absolute' } : null,
              this.state.pan.getLayout()
            ]}
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
          </Animated.View>
        </TouchableHighlight>
      </View>
    )
  }

  handleOnLayout(e) {
    this.state.layout = e.nativeEvent.layout
  }

  handlePanResponderGrant(e, gesture) {
    this.setState({ isSelected: !this.state.isSelected })
    // console.log('onPanResponderGrant::handlePanResponderGrant', {
    //   event: e,
    //   gesture: JSON.parse(JSON.stringify(gesture)),
    //   pan: JSON.parse(JSON.stringify(this.state.pan))
    // })
  }

  handlePanResponderEnd(e, gesture) {
    // Animated.spring(this.state.pan, {
    //   toValue: this.state.pos
    // }).start()
  }
}
