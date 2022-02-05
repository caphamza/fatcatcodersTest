import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native'

// assets
import { myColors } from '../../styles/colors'
import globalStyle from '../../styles'

// components
import { View, TouchableOpacity } from 'react-native'
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
      style={[globalStyle.avatarCard1Container, index === 0 && { marginTop: 20 }]}
    >
      <View style={globalStyle.avatarCard1Content}>
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
