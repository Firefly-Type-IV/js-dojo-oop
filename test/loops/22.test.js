import { findMaxNestedArray } from '../../loops/22.js'
import assert from 'assert'

describe('findMaxNestedArray', function () {
  it('should return 9 for input [[1, 9, 3], [4, 5], [6, 8]]', function () {
    assert.strictEqual(
      findMaxNestedArray([
        [1, 9, 3],
        [4, 5],
        [6, 8]
      ]),
      9
    )
  })

  it('should return 10 for input [[10]]', function () {
    assert.strictEqual(findMaxNestedArray([[10]]), 10)
  })

  it('should return 15 for input [[1, 2], [3, 4, 5], [6, 7, 8, 9, 15]]', function () {
    assert.strictEqual(
      findMaxNestedArray([
        [1, 2],
        [3, 4, 5],
        [6, 7, 8, 9, 15]
      ]),
      15
    )
  })
})
