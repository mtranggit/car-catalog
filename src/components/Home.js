import React from 'react'
import {connect} from 'react-redux'
import formatDollar from '../utils/formatDollar'

export const Home = ({car}) => {
  if (car === null) {
    return (
      <div className="text-center">
        <p>No car found</p>
      </div>
    )
  }
  const {name, price, imageUrl, review} = car
  return (
    <div className="card text-center">
      <div className="card-header">Car of The Week</div>
      <img className="card-img-top" src={imageUrl} alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text" data-testid="price">
          {formatDollar(price * 100)}
        </p>
        <p className="card-text">{review}</p>
      </div>
    </div>
  )
}

function mapStateToProps({carCatalogue}) {
  const {carOfTheWeek} = carCatalogue
  return {
    car: !carOfTheWeek ? null : carOfTheWeek,
  }
}

export default connect(mapStateToProps)(Home)
