import React, { Component } from 'react'
import {
  Text,
  Image,
  View,
  ListView,
  TouchableHighlight
} from 'react-native'
import ImgSource from './asset/img-source'
import style, { gridStyle } from './style'

export default class Grid extends Component {
  constructor() {
    super()

    this._renderRow = this._renderRow.bind(this)
    this._pressRow = this._pressRow.bind(this)
    this._genRows = this._genRows.bind(this)

    this.selectedRow = {}

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows(this._genRows())
    }
  }

  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <ListView
          dataSource={ this.state.dataSource }
          renderRow={ this._renderRow }

          initialListSize={ 200 }
          pageSize={ 150 }
          contentContainerStyle={{
            justifyContent: 'flex-start',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            paddingTop: 10,
            paddingBottom: 10
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
              source={ ImgSource.getThumbSrc(rowID) }
            />
          </View>
          <Text style={[
            style.content,
            { paddingTop: 4 }
          ]}>{ rowID }</Text>
        </View>
      </TouchableHighlight>
    )
  }

  _genRows(): Array<boolean> {
    return ImgSource.thumbs.map((val, key) => {
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
