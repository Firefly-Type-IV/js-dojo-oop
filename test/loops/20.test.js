import { calculateInventoryValue } from '../../loops/20.js'
import assert from 'assert'

describe('calculateInventoryValue', function () {
  it('should return 750 for input quantities [10, 5, 2] and prices [20, 50, 100]', function () {
    assert.strictEqual(calculateInventoryValue([10, 5, 2], [20, 50, 100]), 650)
  })

  it('should return 0 for input quantities [] and prices []', function () {
    assert.strictEqual(calculateInventoryValue([], []), 0)
  })

  it('should return 500 for input quantities [5, 5] and prices [50, 50]', function () {
    assert.strictEqual(calculateInventoryValue([5, 5], [50, 50]), 500)
  })
})
