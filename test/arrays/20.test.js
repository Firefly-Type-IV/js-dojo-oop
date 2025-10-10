import { strict as assert } from 'assert'
import { filterMultiplesOfThree } from '../../arrays/20.js'

describe('filterMultiplesOfThree', function () {
  it('should return an array of multiples of 3', function () {
    const numbers = [10, 15, 20, 30, 33]
    const expected = [15, 30, 33]
    assert.deepEqual(filterMultiplesOfThree(numbers), expected)
  })

  it('should work with different numbers', function () {
    const numbers = [9, 18, 25, 27]
    const expected = [9, 18, 27]
    assert.deepEqual(filterMultiplesOfThree(numbers), expected)
  })

  it('should handle an empty array', function () {
    const numbers = []
    const expected = []
    assert.deepEqual(filterMultiplesOfThree(numbers), expected)
  })
})
