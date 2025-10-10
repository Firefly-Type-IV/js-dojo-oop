import { calculateCompoundInterest } from '../../loops/08.js'
import assert from 'assert'

describe('calculateCompoundInterest', function () {
  it('should return 110.25 for principal 100, rate 0.05, periods 2', function () {
    assert.strictEqual(
      calculateCompoundInterest(100, 0.05, 2).toFixed(2),
      '110.25'
    )
  })

  it('should return 105.00 for principal 100, rate 0.05, periods 1', function () {
    assert.strictEqual(
      calculateCompoundInterest(100, 0.05, 1).toFixed(2),
      '105.00'
    )
  })

  it('should return 100.00 for principal 100, rate 0.00, periods 5', function () {
    assert.strictEqual(
      calculateCompoundInterest(100, 0.0, 5).toFixed(2),
      '100.00'
    )
  })
})
