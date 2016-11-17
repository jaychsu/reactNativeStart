import HttpImgSource from './http-img'
import LocalImgSource from './local-img'

const BaseSource = LocalImgSource

class ImgSource extends BaseSource {
  constructor(thumbsLength) {
    super()

    this.getThumbSrc = this.getThumbSrc.bind(this)

    this.thumbsLength = thumbsLength
    this.thumbs = []

    for (let i = 0; i < this.thumbsLength; i++) {
      let ref = Math.floor(Math.random() * this.srcs.length)
      this.thumbs.push(this.srcs[ref])
    }
  }

  getThumbSrc(index) {
    return this.getUri(this.thumbs[index])
  }
}

export default ImgSource
