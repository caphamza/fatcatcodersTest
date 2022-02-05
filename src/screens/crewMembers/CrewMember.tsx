import React from 'react'

// assets
import { myColors } from '../../styles/colors'
import globalStyle from '../../styles'
import styles from './CrewMember.style'

// components
import { View, Text, Image, Pressable, Linking } from 'react-native'
import Header from '../../components/common/Header'

interface Prop {
  navigation: any,
  route: {
    params: {
      profileImg: string,
      info: {
        id: number,
        name: string,
        status: string,
        agency: string,
        wikipedia: string,
        [key: string]: any;
      }
    }
  }
}

const CrewMember = ({ navigation, route }: Prop) => {
  const { profileImg, info } = route.params
  return (
    <>
      <Header
        title={info.name}
        onLeftClick={() => navigation.goBack()}
      />
      <View style={globalStyle.container}>
        <View style={styles.content}>
          <View style={styles.imgView}>
            <Image style={styles.img} source={{ uri: profileImg }} />
          </View>
          {Object.keys(info).map((val, index) => (
            <View
              key={index}
              style={styles.infoView}
            >
              <Text style={styles.txt1}>{val}</Text>
              <Pressable onPress={() => val === 'wikipedia' && Linking.openURL(info[val])} style={{ width: '70%' }}>
                <Text style={[styles.txt2, val === 'wikipedia' && { color: myColors.brandGreen }]}>{info[val]}</Text>
              </Pressable>
            </View>
          ))}
        </View>
      </View>
    </>
  )
}

export default CrewMember
