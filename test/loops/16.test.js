import { calculateAverage } from '../../loops/16.js'
import assert from 'assert'

describe('calculateAverage', function () {
  it('should return 3 for input [1, 2, 3, 4, 5]', function () {
    assert.strictEqual(calculateAverage([1, 2, 3, 4, 5]), 3)
  })

  it('should return 0 for input []', function () {
    assert.strictEqual(calculateAverage([]), 0)
  })

  it('should return 4 for input [4, 4, 4, 4, 4]', function () {
    assert.strictEqual(calculateAverage([4, 4, 4, 4, 4]), 4)
  })
})
