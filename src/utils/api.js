import {_getMakes, _getModels, _getCarOfTheWeek} from './_DATA.js'

export function formatEntities(entities) {
  return entities.reduce((formattedEntities, entity) => {
    formattedEntities[entity.id] = {
      ...entity,
    }
    return formattedEntities
  }, {})
}

export function formatCarOfTheWeek(props) {
  const {carOfTheWeek, models} = props
  const formattedModels = formatEntities(models)
  const car = formattedModels[carOfTheWeek.modelId]
  delete carOfTheWeek.modelId
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
