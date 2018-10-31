import formatDollar from '../formatDollar'

describe('format dollar', () => {
  test('should display a correct price from a given amount in cents', () => {
    const amountInCents = 1234567
    const expectedPrice = 'A$12,345.67'
    expect(formatDollar(amountInCents)).toEqual(expectedPrice)
  })
  test('should display a price without .00 from a given whole amount in cents', () => {
    const amountInCents = 1234500
    const expectedPrice = 'A$12,345'
    expect(formatDollar(amountInCents)).toEqual(expectedPrice)
  })
})
