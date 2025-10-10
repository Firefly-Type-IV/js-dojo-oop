import { findIndex } from '../../loops/17.js'
import assert from 'assert'

describe('findIndex', function () {
  it('should return 2 for input [1, 2, 3, 4, 5] and element 3', function () {
    assert.strictEqual(findIndex([1, 2, 3, 4, 5], 3), 2)
  })

  it('should return -1 for input [1, 2, 3, 4, 5] and element 6', function () {
    assert.strictEqual(findIndex([1, 2, 3, 4, 5], 6), -1)
  })

  it('should return 0 for input [10, 20, 30] and element 10', function () {
    assert.strictEqual(findIndex([10, 20, 30], 10), 0)
  })
})
