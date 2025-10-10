import { sumOddNumbers } from '../../loops/04.js'
import assert from 'assert'

describe('sumOddNumbers', function () {
  it('should return 9 for input 6', function () {
    assert.strictEqual(sumOddNumbers(6), 9)
  })

  it('should return 0 for input 1', function () {
    assert.strictEqual(sumOddNumbers(1), 0)
  })

  it('should return 25 for input 10', function () {
    assert.strictEqual(sumOddNumbers(10), 25)
  })
})
