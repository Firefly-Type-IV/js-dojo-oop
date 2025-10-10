import { strict as assert } from 'assert'
import { firstAndLastName } from '../../arrays/05.js'

describe('firstAndLastName', function () {
  it('should return an array containing the first and last names', function () {
    const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve']
    const expected = ['Alice', 'Eve']
    assert.deepEqual(firstAndLastName(names), expected)
  })

  it('should work with different names', function () {
    const names = ['John', 'Paul', 'George', 'Ringo']
    const expected = ['John', 'Ringo']
    assert.deepEqual(firstAndLastName(names), expected)
  })

  it('should handle an array with only one name', function () {
    const names = ['Solo']
    const expected = ['Solo', 'Solo']
    assert.deepEqual(firstAndLastName(names), expected)
  })
})
