import { View, Text } from 'react-native'
import React from 'react'

const ChildComponent = ({name}) => {
  return (
    <View>
      <Text>ChildComponent {name}</Text>
      <Text>Showing in parent component</Text>
    </View>
  )
}

export default ChildComponent