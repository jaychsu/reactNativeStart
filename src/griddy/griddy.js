import React, { Component } from 'react'
import {
  Image,
  View,
  ListView,
  LayoutAnimation
} from 'react-native'
import { arrItemMove } from '../util'

import GriddyItem from './griddy-item'

export default class Griddy extends Component {
  constructor(props) {
    super()

    /**
     * props: {
     *   data: {
     *     // TODO: support folder view - type, childLength
     *     thumbnail: string
     *     title: string
     *     isSelected: boolean
     *   }
     *   sorter: []
     * }
     */

    this._renderListRow = this._renderListRow.bind(this)
    this.moveRow = this.moveRow.bind(this)

    this.state = {}
    this.state.active = false // Active to Multi-Select
    this.state.data = props.data || {}
    this.state.sorter = props.sorter || []

    this.state.dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
  }

  render() {
    let dataSource = this.state.dataSource.cloneWithRows(this.state.data, this.state.sorter)

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

          scrollEnabled={ false }

          dataSource={ dataSource }
          renderRow={ this._renderListRow }
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

  moveRow(from: number, to: number) {
    let copiedSorter = this.state.sorter.slice()
    arrItemMove(copiedSorter, from, to)
    this.setState({ sorter: copiedSorter })
    this.forceUpdate()
    return this.state.sorter
  }

  _renderListRow(rowData: string, section: number, index: number) {
    return (
      <GriddyItem
        { ...this.props }
        { ...rowData }

        // Can't get new index now after move once
        index={ index }
        moveRow={ this.moveRow }
      />
    )
  }
}
