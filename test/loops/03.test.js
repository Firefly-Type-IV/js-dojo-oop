import { sumEvenNumbers } from '../../loops/03.js'
import assert from 'assert'

describe('sumEvenNumbers', function () {
  it('should return 6 for input 5', function () {
    assert.strictEqual(sumEvenNumbers(5), 6)
  })

  it('should return 0 for input 2', function () {
    assert.strictEqual(sumEvenNumbers(2), 0)
  })

  it('should return 20 for input 10', function () {
    assert.strictEqual(sumEvenNumbers(10), 20)
  })
})
