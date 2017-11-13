import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Store from './store'
import App from './components/app.jsx'

render (
  <App />,
  document.querySelector('#app')
)