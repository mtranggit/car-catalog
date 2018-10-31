import carReducer from '../carReducer'
import {
  RECEIVE_MAKES,
  RECEIVE_MODELS,
  CAR_OF_THE_WEEK,
} from '../../actions/cars'

describe('car reducer', () => {
  let initialState
  beforeEach(() => {
    initialState = {
      makes: [],
      makeEntities: {},
      models: [],
      modelEntities: {},
      carOfTheWeek: {},
    }
  })
  test('should return the initial state', () => {
    expect(carReducer(undefined, {})).toEqual(initialState)
  })
  test('should handle RECEIVE_MAKES action', () => {
    const makes = [
      {id: 1, name: 'One'},
      {id: 2, name: 'Two'},
      {id: 3, name: 'Three'},
    ]
    const makeEntities = {
      '1': {id: 1, name: 'One'},
      '2': {id: 2, name: 'Two'},
      '3': {id: 3, name: 'Three'},
    }
    const action = {
      type: RECEIVE_MAKES,
      makes,
    }
    const expectedState = Object.assign(
      {...initialState},
      {makes, makeEntities},
    )
    expect(carReducer(undefined, action)).toEqual(expectedState)
  })
  test('should handle RECEIVE_MODELS action', () => {
    const models = [
      {
        id: 1,
        makeId: 1,
        name: 'Q7',
        price: 1,
        imageUrl: 'http://somewhere.com',
      },
      {
        id: 2,
        makeId: 1,
        name: 'Q5',
        price: 11,
        imageUrl: 'http://somewhere.com',
      },
    ]
    const modelEntities = {
      1: {
        id: 1,
        makeId: 1,
        name: 'Q7',
        price: 1,
        imageUrl: 'http://somewhere.com',
      },
      2: {
        id: 2,
        makeId: 1,
        name: 'Q5',
        price: 11,
        imageUrl: 'http://somewhere.com',
      },
    }
    const action = {
      type: RECEIVE_MODELS,
      models,
    }
    const expectedState = Object.assign(
      {...initialState},
      {models, modelEntities},
    )
    expect(carReducer(undefined, action)).toEqual(expectedState)
  })
  test('should handle CAR_OF_THE_WEEK action', () => {
    const carOfTheWeek = {
      id: 1,
      name: 'Q7',
      price: 1,
      review: 'Nice car',
    }
    const action = {
      type: CAR_OF_THE_WEEK,
      car: carOfTheWeek,
    }
    const expectedState = Object.assign({...initialState}, {carOfTheWeek})
    expect(carReducer(undefined, action)).toEqual(expectedState)
  })
})
