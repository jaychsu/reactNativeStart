import HttpImgSource from './http-img'
import LocalImgSource from './local-img'

import { arrItemMove } from '../util'

const BaseSource = LocalImgSource

export default class MockData extends BaseSource {
  constructor(dataLength) {
    super()

    this.move = this.move.bind(this)

    this.data = {}
    this.sorter = []
    this.dataLength = dataLength

    for (let i = 0; i < this.dataLength; i++) {
      let randomImgIndex = Math.floor(Math.random() * this.srcs.length)
      this.data[i] = {
        thumbnail: this.getUri(this.srcs[randomImgIndex]),
        title: `Image ${i}`,
        isSelected: false
      }
      this.sorter.push(i)
    }
  }

  move(from, to) {
    arrItemMove(this.sorter, from, to)
    return this.sorter
  }
}
