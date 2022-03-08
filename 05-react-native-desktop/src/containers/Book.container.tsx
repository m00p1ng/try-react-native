import { RouteProp } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native'
import WebView from 'react-native-webview'
import { IRootStackParams } from 'Routes'
import tw from 'tailwind-rn'

interface IProps {
  route: RouteProp<IRootStackParams, 'Book'>
}

export const BookContainer = ({route}: IProps) => {
  let { title } = route.params

  return (
    <View style={tw('flex-1')}>
      <WebView source={{uri: `https://google.com/search?q=${title}`}} />
    </View>
  )
}