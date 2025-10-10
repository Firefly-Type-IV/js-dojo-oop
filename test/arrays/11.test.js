import { strict as assert } from 'assert'
import { increasePrices } from '../../arrays/11.js'

function approximatelyEqual(actual, expected, tolerance = 1e-10) {
  if (Array.isArray(actual) && Array.isArray(expected)) {
    if (actual.length !== expected.length) {
      return false
    }
    for (let i = 0; i < actual.length; i++) {
      if (Math.abs(actual[i] - expected[i]) > tolerance) {
        return false
      }
    }
    return true
  }
  return Math.abs(actual - expected) <= tolerance
}

describe('increasePrices', function () {
  it('should increase each price by 10%', function () {
    const prices = [100, 200, 300]
    const expected = [110, 220, 330]
    const result = increasePrices(prices)
    assert(approximatelyEqual(result, expected))
  })

  it('should work with different prices', function () {
    const prices = [50, 150, 250]
    const expected = [55, 165, 275]
    const result = increasePrices(prices)
    assert(approximatelyEqual(result, expected))
  })

  it('should handle an empty array', function () {
    const prices = []
    const expected = []
    const result = increasePrices(prices)
    assert.deepEqual(result, expected) // No rounding issues with an empty array
  })
})
