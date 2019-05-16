import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import axios from 'axios'

import AlbumDetail from './AlbumDetail'

const AlbumList = () => {
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(res => setAlbums(res.data))
  }, [])

  const renderAlbums = () => {
    return albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    )
  }

  return (
    <View>
      {renderAlbums()}
    </View>
  )
}

export default AlbumList