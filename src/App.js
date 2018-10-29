import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import LoadingBar from 'react-redux-loading-bar'

import {handleInitialData} from './actions/cars'
import Header from './components/Header'
import Home from './components/Home'
import Search from './components/Search'
import Car from './components/Car'
import NotFound from './components/NotFound'

import 'bootstrap/dist/css/bootstrap.min.css'
// import logo from './logo.svg'
import './App.scss'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Header branding="Car Catalogue" />
          <LoadingBar />
          <div className="container pt-3">
            {this.props.loading === true ? null : (
              <Switch>
                <Route path="/search" component={Search} />
                <Route path="/make/model/:id" component={Car} />
                <Route exact path="/" component={Home} />
                <Route component={NotFound} />
              </Switch>
            )}
          </div>
        </div>
      </Router>
    )
  }
}

function mapStateToProps({loadingBar}) {
  const {default: loading} = loadingBar
  return {
    loading: loading === 1,
  }
}
export default connect(mapStateToProps)(App)
