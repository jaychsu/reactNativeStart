export var THUMB_URLS = [
  require('./distort_transform-2d19945d3fad0143983904c9c990e35f.jpg'),
  require('./flipbook_animation-35934b3cf75a4406e816dc297ec0d1e2.jpg'),
  require('./perspective_guides-2cac1ddd833a315a2a091f20388766a1.jpg'),
  // require('./asset/ad06.tif'),
  // require('./asset/Multi_Sketch2.tif'),
  // require('./asset/Yeti.tif'),
]

export function getSrc(rowID) {
  return THUMB_URLS[rowID]
}
