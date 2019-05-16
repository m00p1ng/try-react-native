import React from 'react'

import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'

export default function App() {
  return (
    <>
      <Header headerText="Albums" />
      <AlbumList />
    </>
  )
}
