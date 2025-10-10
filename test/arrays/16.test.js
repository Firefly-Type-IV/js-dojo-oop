import { strict as assert } from 'assert'
import { applyDiscount } from '../../arrays/16.js'

describe('applyDiscount', function () {
  it('should apply the discount to each price', function () {
    const prices = [100, 200, 300]
    const discount = 10
    const expected = [90, 180, 270]
    assert.deepEqual(applyDiscount(prices, discount), expected)
  })

  it('should work with different discounts', function () {
    const prices = [50, 150, 250]
    const discount = 20
    const expected = [40, 120, 200]
    assert.deepEqual(applyDiscount(prices, discount), expected)
  })

  it('should handle an empty array', function () {
    const prices = []
    const discount = 15
    const expected = []
    assert.deepEqual(applyDiscount(prices, discount), expected)
  })
})
