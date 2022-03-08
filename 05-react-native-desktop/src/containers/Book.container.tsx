import { RouteProp } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native'
import { IRootStackParams } from 'Routes'
import tw from 'tailwind-rn'

interface IProps {
  route: RouteProp<IRootStackParams, 'Book'>
}

export const BookContainer = ({route}: IProps) => {
  let { title } = route.params

  return (
    <View style={tw('flex-1')}>
      <Text>{title}</Text>
    </View>
  )
}