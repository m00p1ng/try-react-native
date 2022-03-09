import React, { useState } from 'react'
import {
  TouchableOpacityProps,
  StyleProp,
  ViewProps,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import tw from 'tailwind-rn'

interface IProps extends TouchableOpacityProps {
  title: string
  type: 'primary' | 'secondary'
  style?: StyleProp<ViewProps>
}

export const Button = ({ title, style, type, ...props }: IProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const styles = {
    primary: `bg-green-300 p-3 w-24 items-center`,
    secondary: `bg-blue-500 p-3 w-24 items-center`
  }

  return (
    <TouchableOpacity
      {...props}
      // @ts-ignore
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <View style={[tw(styles[type]), style]}>
        <Text style={tw(`text-white ${isHovered ? 'font-bold' : ''}`)}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}