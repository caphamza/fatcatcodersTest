import React from 'react'

// assets
import { myColors } from '../../theme/global'

// components
import { ActivityIndicator, Dimensions } from 'react-native'

const { height, width } = Dimensions.get('screen')

const SpinnerComponent = ({ isLoading }: { isLoading: boolean }) => {

  return (
    <ActivityIndicator
      size='large'
      color={myColors.darkBlue700}
      animating={isLoading}
      style={{
        elevation: 10,
        height: isLoading ? height : 0,
        width: isLoading ? width : 0,
        position: 'absolute',
        zIndex: 1,
        backgroundColor: 'white',
        opacity: 0.7
      }}
    />
  )
}

export default SpinnerComponent