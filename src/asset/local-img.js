export default class LocalImgSource {
  constructor() {
    this.getUri = this.getUri.bind(this)

    this.srcs = [
      require('./distort_transform.jpg'),
      require('./flipbook_animation.jpg'),
      require('./perspective_guides.jpg')
    ]
  }

  getUri(uri) {
    return uri
  }
}
