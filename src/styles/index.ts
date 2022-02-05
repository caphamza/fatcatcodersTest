// assets
import { myColors } from './colors'

// component
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    backgroundColor: myColors.backGround,
    flex: 1
  },
  emptyView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   },
   emptyIcon: {
     width: 120,
     height: 120,
     marginBottom: '10%'
   },
   avatarCard1Container: {
    backgroundColor: myColors.white,
    marginBottom: 12,
    borderRadius: 8,
    borderColor: myColors.darkBlue200
  },
  avatarCard1Content: {
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 8
  },
})
