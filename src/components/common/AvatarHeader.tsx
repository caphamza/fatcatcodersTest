import React from 'react'

// assets
import { myColors } from '../../styles/colors'
import styles from './AvatarHeader.style'

// components
import { View, Image, Text } from 'react-native'

interface Prop {
  image: string,
  name: string,
  status: string
}

const AvatarHeader = ({ image, name, status }: Prop) => {
  return (
    <View style={styles.headerView}>
      <Image resizeMode='cover' style={[styles.img1, !(!image) && { marginRight: 12 }]} source={{ uri: image }} />
      <View>
        <Text style={styles.headerViewTxt1}>{name}</Text>
        <Text
          style={[styles.headerViewTxt2, { color: myColors[status === 'active' ? 'darkBlue700' : 'darkBlue400']}]}
        >
          {status}
        </Text>
      </View>
    </View>
  )
}

export default AvatarHeader
