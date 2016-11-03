import React, { Component } from 'react'
import {
  Text,
  Image,
  View,
  ListView,
  TouchableHighlight
} from 'react-native'
import { getSrc, THUMB_URLS } from './asset/img-source'
import style from './style'

export default class Grid extends Component {
  constructor() {
    super()

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      dataSource: ds.cloneWithRows(THUMB_URLS)
    }
  }

  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10
      }}>
        <ListView
          dataSource={ this.state.dataSource }
          renderRow={ this._renderRow }

          initialListSize={ 20 }
          pageSize={ 5 }
          contentContainerStyle={{
            justifyContent: 'flex-start',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
          }}
        />
      </View>
    )
  }

  _renderRow(rowData: string, sectionID: number, rowID: number) {
    return (
      <TouchableHighlight underlayColor="transparent">
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 4,
          paddingBottom: 4
        }}>
          <Image style={{ width: 64, height: 64 }} source={{ uri: imgSrc }} />
          <Text style={[
            style.content,
            { paddingTop: 4 }
          ]}>{ rowID }</Text>
        </View>
      </TouchableHighlight>
    )
  }
}
