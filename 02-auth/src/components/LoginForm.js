import React, { useState } from 'react'
import { Button, Card, CardSection, Input } from './common'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Card>
      <CardSection>
        <Input
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
      <CardSection>
        <Button>Log in</Button>
      </CardSection>
    </Card>
  )
}

export default LoginForm