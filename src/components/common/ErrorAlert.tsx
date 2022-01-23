// components
import { Alert } from 'react-native'

const ErrorAlert = (headline = '', description = '') => {
    Alert.alert(
      headline,
      description,
      [{ text: 'OK' }]
    )
}

export default ErrorAlert