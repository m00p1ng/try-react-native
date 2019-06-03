import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import { emailChanged, passwordChanged, loginUser } from '../actions'
import { Button, Card, CardSection, Input, Spinner } from './common'

const LoginForm = ({
  email,
  emailChanged,
  password,
  passwordChanged,
  loginUser,
  loading,
  error,
}) => {
  const onEmailChanged = (text) => emailChanged(text)
  const onPasswordChanged = (text) => passwordChanged(text)
  const onButtonPress = () => loginUser({ email, password })

  const renderButton = () => {
    if (loading) {
      return <Spinner size="large" />
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
          label="Email"
          placeholder="email@gmail.com"
          value={email}
          onChangeText={onEmailChanged}
        />
      </CardSection>

      <CardSection>
        <Input
          secureTextEntry
          placeholder="password"
          label="Password"
          value={password}
          onChangeText={onPasswordChanged}
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

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth
  return { email, password, error, loading }
}

export default connect(
  mapStateToProps,
  {
    emailChanged,
    passwordChanged,
    loginUser,
  }
)(LoginForm)