import makes from './data/makes.json'
import models from './data/models.json'
import carOfTheWeek from './data/carOfTheWeek.json'

export function _getMakes() {
  return new Promise((res, re) => {
    setTimeout(() => res(makes), 1000)
  })
}

export function _getModels() {
  return new Promise((res, re) => {
    setTimeout(() => res(models), 1000)
  })
}

export function _getCarOfTheWeek() {
  return new Promise((res, rej) => {
    setTimeout(() => res(carOfTheWeek), 500)
  })
}
