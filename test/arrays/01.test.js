import { strict as assert } from 'assert'
import { startSum } from '../../arrays/01.js'

describe('startSum', function () {
  it('should return the sum of the first two prices', function () {
    const prices = [12.99, 23.45, 34.5, 45.99, 56.75]
    assert.equal(startSum(prices), 36.44)
  })

  it('should work with different price values', function () {
    const prices = [10.0, 20.0, 30.0]
    assert.equal(startSum(prices), 30.0)
  })

  it('should handle arrays with only two prices', function () {
    const prices = [5.0, 10.0]
    assert.equal(startSum(prices), 15.0)
  })
})
