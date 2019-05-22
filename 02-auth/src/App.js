import React, { useEffect } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'

import { Header } from './components/common'
import LoginForm from './components/LoginForm'

import firToken from './firebase.json'

const App = () => {
  useEffect(() => {
    firebase.initializeApp(firToken)
  }, [])

  return (
    <View>
      <Header headerText="Authentication" />
      <LoginForm />
    </View>
  )
}

export default App