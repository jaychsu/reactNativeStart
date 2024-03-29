export default class HttpImgSource {
  constructor() {
    this.getUri = this.getUri.bind(this)

    this.srcs = [
      'https://cdn.sketchbook.com/assets/home/distort_transform-2d19945d3fad0143983904c9c990e35f.jpg',
      'https://cdn.sketchbook.com/assets/home/flipbook_animation-35934b3cf75a4406e816dc297ec0d1e2.jpg',
      'https://cdn.sketchbook.com/assets/home/perspective_guides-2cac1ddd833a315a2a091f20388766a1.jpg',
      'https://cdn.sketchbook.com/assets/home/synthetic_blending_brush-aecd125673cdd50f7f9cc1f8644c4813.jpg',
      'https://cdn.sketchbook.com/assets/home/enhanced_selection-6943badd7810cd4cb95d4087c49ae903.jpg',
      'https://cdn.sketchbook.com/assets/home/dynamic_gradient-f97645c33f8d07e0ef50556c179687a2.jpg',
      'https://cdn.sketchbook.com/assets/home/canvas_size-76f2a4303f6c6a734e00d76ec94da1d2.jpg'
    ]
  }

  getUri(uri) {
    return { uri }
  }
}
