import React, { useEffect } from 'react'
import { Text, StyleSheet, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native'
import { connect } from 'react-redux'

import { CardSection } from './common'
import * as actions from '../actions'

function ListItem({ library, selectLibrary, expanded }) {
  useEffect(() => {
    LayoutAnimation.spring()
  })
  const renderDescription = () => {
    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>
            {library.description}
          </Text>
        </CardSection>
      )
    }
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => selectLibrary(library.id)}
    >
      <View>
        <CardSection>
          <Text style={styles.titleStyle}>
            {library.title}
          </Text>
        </CardSection>
        {renderDescription()}
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
})

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id

  return { expanded }
}

export default connect(mapStateToProps, actions)(ListItem)