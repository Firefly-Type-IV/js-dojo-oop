import { reverseArray } from '../../loops/15.js'
import assert from 'assert'

describe('reverseArray', function () {
  it('should return [5, 4, 3, 2, 1] for input [1, 2, 3, 4, 5]', function () {
    assert.deepStrictEqual(reverseArray([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1])
  })

  it('should return [] for input []', function () {
    assert.deepStrictEqual(reverseArray([]), [])
  })

  it('should return [1] for input [1]', function () {
    assert.deepStrictEqual(reverseArray([1]), [1])
  })
})
