import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'

import { Button, Header, Spinner } from './components/common'
import LoginForm from './components/LoginForm'

import firToken from './firebase.json'

const App = () => {
  const [loggedIn, setLoggedIn] = useState(null)
  useEffect(() => {
    firebase.initializeApp(firToken)
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        setLoggedIn(true)
      } else {
        setLoggedIn(false)
      }
    })
  }, [])

  const renderContent = () => {
    switch(loggedIn) {
      case true:
        return <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
      case false:
        return <LoginForm />
      default:
        return <Spinner />
    }
  }

  return (
    <View>
      <Header headerText="Authentication" />
      {renderContent()}
    </View>
  )
}

export default App