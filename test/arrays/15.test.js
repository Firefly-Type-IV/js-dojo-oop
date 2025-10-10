import { strict as assert } from 'assert'
import { convertToFahrenheit } from '../../arrays/15.js'

describe('convertToFahrenheit', function () {
  it('should convert temperatures from Celsius to Fahrenheit', function () {
    const tempsCelsius = [0, 20, 30]
    const expected = [32, 68, 86]
    assert.deepEqual(convertToFahrenheit(tempsCelsius), expected)
  })

  it('should work with different temperatures', function () {
    const tempsCelsius = [-10, 0, 10]
    const expected = [14, 32, 50]
    assert.deepEqual(convertToFahrenheit(tempsCelsius), expected)
  })

  it('should handle an empty array', function () {
    const tempsCelsius = []
    const expected = []
    assert.deepEqual(convertToFahrenheit(tempsCelsius), expected)
  })
})
