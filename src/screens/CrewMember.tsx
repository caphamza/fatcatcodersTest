import React from 'react'

// assets
import { myColors } from '../theme/global'

// components
import { View, Text, Image, Pressable, Linking, StyleSheet } from 'react-native'
import Header from '../components/common/Header'

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
      <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: myColors.backGround,
    flex: 1
  },
  content: {
    backgroundColor: myColors.white,
    paddingHorizontal: 16,
    paddingVertical: 12
  },
  imgView: {
    alignItems: 'center',
    paddingBottom: 16,
    marginBottom: 16,
    borderBottomColor: myColors.darkBlue50,
    borderBottomWidth: 1
  },
  img: {
    width: 64,
    height: 64,
    backgroundColor: myColors.brandGreen,
    borderRadius: 50
  },
  infoView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8
  },
  txt1: {
    textTransform: 'capitalize',
  },
  txt2: {
    textAlign: 'right'
  }
})