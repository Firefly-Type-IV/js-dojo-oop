import { sumArray } from '../../loops/11.js'
import assert from 'assert'

describe('sumArray', function () {
  it('should return 15 for input [1, 2, 3, 4, 5]', function () {
    assert.strictEqual(sumArray([1, 2, 3, 4, 5]), 15)
  })

  it('should return 0 for input []', function () {
    assert.strictEqual(sumArray([]), 0)
  })

  it('should return 6 for input [1, 2, 3]', function () {
    assert.strictEqual(sumArray([1, 2, 3]), 6)
  })
})
