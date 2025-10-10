import { sumOfDigits } from '../../loops/07.js'
import assert from 'assert'

describe('sumOfDigits', function () {
  it('should return 6 for input 123', function () {
    assert.strictEqual(sumOfDigits(123), 6)
  })

  it('should return 15 for input 555', function () {
    assert.strictEqual(sumOfDigits(555), 15)
  })

  it('should return 0 for input 0', function () {
    assert.strictEqual(sumOfDigits(0), 0)
  })
})
