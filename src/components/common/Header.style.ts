import { myColors } from '../../styles/colors'

// component
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8
  },
  img1: {
    width: 24,
    height: 24
  },
  titleTxt: {
    fontSize: 20,
    maxWidth: '70%',
    fontWeight: 'bold'
  }
})
