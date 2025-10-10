import assert from 'assert'
import { compoundInterest } from '../../functions/25.js'

describe('compoundInterest', function () {
  it('should return approximately 1628.89 when principal is 1000, rate is 0.05, and time is 10', function () {
    const result = compoundInterest(1000, 0.05, 10)
    assert.strictEqual(result.toFixed(2), '1628.89')
  })

  it('should return 1000 when principal is 1000, rate is 0, and time is 10', function () {
    const result = compoundInterest(1000, 0, 10)
    assert.strictEqual(result.toFixed(2), '1000.00')
  })

  it('should return 1000 when principal is 1000, rate is 0.05, and time is 0', function () {
    const result = compoundInterest(1000, 0.05, 0)
    assert.strictEqual(result.toFixed(2), '1000.00')
  })

  it('should handle different rates and times correctly', function () {
    const result = compoundInterest(2000, 0.03, 5)
    assert.strictEqual(result.toFixed(2), '2318.55')
  })
})
