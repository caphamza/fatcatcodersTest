import React from 'react'

// assets
import LeftIcon from '../../assets/icons/left.png'
import styles from './Header.style'

// components
import {
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  Text
} from 'react-native'

interface Prop {
  title: string,
  onLeftClick: () => void
}

const Header = ({
  title = '',
  onLeftClick
}: Prop) => {

  return (
    <SafeAreaView style={{ backgroundColor: 'white' }}>
      <View style={styles.container}>
        <TouchableOpacity
          style={{ padding: 6 }}
          onPress={onLeftClick}
        >
          <Image resizeMode='contain' style={styles.img1} source={LeftIcon} />
        </TouchableOpacity>
        <Text style={styles.titleTxt}>{title}</Text>
        <View style={{ marginRight: 36 }}/>
      </View>
    </SafeAreaView>
  )
}

export default Header
