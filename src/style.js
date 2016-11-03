import {
  Dimensions,
  StyleSheet
} from 'react-native'

export default StyleSheet.create({
  content: {
    fontSize: 14,
    color: '#fcfcfc'
  },
  header: {
    paddingLeft: 10,
    paddingRight: 10,
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#4d4b4a',
    backgroundColor: '#1a1a1a'
  },
  footer: {
    height: 30,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#1a1a1a'
  },
  navigator: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})

export var gridStyle = getGridStyle()

function getGridStyle() {
  const { width } = Dimensions.get('window')
  if ( width >= 1000 ) {
    return StyleSheet.create({
      cell: {},
      cellPress: {
        paddingLeft: 4,
        paddingRight: 4,
        paddingTop: 4,
        paddingBottom: 4,

        borderWidth: 4,
        borderColor: '#4281ca',
        borderRadius: 4
      },
      img: {
        width: 160,
        height: 160,
        borderRadius: 4
      },
      imgPress: {
        width: 144,
        height: 144,
        borderRadius: 2
      }
    })
  } else {
    return StyleSheet.create({
      cell: {},
      cellPress: {
        paddingLeft: 2,
        paddingRight: 2,
        paddingTop: 2,
        paddingBottom: 2,

        borderWidth: 2,
        borderColor: '#4281ca',
        borderRadius: 4
      },
      img: {
        width: 64,
        height: 64,
        borderRadius: 4
      },
      imgPress: {
        width: 56,
        height: 56,
        borderRadius: 2
      }
    })
  }
}
