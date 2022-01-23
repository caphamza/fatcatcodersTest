import React from 'react'

// assets
import { myColors } from '../../theme/global'

// components
import { View, Image, Text, StyleSheet } from 'react-native'

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

const styles = StyleSheet.create({
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