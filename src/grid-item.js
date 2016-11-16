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

    this._pressItem = this._pressItem.bind(this)
    this._updateNativeStyles = this._updateNativeStyles.bind(this)

    this.isSelected = false
    this.isDraggable = false
  }

  render () {
    return (
      <TouchableHighlight
        onPress={ _ => this._pressItem() }
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
          <View
            ref={ gridItem => {
              this.gridItem = gridItem
            }}
            style={ gridStyle.cell }
          >
            <Image
              ref={ gridImg => {
                this.gridImg = gridImg
              }}
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

  _pressItem() {
    this.isSelected = !this.isSelected

    if ( this.isSelected ) {
      this._updateNativeStyles({
        gridItem: { style: gridStyle.cellPress },
        gridImg: { style: gridStyle.imgPress }
      })
    } else {
      this._updateNativeStyles({
        gridItem: { style: gridStyle.cell },
        gridImg: { style: gridStyle.img }
      })
    }
  }

  _updateNativeStyles(styles) {
    this.gridItem && this.gridItem.setNativeProps(styles.gridItem)
    this.gridImg && this.gridImg.setNativeProps(styles.gridImg)
  }
}
