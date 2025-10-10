import { sumSmallerNumbers } from '../../loops/01.js'
import assert from 'assert'

describe('sumSmallerNumbers', function () {
  it('should return 10 for input 5', function () {
    assert.strictEqual(sumSmallerNumbers(5), 10)
  })

  it('should return 0 for input 1', function () {
    assert.strictEqual(sumSmallerNumbers(1), 0)
  })

  it('should return 15 for input 6', function () {
    assert.strictEqual(sumSmallerNumbers(6), 15)
  })
})
