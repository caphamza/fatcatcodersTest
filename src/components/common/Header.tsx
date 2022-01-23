import React from 'react'

// assets
import LeftIcon from '../../assets/icons/left.png'

// components
import {
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
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

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8
  },
  img1: {
    width: 24,
    height: 24
  },
  titleTxt: {
    fontSize: 20,
    maxWidth: '70%',
    fontWeight: 'bold'
  }
})
