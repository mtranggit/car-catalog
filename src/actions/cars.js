import {showLoading, hideLoading} from 'react-redux-loading-bar'
import {
  getMakes,
  getModels,
  getCarOfTheWeek,
  getInitialData,
} from '../utils/api'

export const RECEIVE_MAKES = 'RECEIVE_MAKES'
export const RECEIVE_MODELS = 'RECEIVE_MODELS'
export const CAR_OF_THE_WEEK = 'CAR_OF_THE_WEEK'

export function receiveMakes(makes) {
  return {
    type: RECEIVE_MAKES,
    makes,
  }
}

export function receiveModels(models) {
  return {
    type: RECEIVE_MODELS,
    models,
  }
}

export function receiveCarOfTheWeek(car) {
  return {
    type: CAR_OF_THE_WEEK,
    car,
  }
}

export const handleMakes = () => async dispatch => {
  const makes = await getMakes()
  dispatch(receiveMakes(makes))
}

export const handleModels = () => async dispatch => {
  const models = await getModels()
  dispatch(receiveMakes(models))
}

export const handleCarOfTheWeek = () => async dispatch => {
  const car = await getCarOfTheWeek()
  dispatch(receiveCarOfTheWeek(car))
}

export const handleInitialData = () => async dispatch => {
  dispatch(showLoading())
  const {makes, models, carOfTheWeek} = await getInitialData()
  dispatch(receiveMakes(makes))
  dispatch(receiveModels(models))
  dispatch(receiveCarOfTheWeek(carOfTheWeek))
  dispatch(hideLoading())
}
