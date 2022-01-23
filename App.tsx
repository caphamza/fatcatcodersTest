import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { request, PERMISSIONS } from 'react-native-permissions';

import AppNavigation from './src/navigation/AppNavigator'

// components
import { Platform } from 'react-native'

const App = () => {
  useEffect(() => {
    getPermission()
  }, [])

  const getPermission = async () => {
    if (Platform.OS === 'ios') {
      await request(PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY)
      await request(PERMISSIONS.IOS.CAMERA)
      await request(PERMISSIONS.IOS.PHOTO_LIBRARY)
    } else if (Platform.OS === 'android') {
      await request(PERMISSIONS.ANDROID.CAMERA)
      await request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE)
    }
  }
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  )
}

export default App