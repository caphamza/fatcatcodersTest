import React from 'react'

// assets
import { myColors } from '../../theme/global'

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
    <View style={[styles.container, index === 0 && { marginTop: 20 }]}>
      <View style={styles.content}>
        <AvatarHeader
          image={item.flickr_images[0]}
          name={item.name}
          status={item.active ? 'active' : 'inactive'}
        />
        <Text style={styles.txt2}>{item.description}</Text>
      </View>
    </View>
  )
}

export default RocketCard

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
  txt2: {
    fontSize: 14,
    color: myColors.darkBlue400,
    marginTop: 4,
    marginBottom: 4
  }
})
