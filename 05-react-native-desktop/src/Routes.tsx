import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import tw from 'tailwind-rn'
import { BooksContainer } from 'containers/Books.container'
import { BookContainer } from 'containers/Book.container'

export type IRootStackParams = {
  Home: undefined,
  Book: { title: string }
}

let RootStack = createStackNavigator<IRootStackParams>();

export let Routes = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#111',
        },
        headerTitleStyle: {
          color: 'white'
        },
        headerBackTitleStyle: {
          color: 'white'
        },
        headerTintColor: 'white',
        cardStyle: {
          backgroundColor: '#222'
        },
      }}
    >
      <RootStack.Screen
        name="Home"
        component={BooksContainer}
        options={{
          headerShown: false
        }}
      />
      <RootStack.Screen
        name="Book"
        component={BookContainer}
      />
    </RootStack.Navigator>
  )
}