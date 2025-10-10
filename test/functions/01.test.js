import assert from 'assert'
import { totalCost } from '../../functions/01.js'

describe('totalCost', function () {
  it('should return 30 when the price is 10 and the quantity is 3', function () {
    const result = totalCost(10, 3)
    assert.strictEqual(result, 30)
  })

  it('should return 0 when the price is 0 and the quantity is 3', function () {
    const result = totalCost(0, 3)
    assert.strictEqual(result, 0)
  })

  it('should return 0 when the price is 10 and the quantity is 0', function () {
    const result = totalCost(10, 0)
    assert.strictEqual(result, 0)
  })

  it('should return 100 when the price is 20 and the quantity is 5', function () {
    const result = totalCost(20, 5)
    assert.strictEqual(result, 100)
  })

  it('should handle floating point prices correctly', function () {
    const result = totalCost(10.5, 2)
    assert.strictEqual(result, 21)
  })
})
