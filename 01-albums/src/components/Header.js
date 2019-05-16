import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Header = ({ headerText }) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{headerText}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    paddingTop: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
  },
  textStyle: {
    fontSize: 20,
  },
})

export default Header