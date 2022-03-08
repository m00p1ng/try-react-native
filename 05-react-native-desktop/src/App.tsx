import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Routes } from 'Routes'
import { root, StoreProvider } from 'Store'

interface IProps {}

export const App = (props: IProps) => {
  return (
    <StoreProvider value={root}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </StoreProvider>
  )
}