import React from 'react'

// assets
import { myColors } from '../../styles/colors'
import globalStyle from '../../styles'
import styles from './Card.style'

// components
import { View, Text, StyleSheet } from 'react-native'
import AvatarHeader from '../common/AvatarHeader'

interface Prop {
  item: {
    name: string,
    active: boolean,
    description: string,
    status: boolean,
    flickr_images: string[]
  },
  index: number 
}

const RocketCard = ({ item, index }: Prop) => {
  return (
    <View style={[globalStyle.avatarCard1Container, index === 0 && { marginTop: 20 }]}>
      <View style={globalStyle.avatarCard1Content}>
        <AvatarHeader
          image={item.flickr_images[0]}
          name={item.name}
          status={item.active ? 'active' : 'inactive'}
        />
        <Text style={styles.txt}>{item.description}</Text>
      </View>
    </View>
  )
}

export default RocketCard
