import React from 'react'
import {render} from 'react-testing-library'
import {Home} from '../Home'

test('should display home component correctly', () => {
  const props = {
    car: {
      id: 1,
      name: 'Q7 e-tron',
      imageUrl: 'somestring',
      price: 12345,
    },
  }
  const {container, debug, getByText} = render(<Home {...props} />)
  // debug()
  expect(container).toBeDefined()
  expect(container.querySelector('.card.text-center')).toBeTruthy()
  expect(container.querySelector('.card-header')).toBeTruthy()
  expect(container.querySelector('.card-img-top')).toBeTruthy()
  expect(container.querySelector('.card-body')).toBeTruthy()
  expect(container.querySelector('h5.card-title')).toBeTruthy()
  expect(container.querySelector('.card-text')).toBeTruthy()
  getByText('Q7 e-tron')
  getByText('A$12,345')
  expect(container.querySelector('img[src="somestring"')).toBeTruthy()
})
