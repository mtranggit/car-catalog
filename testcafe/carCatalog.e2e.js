/* eslint-disable */
import {Selector, t} from 'testcafe'

import Page from './page'
import config from './testcafeConfig'

const page = new Page()

fixture`Car Catalogue`.page`${config.baseUrl}`

test('Home page should display the car of the week', async t => {
  await t
    .expect(page.homePage.cardHeader.innerText)
    .eql('Car of The Week')
    .expect(page.homePage.cardTitle.innerText)
    .eql('MX-5')
    .expect(page.homePage.cardPrice.innerText)
    .eql('A$90,000')
})

test('Search should show Porsche 911 car result correctly', async () => {
  await t
    .click(page.headerSection.searchLink)
    .expect(page.searchPage.cardHeader.innerText)
    .eql('Search Catalog')
  // submit search for Porsche 911 Carrera 4s
  await page.searchPage.submitSearch('Porsche', '911 Carrera 4s')
  await t
    .expect(page.carPage.carMake.innerText)
    .contains('PORSCHE')
    .expect(page.carPage.carModel.innerText)
    .eql('911 Carrera 4s')
    .expect(page.carPage.carPrice.innerText)
    .eql('A$297,130')
})

test('Search should show Porsche Cayenne GTS car result correctly', async () => {
  await t
    .click(page.headerSection.searchLink)
    .expect(page.searchPage.cardHeader.innerText)
    .eql('Search Catalog')
  // submit search for Porsche Cayenne GTS
  await page.searchPage.submitSearch('Porsche', 'Cayenne GTS')
  await t
    .expect(page.carPage.carMake.innerText)
    .contains('PORSCHE')
    .expect(page.carPage.carModel.innerText)
    .eql('Cayenne GTS')
    .expect(page.carPage.carPrice.innerText)
    .eql('A$171,605')
})

test('Should show a car model via direct url with a valid modelId', async () => {
  await t
    .navigateTo(`${config.baseUrl}/make/model/400`)
    .expect(page.carPage.carMake.innerText)
    .eql('AUDI')
    .expect(page.carPage.carModel.innerText)
    .eql('S5')
    .expect(page.carPage.carPrice.innerText)
    .eql('A$165,000')
  await t
    .navigateTo(`${config.baseUrl}/make/model/220`)
    .expect(page.carPage.carMake.innerText)
    .eql('NISSAN')
    .expect(page.carPage.carModel.innerText)
    .eql('GT-R')
    .expect(page.carPage.carPrice.innerText)
    .eql('A$180,000')
})

test('Should show car not found message via direct url with an invalid modelId', async () => {
  await t
    .navigateTo(`${config.baseUrl}/make/model/000`)
    .expect(page.carPage.carNotFound.innerText)
    .eql('This car does not exist')
})
