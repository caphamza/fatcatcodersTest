// assets
import { myColors } from '../../styles/colors'

// component
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  content: {
    backgroundColor: myColors.white,
    paddingHorizontal: 16,
    paddingVertical: 12
  },
  imgView: {
    alignItems: 'center',
    paddingBottom: 16,
    marginBottom: 16,
    borderBottomColor: myColors.darkBlue50,
    borderBottomWidth: 1
  },
  img: {
    width: 64,
    height: 64,
    backgroundColor: myColors.brandGreen,
    borderRadius: 50
  },
  infoView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8
  },
  txt1: {
    textTransform: 'capitalize',
  },
  txt2: {
    textAlign: 'right'
  }
})
