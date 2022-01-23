import React, { useState, useEffect } from 'react'
import { checkMultiple, PERMISSIONS } from 'react-native-permissions';

// assets
import { myColors } from '../theme/global'
import EmptyIcon from '../assets/icons/empty.png'

// components
import {
  View,
  FlatList,
  Platform,
  Image,
  ScrollView,
  RefreshControl,
  StyleSheet
} from 'react-native'
import Card from '../components/crewMembers/Card'
import Spinner from '../components/common/Spinner'
import ErrorAlert from '../components/common/ErrorAlert';

// api
import { crewMembersAPI } from '../api'

const CrewMembers = () => {

  const [data, setData] = useState([])
  const [fetched, setFetched] = useState(false)
  const [isPermissionsGranted, setIsPermissionsGranted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [refreshing, setRefreshing] = useState(false)

  useEffect(() => {
    getData()
    checkPermissions()
  }, [])

  const getData = async (refresh = false) => {
    try {
      refresh ? setRefreshing(true) : setLoading(true)
      const res: any = await crewMembersAPI()
      setData(res.data)
    } catch (e: any) {
      if (e.message.includes('Network Error')) {
        ErrorAlert('Network Error', 'No Internet!\n Please try later')
      } else ErrorAlert('Something went wrong', 'Something went wrong. Please try later')
    } finally {
      setFetched(true)
      refresh ? setRefreshing(false) : setLoading(false)
    }
  }

  const checkPermissions = async () => {
    let res = {}
    if (Platform.OS === 'ios') {
      res = await checkMultiple([
        PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY,
        PERMISSIONS.IOS.CAMERA,
        PERMISSIONS.IOS.PHOTO_LIBRARY
      ])    
    } else if (Platform.OS === 'android') {
      res = await checkMultiple([
        PERMISSIONS.ANDROID.CAMERA,
        PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
      ])
    }
    setIsPermissionsGranted(Object.values(res).filter(v => v !== 'granted').length === 0)
  }
  return (
    <View style={styles.container}>
      <Spinner
        isLoading={loading}
      />
      {data.length > 0
        ? (
            <FlatList
              data={data}
              showsVerticalScrollIndicator={false}
              renderItem={({ item, index }) => (
                <Card
                  permissionGranted={isPermissionsGranted}
                  index={index}
                  item={item}
                />
              )}
              keyExtractor={(item: any) => item.id}
              refreshControl={
                <RefreshControl
                  colors={[myColors.brandGreen]}
                  tintColor={myColors.brandGreen}
                  refreshing={refreshing}
                  onRefresh={() => getData(true)}
                />
              }
            />
          )
        : fetched && (
          <View style={{ flex: 1 }}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ flex: 1 }}
              refreshControl={
                <RefreshControl
                colors={[myColors.brandGreen]}
                tintColor={myColors.brandGreen}
                refreshing={refreshing}
                onRefresh={() => getData(true)}
              />
              }
            >
              <View style={styles.emptyView}>
                <Image resizeMode='contain' style={styles.emptyIcon} source={EmptyIcon}/>
              </View>
            </ScrollView>
          </View>  
          )}
    </View>
  )
}

export default CrewMembers

const styles = StyleSheet.create({
  container: {
    backgroundColor: myColors.backGround,
    paddingHorizontal: 12,
    flex: 1
  },
  emptyView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   },
   emptyIcon: {
     width: 120,
     height: 120,
      marginBottom: '10%'
   }
})