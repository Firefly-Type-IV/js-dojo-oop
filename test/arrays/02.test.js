import { strict as assert } from 'assert'
import { endSum } from '../../arrays/02.js'

describe('endSum', function () {
  it('should return the sum of the last two prices', function () {
    const prices = [12.99, 23.45, 34.5, 45.99, 56.75]
    assert.ok(endSum(prices) - 102.74 < 0.001)
  })

  it('should work with different price values', function () {
    const prices = [10.0, 20.0, 30.0, 40.0]
    assert.equal(endSum(prices), 70.0)
  })

  it('should handle arrays with only two prices', function () {
    const prices = [5.0, 10.0]
    assert.equal(endSum(prices), 15.0)
  })
})
