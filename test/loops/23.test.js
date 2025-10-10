import { countGreaterThan } from '../../loops/23.js'
import assert from 'assert'

describe('countGreaterThan', function () {
  it('should return 3 for input [[1, 9, 3], [4, 5], [6, 8]] and value 5', function () {
    assert.strictEqual(
      countGreaterThan(
        [
          [1, 9, 3],
          [4, 5],
          [6, 8]
        ],
        5
      ),
      3
    )
  })

  it('should return 0 for input [[1, 2], [3, 4]] and value 5', function () {
    assert.strictEqual(
      countGreaterThan(
        [
          [1, 2],
          [3, 4]
        ],
        5
      ),
      0
    )
  })

  it('should return 5 for input [[10, 20], [30, 40]] and value 15', function () {
    assert.strictEqual(
      countGreaterThan(
        [
          [10, 20],
          [30, 40]
        ],
        15
      ),
      3
    )
  })
})
