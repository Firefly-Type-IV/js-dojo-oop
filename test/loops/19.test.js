import { countPositiveReviews } from '../../loops/19.js'
import assert from 'assert'

describe('countPositiveReviews', function () {
  it('should return 3 for input [5, 3, 4, 2, 5]', function () {
    assert.strictEqual(countPositiveReviews([5, 3, 4, 2, 5]), 3)
  })

  it('should return 0 for input [1, 2, 3]', function () {
    assert.strictEqual(countPositiveReviews([1, 2, 3]), 0)
  })

  it('should return 4 for input [4, 4, 4, 4]', function () {
    assert.strictEqual(countPositiveReviews([4, 4, 4, 4]), 4)
  })
})
