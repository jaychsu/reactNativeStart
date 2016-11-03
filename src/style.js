import { StyleSheet } from 'react-native'

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
