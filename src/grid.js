import React, { Component } from 'react'
import {
  Image,
  View,
  ListView,
  LayoutAnimation
} from 'react-native'
import RCTDeviceEventEmitter from 'RCTDeviceEventEmitter'
import { BlurView, VibrancyView } from 'react-native-blur'
import GridItem from './grid-item'
import ImgSource from './asset/img-source'
import style, { gridStyle } from './style'

const contentSource = new ImgSource(50)

export default class Grid extends Component {
  constructor() {
    super()

    this._triggerLayoutAnimation = this._triggerLayoutAnimation.bind(this)

    this.state = {}

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state.dataSource = ds.cloneWithRows(contentSource.thumbs)

    RCTDeviceEventEmitter.addListener('isCoverListExpand', _ => {
      this.forceUpdate()
    })
  }

  _triggerLayoutAnimation() {
    LayoutAnimation.easeInEaseOut()
  }

  render() {
    return (
      <View style={{
        height: global.isCoverListExpand ? 600 : 0,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <ListView
          dataSource={ this.state.dataSource }
          renderRow={(rowData: string, sectionID: number, rowID: number) => (
            <GridItem
              source={ contentSource.getThumbSrc(rowID) }
              text={ rowID }
            />
          )}

          initialListSize={ 300 }
          pageSize={ 200 }
          contentContainerStyle={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 30,
            paddingRight: 30
          }}
        />
        {
          (global.isCoverListExpand)
          ? (
              <View
                style={ style.fullScreen }
                onLayout={ this._triggerLayoutAnimation }
              >
                <Image
                  style={{ flex: 1 }}
                >
                  <BlurView
                    blurType="dark"
                    blurAmount={ 5 }
                    style={{ flex: 1 }}
                  >
                  </BlurView>
                </Image>
              </View>
            )
          : ( null )
        }
      </View>
    )
  }
}
