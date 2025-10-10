import { strict as assert } from 'assert'
import { filterPrices } from '../../arrays/18.js'

describe('filterPrices', function () {
  it('should filter out prices below the threshold', function () {
    const prices = [100, 200, 50, 300]
    const threshold = 100
    const expected = [200, 300]
    assert.deepEqual(filterPrices(prices, threshold), expected)
  })

  it('should work with different thresholds', function () {
    const prices = [150, 250, 75, 125]
    const threshold = 120
    const expected = [150, 250, 125]
    assert.deepEqual(filterPrices(prices, threshold), expected)
  })

  it('should handle an empty array', function () {
    const prices = []
    const threshold = 200
    const expected = []
    assert.deepEqual(filterPrices(prices, threshold), expected)
  })
})
