import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import LoginForm from './components/LoginForm'
import reducers from './reducers'

function App() {
  return (
    <Provider store={createStore(reducers)} >
      <View>
        <LoginForm />
      </View>
    </Provider>
  )
}

export default App