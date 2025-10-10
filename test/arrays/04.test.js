import { strict as assert } from 'assert'
import { removeFirstRating } from '../../arrays/04.js'

describe('removeFirstRating', function () {
  it('should remove the first rating from the array', function () {
    const ratings = [4.5, 3.8, 4.0, 2.9, 4.1]
    const expected = [3.8, 4.0, 2.9, 4.1]
    assert.deepEqual(removeFirstRating(ratings), expected)
  })

  it('should work with different ratings', function () {
    const ratings = [5.0, 4.0, 3.0]
    const expected = [4.0, 3.0]
    assert.deepEqual(removeFirstRating(ratings), expected)
  })

  it('should handle arrays with only one rating', function () {
    const ratings = [3.5]
    const expected = []
    assert.deepEqual(removeFirstRating(ratings), expected)
  })
})
