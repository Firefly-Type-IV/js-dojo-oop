import { countOccurrences } from '../../loops/14.js'
import assert from 'assert'

describe('countOccurrences', function () {
  it('should return 2 for input [1, 2, 3, 1, 4, 1] and element 1', function () {
    assert.strictEqual(countOccurrences([1, 2, 3, 1, 4, 1], 1), 3)
  })

  it('should return 0 for input [1, 2, 3, 4, 5] and element 6', function () {
    assert.strictEqual(countOccurrences([1, 2, 3, 4, 5], 6), 0)
  })

  it('should return 1 for input [1, 2, 3, 4, 5] and element 3', function () {
    assert.strictEqual(countOccurrences([1, 2, 3, 4, 5], 3), 1)
  })
})
