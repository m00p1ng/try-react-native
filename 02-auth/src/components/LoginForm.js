import React, { useState } from 'react'
import { Text, StyleSheet } from 'react-native'
import firebase from 'firebase'

import { Button, Card, CardSection, Input, Spinner } from './common'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const onButtonPress = () => {
    setError('')
    setLoading(true)

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(onLoginSuccess)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(onLoginSuccess)
        .catch(onLoginFail)
      })
  }

  const onLoginFail = () => {
    setLoading(false)
    setError('Authentication Failed.')
  }

  const onLoginSuccess = () => {
    setEmail('')
    setPassword('')
    setLoading(false)
    setError('')
  }

  const renderButton = () => {
    if (loading) {
      return <Spinner size="small" />
    }

    return (
      <Button onPress={onButtonPress}>
        Log in
      </Button>
    )
  }

  return (
    <Card>
      <CardSection>
        <Input
          autoCapitalize='none'
          placeholder="user@gmail.com"
          label="Email"
          value={email}
          onChangeText={email => setEmail(email)}
        />
      </CardSection>

      <CardSection>
        <Input
          secureTextEntry
          placeholder="password"
          label="Password"
          value={password}
          onChangeText={password => setPassword(password)}
        />
      </CardSection>

      <Text style={styles.errorTextStyle}>
        {error}
      </Text>

      <CardSection>
        {renderButton()}
      </CardSection>
    </Card>
  )
}

const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  }
})

export default LoginForm