import {formatEntities, formatCarOfTheWeek} from '../api'

describe('api utils', () => {
  test('should return a correct formatted entities ', () => {
    const makes = [
      {id: 1, name: 'One'},
      {id: 2, name: 'Two'},
      {id: 3, name: 'Three'},
    ]
    const expectedMakeEntities = {
      '1': {id: 1, name: 'One'},
      '2': {id: 2, name: 'Two'},
      '3': {id: 3, name: 'Three'},
    }
    expect(formatEntities(makes)).toEqual(expectedMakeEntities)
  })
  test('should return car of the week with a correct format', () => {
    const carOfTheWeek = {modelId: 1, review: 'Nice car'}
    const model = {
      id: 1,
      makeId: 1,
      name: 'Q7',
      price: 1,
      imageUrl: 'http://somewhere.com',
    }
    const models = [model]
    const expectedCarOfTheWeek = {
      review: carOfTheWeek.review,
      ...model,
    }
    expect(formatCarOfTheWeek({models, carOfTheWeek})).toEqual(
      expectedCarOfTheWeek,
    )
  })
})
