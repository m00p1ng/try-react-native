import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk'
import firebase from 'firebase'

import { Header } from './components/common/Header'
import LoginForm from './components/LoginForm'
import reducers from './reducers'
import firebaseSecret from './firebase.json'

function App() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(ReduxThunk)))

  useEffect(() => {
    firebase.initializeApp(firebaseSecret)
  }, [])

  return (
    <Provider store={store} >
      <Header headerText="Login" />
      <LoginForm />
    </Provider>
  )
}

export default App