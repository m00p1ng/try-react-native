import React from 'react'
import { FlatList } from 'react-native'
import { connect } from 'react-redux'

import ListItem from './ListItem'

function LibraryList({ libraries }) {
  return (
    <FlatList
      data={libraries}
      renderItem={({ item }) => <ListItem library={item} />}
      keyExtractor={(_item, index) => index.toString()}
    />
  )
}

const mapStateToProps = (state) => {
  return {
    libraries: state.libraries,
  }
}

export default connect(mapStateToProps)(LibraryList)