import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// assets
import { myColors } from '../theme/global'
import RocketIcon from '../assets/icons/rocket.png'
import RocketFilledIcon from '../assets/icons/rocketFilled.png'
import CrewMemebersIcon from '../assets/icons/crewMembers.png'
import CrewMembersFilledIcon from '../assets/icons/crewMembersFilled.png'

// components
import { Image } from 'react-native'
import RocketsScreen from '../screens/Rockets'
import CrewMembersScreen from '../screens/CrewMembers'

const Tab = createBottomTabNavigator();

const BottomTabsnavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: myColors.darkBlue700,
        tabBarInactiveTintColor: myColors.darkBlue300,
        tabBarLabelStyle: { fontSize: 10, fontWeight: '500' },
        tabBarLabel: route.name,
        tabBarIcon: ({ focused }) => {
        let iconName = RocketFilledIcon

        if (route.name === 'Rockets') {
          iconName = focused ? RocketFilledIcon : RocketIcon
        } else if (route.name === 'CrewMembers') {
          iconName = focused ? CrewMembersFilledIcon : CrewMemebersIcon
        }

        return <Image style={{ width: 24, height: 24 }} source={iconName} />
        }
      })}
    >
      <Tab.Screen options={{ headerTitleAlign: 'center' }} name="Rockets" component={RocketsScreen} />
      <Tab.Screen options={{ headerTitleAlign: 'center' }} name="CrewMembers" component={CrewMembersScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabsnavigator