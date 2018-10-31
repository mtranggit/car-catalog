import React from 'react'
import {connect} from 'react-redux'
import formatDollar from '../utils/formatDollar'

export const Car = ({car}) => {
  if (!car) {
    return <p>This car does not exist</p>
  }
  return (
    <div className="card text-center">
      <div className="card-header">
        <h5>
          <span className="text-uppercase">{car.make}</span> {car.name}
        </h5>
      </div>
      <img className="card-img-top" src={car.imageUrl} alt={car.name} />
      <div className="card-body">
        <p className="card-text">{formatDollar(car.price * 100)}</p>
      </div>
    </div>
  )
}

export const mapStateToProps = ({carCatalogue}, {match}) => {
  const {id} = match.params
  const {makeEntities, modelEntities} = carCatalogue
  const model = modelEntities[id]
  if (!model) {
    return {
      car: null,
    }
  }
  const make = makeEntities[model.makeId]
  const car = Object.assign({}, {...model}, {make: make.name})
  return {
    car,
  }
}

export default connect(mapStateToProps)(Car)
