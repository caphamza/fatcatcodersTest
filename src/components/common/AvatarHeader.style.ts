// assets
import { myColors } from '../../styles/colors'

// component
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6
  },
  img1: {
    width: 48,
    height: 48,
    borderRadius: 50,
    backgroundColor: myColors.brandGreen
  },
  headerViewTxt1: {
    fontSize: 16,
    fontWeight: 'bold',
    color: myColors.darkBlue700,
  },
  headerViewTxt2: {
    fontSize: 14,
    color: myColors.darkBlue700
  }
})