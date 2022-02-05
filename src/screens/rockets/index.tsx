import React, { useState, useEffect } from 'react'

// assets
import { myColors } from '../../styles/colors'
import globalStyle from '../../styles'
import EmptyIcon from '../../assets/icons/empty.png'
import { RocketAPIResponse } from '../../interfaces'

// components
import {
  View,
  FlatList,
  Image,
  ScrollView,
  RefreshControl
} from 'react-native'
import Card from '../../components/rockets/Card'
import Spinner from '../../components/common/Spinner'
import ErrorAlert from '../../components/common/ErrorAlert'

// api
import { rocketAPI } from '../../api'

const Rockets = () => {

  const [data, setdata] = useState<RocketAPIResponse[]>([])
  const [fetched, setFetched] = useState(false)
  const [loading, setLoading] = useState(false)
  const [refreshing, setRefreshing] = useState(false)

  useEffect(() => {
    getData()
  }, [])

  const getData = async (refresh = false) => {
    try {
      refresh ? setRefreshing(true) : setLoading(true)
      const res = await rocketAPI()
      setdata(res)
    } catch (e: any) {
      if (e.message.includes('Network Error')) {
        ErrorAlert('Network Error', 'No Internet!\n Please try later')
      } else ErrorAlert('Something went wrong', 'Something went wrong. Please try later')
    } finally {
      setFetched(true)
      refresh ? setRefreshing(false) : setLoading(false)
    }
  }


  return (
    <View style={[globalStyle.container, { paddingHorizontal: 12 }]}>
      <Spinner
        isLoading={loading}
      />
      {data.length > 0
        ? (
          <FlatList
              data={data}
              showsVerticalScrollIndicator={false}
              renderItem={({ item, index }) => <Card index={index} item={item}/>}
              keyExtractor={(item) => item.id }
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
              <View style={globalStyle.emptyView}>
                <Image resizeMode='contain' style={globalStyle.emptyIcon} source={EmptyIcon}/>
              </View>
            </ScrollView>
          </View>  
          )}
    </View>
  )
}

export default Rockets
