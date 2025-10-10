import { strict as assert } from 'assert'
import { getLastTwoNames } from '../../arrays/10.js'

describe('getLastTwoNames', function () {
  it('should return an array containing the last two names', function () {
    const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve']
    const expected = ['David', 'Eve']
    assert.deepEqual(getLastTwoNames(names), expected)
  })

  it('should work with different names', function () {
    const names = ['John', 'Paul', 'George', 'Ringo']
    const expected = ['George', 'Ringo']
    assert.deepEqual(getLastTwoNames(names), expected)
  })

  it('should handle an array with only two names', function () {
    const names = ['Tom', 'Jerry']
    const expected = ['Tom', 'Jerry']
    assert.deepEqual(getLastTwoNames(names), expected)
  })
})
