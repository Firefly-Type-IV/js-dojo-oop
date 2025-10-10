import { strict as assert } from 'assert'
import { filterEvenAges } from '../../arrays/19.js'

describe('filterEvenAges', function () {
  it('should return an array of even ages', function () {
    const ages = [21, 22, 23, 24, 25]
    const expected = [22, 24]
    assert.deepEqual(filterEvenAges(ages), expected)
  })

  it('should work with different ages', function () {
    const ages = [30, 31, 32, 33, 34]
    const expected = [30, 32, 34]
    assert.deepEqual(filterEvenAges(ages), expected)
  })

  it('should handle an empty array', function () {
    const ages = []
    const expected = []
    assert.deepEqual(filterEvenAges(ages), expected)
  })
})
