import { findMin } from '../../loops/13.js'
import assert from 'assert'

describe('findMin', function () {
  it('should return 1 for input [1, 2, 3, 4, 5]', function () {
    assert.strictEqual(findMin([1, 2, 3, 4, 5]), 1)
  })

  it('should return 1 for input [1]', function () {
    assert.strictEqual(findMin([1]), 1)
  })

  it('should return 3 for input [10, 5, 8, 3]', function () {
    assert.strictEqual(findMin([10, 5, 8, 3]), 3)
  })
})
