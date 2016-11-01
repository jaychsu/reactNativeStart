import React, { Component } from 'react'
import {
  Text,
  Image,
  View,
  ListView,
  TouchableHighlight
} from 'react-native'
import style from './style'

const THUMB_URLS = []

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
      <ListView
        dataSource={ this.state.dataSource }
        renderRow={ this._renderRow }

        initialListSize={ 21 }
        pageSize={ 5 }
        contentContainerStyle={{
          justifyContent: 'space-around',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'flex-start',

          paddingLeft: 20,
          paddingRight: 20
        }}
      />
    )
  }

  _renderRow(rowData: string, sectionID: number, rowID: number) {
    let imgSrc = THUMB_URLS[rowID]
    return (
      <TouchableHighlight underlayColor="transparent">
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 10,
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
