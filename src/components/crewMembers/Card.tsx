import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native'

// assets
import { myColors } from '../../theme/global'

// components
import {
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import AvatarHeader from '../common/AvatarHeader'
import ErrorAlert from '../common/ErrorAlert'

interface Props {
  item: {
    image: string,
    id: number,
    name: string,
    status: string,
    agency: string,
    wikipedia: string
  },
  index: number,
  permissionGranted: boolean
}

type RootStackParamList = {
  CrewMember: {
    profileImg: string,
    info: {
      id: number,
      name: string,
      status: string,
      agency: string,
      wikipedia: string
    }
  }
}

const CrewMembersCard = ({ item, index, permissionGranted }: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  
  const onNavigateClick = async () => {
    if (permissionGranted) {
      navigation.navigate('CrewMember', {
        profileImg: item.image,
        info: {
          id: item.id,
          name: item.name,
          status: item.status,
          agency: item.agency,
          wikipedia: item.wikipedia
        }
      })
    } else {
      ErrorAlert('Permission Denied', 'Some of the features of this app are not accessible.\nGo to Settings and allow permissions to access them')
    }
  }
  
  return (
    <TouchableOpacity
      onPress={onNavigateClick}
      style={[styles.container, index === 0 && { marginTop: 20 }]}
    >
      <View style={styles.content}>
        <AvatarHeader
          image={item.image}
          name={item.name}
          status={item.status}
        />
      </View>
    </TouchableOpacity>
  )
}

export default CrewMembersCard

const styles = StyleSheet.create({
  container: {
    backgroundColor: myColors.white,
    marginBottom: 12,
    borderRadius: 8,
    borderColor: myColors.darkBlue200
  },
  content: {
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 8
  },
  linkView: {
    paddingVertical: 2,
    paddingRight: 6,
    flexDirection: 'row'
  },
  img2: {
    width: 18,
    height: 18
  },
  txt2: {
    marginLeft: 12,
    fontSize: 16,
    color: myColors.darkBlue700,
    fontWeight: '500'
  }
  
})
