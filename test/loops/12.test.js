import { findMax } from '../../loops/12.js'
import assert from 'assert'

describe('findMax', function () {
  it('should return 5 for input [1, 2, 3, 4, 5]', function () {
    assert.strictEqual(findMax([1, 2, 3, 4, 5]), 5)
  })

  it('should return 1 for input [1]', function () {
    assert.strictEqual(findMax([1]), 1)
  })

  it('should return 10 for input [10, 5, 8, 3]', function () {
    assert.strictEqual(findMax([10, 5, 8, 3]), 10)
  })
})
