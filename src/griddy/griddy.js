import React, { Component } from 'react'
import {
  Image,
  View,
  ListView,
  LayoutAnimation
} from 'react-native'
import GriddyItem from './griddy-item'

export default class Griddy extends Component {
  constructor() {
    super()

    /**
     * props {
     *   data
     *   sorter
     * }
     */

    this.state = {}
    this.state.dataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
  }

  render() {
    let dataSource = this.state.dataSource.cloneWithRows(this.props.data, this.props.sorter)

    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <ListView
          { ...this.props }

          dataSource={ dataSource }
          renderRow={(rowData: string, sectionID: number, rowID: number) => (
            <GriddyItem
              { ...this.props }

              data={ rowData }
            />
          )}
          initialListSize={ 100 }
          pageSize={ 100 }
          contentContainerStyle={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}
        />
      </View>
    )
  }
}
