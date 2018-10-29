import {combineReducers} from 'redux'
import {loadingBarReducer} from 'react-redux-loading-bar'
import carReducer from './carReducer'

export default combineReducers({
  carCatalogue: carReducer,
  loadingBar: loadingBarReducer,
})
