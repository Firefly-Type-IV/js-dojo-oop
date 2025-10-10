import { strict as assert } from 'assert'
import { shiftAllAges } from '../../arrays/06.js'

describe('shiftAllAges', function () {
  it('should remove the first element and add it to the end of the array', function () {
    const ages = [30, 25, 20, 35, 40]
    const expected = [25, 20, 35, 40, 30]
    assert.deepEqual(shiftAllAges(ages), expected)
  })

  it('should work with different ages', function () {
    const ages = [10, 20, 30, 40]
    const expected = [20, 30, 40, 10]
    assert.deepEqual(shiftAllAges(ages), expected)
  })

  it('should handle an array with only one age', function () {
    const ages = [15]
    const expected = [15]
    assert.deepEqual(shiftAllAges(ages), expected)
  })
})
