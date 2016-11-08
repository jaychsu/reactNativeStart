import HttpImgSource from './http-img'
import LocalImgSource from './local-img'

const BaseSource = HttpImgSource

class ImgSource extends BaseSource {
  constructor() {
    super()

    this.getThumbSrc = this.getThumbSrc.bind(this)

    this.thumbsLength = 200
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

export default new ImgSource
