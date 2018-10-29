import {_getMakes, _getModels, _getCarOfTheWeek} from './_DATA.js'

export function formatMakes(makes) {
  return makes.reduce((formattedMakes, make) => {
    formattedMakes[make.id] = {
      ...make,
    }
    return formattedMakes
  }, {})
}

export function formatModels(models) {
  return models.reduce((formattedModels, model) => {
    formattedModels[model.id] = {
      ...model,
    }
    return formattedModels
  }, {})
}

function formatCarOfTheWeek(props) {
  const {carOfTheWeek, models} = props
  const formattedModels = formatModels(models)
  const car = formattedModels[carOfTheWeek.modelId]
  return {
    ...carOfTheWeek,
    ...car,
  }
}

export async function getMakes() {
  const makes = await _getMakes()
  return makes
}

export async function getModels() {
  const models = await _getModels()
  return models
}

export async function getCarOfTheWeek() {
  const car = await _getCarOfTheWeek()
  return car
}

export function getInitialData() {
  return Promise.all([_getMakes(), _getModels(), _getCarOfTheWeek()]).then(
    ([makes, models, carOfTheWeek]) => ({
      makes,
      models: models,
      carOfTheWeek: formatCarOfTheWeek({carOfTheWeek, models}),
    }),
  )
}
