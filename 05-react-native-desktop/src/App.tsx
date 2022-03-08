import React from 'react'
import {Books} from 'containers'
import { root, StoreProvider } from 'Store'

interface IProps {}

export const App = (props: IProps) => {
  return (
    <StoreProvider value={root}>
      <Books />
    </StoreProvider>
  )
}