import React from 'react'
import {render} from 'react-testing-library'
import {App} from './App'

it.skip('renders without crashing', () => {
  const {getByText} = render(<App />)
  expect(getByText('')).toBeInTheDOM()
})
