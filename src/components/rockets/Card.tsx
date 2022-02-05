import React, { useMemo } from 'react'

// assets
import globalStyle from '../../styles'
import styles from './Card.style'

// components
import { View, Text } from 'react-native'
import AvatarHeader from '../common/AvatarHeader'

interface Prop {
  item: {
    name: string,
    active: boolean,
    description: string,
    flickr_images: string[]
  },
  index: number 
}

const RocketCard = ({ item, index }: Prop) => {
  const MemoizedCard = useMemo(() => {
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
  }, [item.flickr_images[0], item.name, item.active])
  return MemoizedCard
}

export default RocketCard
