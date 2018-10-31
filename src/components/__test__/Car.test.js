import React from 'react'
import {render} from 'react-testing-library'
import {Car, mapStateToProps} from '../Car'

test('should return a correct formatted car object', () => {
  const props = {
    match: {
      params: {
        id: '10',
      },
    },
  }
  const state = {
    carCatalogue: {
      makeEntities: {
        '1': {id: '1', name: 'Audi'},
        '2': {id: '2', name: 'Porche'},
      },
      modelEntities: {
        '10': {
          id: '10',
          makeId: '1',
          name: 'Q7 e-tron',
          imageUrl: 'somestring',
          price: 12345,
        },
        '20': {
          id: '20',
          makeId: '2',
          name: 'Cayenne GTS',
          imageUrl: 'somestring',
          price: 6789,
        },
      },
    },
  }
  const expected = {
    car: {
      id: '10',
      imageUrl: 'somestring',
      make: 'Audi',
      makeId: '1',
      name: 'Q7 e-tron',
      price: 12345,
    },
  }
  expect(mapStateToProps(state, props)).toEqual(expected)
})

test('should display car component correctly', () => {
  const props = {
    car: {
      id: 1,
      make: 'Audi',
      name: 'Q7 e-tron',
      imageUrl: 'somestring',
      price: 12345,
    },
  }
  const {container, debug, getByText} = render(<Car {...props} />)
  // debug()
  expect(container).toBeDefined()
  expect(container.querySelector('.card.text-center')).toBeTruthy()
  expect(container.querySelector('.card-header')).toBeTruthy()
  expect(container.querySelector('.card-img-top')).toBeTruthy()
  expect(container.querySelector('.card-body')).toBeTruthy()
  expect(container.querySelector('.card-text')).toBeTruthy()
  getByText('Audi')
  getByText('Q7 e-tron')
  getByText('A$12,345')
  expect(container.querySelector('img[src="somestring"')).toBeTruthy()
})
