import {RECEIVE_MAKES, RECEIVE_MODELS, CAR_OF_THE_WEEK} from '../actions/cars'
import {formatMakes, formatModels} from '../utils/api'

const initialState = {
  makes: [],
  makeEntities: {},
  models: [],
  modelEntities: {},
  carOfTheWeek: {},
}

export default function makes(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_MAKES: {
      const {makes} = action
      return {
        ...state,
        makes,
        makeEntities: formatMakes(makes),
      }
    }

    case RECEIVE_MODELS: {
      const {models} = action
      return {
        ...state,
        models,
        modelEntities: formatModels(models),
      }
    }

    case CAR_OF_THE_WEEK: {
      return {
        ...state,
        carOfTheWeek: action.car,
      }
    }

    default: {
      return state
    }
  }
}
