import React, { Component } from 'react'
import {
  Text,
  Image,
  View,
  ListView,
  TouchableHighlight,
  LayoutAnimation
} from 'react-native'
import RCTDeviceEventEmitter from 'RCTDeviceEventEmitter'
import ImgSource from './asset/img-source'
import style, { gridStyle } from './style'

const coverSource = new ImgSource(10)

export default class CoverList extends Component {
  constructor() {
    super()

    this._renderRow = this._renderRow.bind(this)
    this._pressRow = this._pressRow.bind(this)
    this._genRows = this._genRows.bind(this)

    this.state = {}
    this.selectedRow = {}

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state.dataSource = ds.cloneWithRows(this._genRows())

    RCTDeviceEventEmitter.addListener('isCoverListExpand', _ => {
      this.forceUpdate()
    })
  }

  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut()
  }

  render() {
    return (
      <View style={{
        position: 'relative',
        height: global.isCoverListExpand ? 100 : 0
      }}>
        <ListView
          dataSource={ this.state.dataSource }
          renderRow={ this._renderRow }
          horizontal={ true }

          initialListSize={ 300 }
          pageSize={ 200 }
          contentContainerStyle={{
            position: 'absolute',
            bottom: 0,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'flex-start'
          }}
        />
      </View>
    )
  }

  _renderRow(rowData: string, sectionID: number, rowID: number) {
    return (
      <TouchableHighlight
        onPress={_ => this._pressRow(rowID)}
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
          <View style={ this.selectedRow[rowID] ? gridStyle.cellPress : gridStyle.cell }>
            <Image
              style={ this.selectedRow[rowID] ? gridStyle.imgPress : gridStyle.img }
              source={ coverSource.getThumbSrc(rowID) }
            />
          </View>
          <Text style={[
            style.content,
            { paddingTop: 4 }
          ]}>{ 'Stack' + rowID }</Text>
        </View>
      </TouchableHighlight>
    )
  }

  _genRows(): Array<boolean> {
    return coverSource.thumbs.map((val, key) => {
      return this.selectedRow[key]
    })
  }

  _pressRow(rowID: number) {
    this.selectedRow[rowID] = !this.selectedRow[rowID]
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this._genRows())
    })
  }
}
