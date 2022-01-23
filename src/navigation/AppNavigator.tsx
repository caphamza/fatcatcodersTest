import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// navigator
import BottomTabNavigator from './BottomTabNavigator'
import CrewMemberComponent from '../screens/CrewMember'

const Stack = createNativeStackNavigator()

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name='Tab' component={BottomTabNavigator} />
      <Stack.Screen options={{ headerShown: false }} name='CrewMember' component={CrewMemberComponent} />
    </Stack.Navigator>
  )
}

export default AppNavigator