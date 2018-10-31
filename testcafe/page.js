/* eslint-disable */
import {Selector, t} from 'testcafe'

class Header {
  constructor() {
    this.brandLink = Selector('[data-testid=brand]')
    this.homeLink = Selector('[data-testid=home]')
    this.searchLink = Selector('[data-testid=search]')
  }
}

class Home {
  constructor() {
    this.cardHeader = Selector('.card-header')
    this.cardTitle = Selector('.card-title')
    this.cardPrice = Selector('[data-testid="price"]')
  }
}

class Car {
  constructor() {
    this.cardHeader = Selector('.card-header')
    this.carMake = Selector('[data-testid="car-make"]')
    this.carModel = Selector('[data-testid="car-model"]')
    this.carPrice = Selector('[data-testid="price"]')
    this.carNotFound = Selector('[data-testid="car-not-found"]')
  }
}

class Search {
  constructor() {
    this.cardHeader = Selector('.card-header')
    this.makeInput = Selector('select[name="makeId"]')
    this.modelInput = Selector('select[name="modelId"]')
    this.submitButton = Selector('input[type="submit"]')
  }

  async submitSearch(make, model) {
    await t
      .click(this.makeInput)
      .click(this.makeInput.find('option').withText(make))
      .click(this.modelInput)
      .click(this.modelInput.find('option').withText(model))
      .click(this.submitButton)
  }
}

export default class Page {
  constructor() {
    this.homePage = new Home()
    this.searchPage = new Search()
    this.carPage = new Car()
    this.headerSection = new Header()
  }
}
