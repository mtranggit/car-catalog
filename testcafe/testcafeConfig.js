/**
 * The end point config module for testcafe
 */

const test = {
  baseUrl: 'http://localhost:3000',
  // baseUrl: 'http://172.18.121.241:3000',
}

const prod = {
  baseUrl: 'http://172.18.121.241:3000',
  // baseUrl: 'https://yourprodurl.com',
}

const config = process.env.APP_TEST_ENV === 'test' ? test : prod

export default {...config}
