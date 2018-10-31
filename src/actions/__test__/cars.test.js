import {
  RECEIVE_MAKES,
  RECEIVE_MODELS,
  CAR_OF_THE_WEEK,
  receiveMakes,
  receiveModels,
  receiveCarOfTheWeek,
} from '../cars'

describe('actions', () => {
  test('should create a correct RECEIVE_MAKES action', () => {
    const makes = [{id: 1, name: 'One'}, {id: 2, name: 'Two'}]
    const expectedAction = {
      type: RECEIVE_MAKES,
      makes,
    }
    expect(receiveMakes(makes)).toEqual(expectedAction)
  })
  test('should create a correct RECEIVE_MODELS action', () => {
    const models = [{id: 1, name: 'One'}, {id: 2, name: 'Two'}]
    const expectedAction = {
      type: RECEIVE_MODELS,
      models,
    }
    expect(receiveModels(models)).toEqual(expectedAction)
  })
  test('should create a correct CAR_OF_THE_WEEK action', () => {
    const carOfTheWeek = {id: 1, name: 'Nissan', price: 1}
    const expectedAction = {
      type: CAR_OF_THE_WEEK,
      car: carOfTheWeek,
    }
    expect(receiveCarOfTheWeek(carOfTheWeek)).toEqual(expectedAction)
  })
})
