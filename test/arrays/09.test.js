import { strict as assert } from 'assert'
import { findYoungestAge } from '../../arrays/09.js'

describe('findYoungestAge', function () {
  it('should return the smallest age from an array of two ages', function () {
    const ages = [29, 31]
    const expected = 29
    assert.equal(findYoungestAge(ages), expected)
  })

  it('should work with different ages', function () {
    const ages = [45, 50]
    const expected = 45
    assert.equal(findYoungestAge(ages), expected)
  })

  it('should handle arrays with the same ages', function () {
    const ages = [33, 33]
    const expected = 33
    assert.equal(findYoungestAge(ages), expected)
  })
})
