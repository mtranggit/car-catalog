import React from 'react'
import {render} from 'react-testing-library'
import {Header} from '../Header'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

test('should display header component correctly', () => {
  const props = {
    branding: 'CarCorp',
  }
  const {container, debug, getByText} = render(
    <Router>
      <Header {...props} />
    </Router>,
  )
  // debug()
  expect(container).toBeDefined()
  expect(
    container.querySelector(
      'nav.navbar.navbar-expand-sm.navbar-dark.bg-primary.mb-3.py-0',
    ),
  ).toBeTruthy()
  expect(container.querySelector('.container')).toBeTruthy()
  expect(container.querySelector('.navbar-brand')).toBeTruthy()
  expect(container.querySelector('ul.navbar-nav')).toBeTruthy()
  expect(container.querySelector('a.nav-link.home')).toBeTruthy()
  expect(container.querySelector('a.nav-link.search')).toBeTruthy()
  expect(container.querySelectorAll('li.nav-item').length).toEqual(2)
  getByText('CarCorp')
  getByText('Home')
  getByText('Search')
})
