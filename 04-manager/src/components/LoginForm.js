import React from 'react'
import { connect } from 'react-redux'

import { emailChanged, passwordChanged } from '../actions'
import { Button, Card, CardSection, Input } from './common'

const LoginForm = ({ email, emailChanged, password, passwordChanged }) => {
  const onEmailChanged = (text) => {
    emailChanged(text)
  }

  const onPasswordChanged = (text) => {
    passwordChanged(text)
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

      <CardSection>
        <Button>
          Log in
        </Button>
      </CardSection>
    </Card>
  )
}

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
    password: state.auth.password,
  }
}

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm)