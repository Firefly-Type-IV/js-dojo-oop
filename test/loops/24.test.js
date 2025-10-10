import { flattenNestedArray } from '../../loops/24.js'
import assert from 'assert'

describe('flattenNestedArray', function () {
  it('should return [1, 2, 3, 4, 5, 6] for input [[1, 2, 3], [4, 5], [6]]', function () {
    assert.deepStrictEqual(
      flattenNestedArray([[1, 2, 3], [4, 5], [6]]),
      [1, 2, 3, 4, 5, 6]
    )
  })

  it('should return [] for input [[]]', function () {
    assert.deepStrictEqual(flattenNestedArray([[]]), [])
  })

  it('should return [7, 8, 9] for input [[7], [8], [9]]', function () {
    assert.deepStrictEqual(flattenNestedArray([[7], [8], [9]]), [7, 8, 9])
  })
})
