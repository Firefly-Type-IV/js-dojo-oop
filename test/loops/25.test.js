import { rowSums } from '../../loops/25.js'
import assert from 'assert'

describe('rowSums', function () {
  it('should return [6, 9, 6] for input [[1, 2, 3], [4, 5], [6]]', function () {
    assert.deepStrictEqual(rowSums([[1, 2, 3], [4, 5], [6]]), [6, 9, 6])
  })

  it('should return [1, 2, 3] for input [[1], [2], [3]]', function () {
    assert.deepStrictEqual(rowSums([[1], [2], [3]]), [1, 2, 3])
  })

  it('should return [10, 20, 30] for input [[10], [20], [30]]', function () {
    assert.deepStrictEqual(rowSums([[10], [20], [30]]), [10, 20, 30])
  })
})
