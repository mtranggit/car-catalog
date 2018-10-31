import React from 'react'
import {render, fireEvent, cleanup} from 'react-testing-library'
import 'jest-dom/extend-expect'
import {Search} from '../Search'

let props
let container, getByText, debug

beforeEach(() => {
  props = {
    makes: [
      {
        id: 1,
        name: 'Audi',
      },
      {
        id: 2,
        name: 'Porche',
      },
    ],
    models: [
      {
        id: 10,
        makeId: 1,
        name: 'Q7 e-tron',
      },
      {
        id: 20,
        makeId: 1,
        name: 'Q5 rs',
      },
      {
        id: 30,
        makeId: 2,
        name: 'Cayenne GTS',
      },
      {
        id: 40,
        makeId: 2,
        name: '911 Carrera 4s',
      },
      {
        id: 50,
        makeId: 2,
        name: 'Panaera 4S',
      },
    ],
  }
  ;({container, debug, getByText} = render(<Search {...props} />))
})

afterEach(cleanup)

test('should display search component correctly', () => {
  expect(container).toBeDefined()
  // debug()
  expect(container.querySelector('.card')).toBeTruthy()
  expect(container.querySelector('.card-header')).toBeTruthy()
  getByText('Search Catalog')
  expect(container.querySelector('.card-body')).toBeTruthy()
  expect(container.querySelector('.form-group')).toBeTruthy()
  const selectMakeInput = container.querySelector('select[name="makeId"]')
  expect(selectMakeInput.children.length).toEqual(3)
  expect(selectMakeInput.options[0].text).toEqual('Select a make')
  expect(selectMakeInput.options[1].text).toEqual('Audi')
  expect(selectMakeInput.options[2].text).toEqual('Porche')
  const selectModelInput = container.querySelector('select[name="modelId"]')
  expect(selectModelInput.children.length).toEqual(1)
  expect(selectModelInput.options[0].text).toEqual('Select a model')
  const submitButton = container.querySelector('input[type=submit]')
  expect(submitButton).toBeDisabled()
})

test('should enable submit buton when both make and model are selected', () => {
  const selectMakeInput = container.querySelector('select[name="makeId"]')
  const selectModelInput = container.querySelector('select[name="modelId"]')
  const submitButton = container.querySelector('input[type=submit]')
  expect(submitButton).toBeDisabled()
  fireEvent.change(selectMakeInput, {target: {value: '1'}})
  expect(selectMakeInput.value).toBe('1')
  fireEvent.change(selectModelInput, {target: {value: '10'}})
  expect(selectModelInput.value).toBe('10')
  expect(submitButton).not.toBeDisabled()
  // debug()
})
