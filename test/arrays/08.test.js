import { strict as assert } from 'assert'
import { addNewPrice } from '../../arrays/08.js'

describe('addNewPrice', function () {
  it('should add a new price to the beginning of the array', function () {
    const prices = [5.99, 15.99, 9.99, 25.99, 18.99]
    const newPrice = 3.99
    const expected = [3.99, 5.99, 15.99, 9.99, 25.99, 18.99]
    assert.deepEqual(addNewPrice(prices, newPrice), expected)
  })

  it('should work with different prices', function () {
    const prices = [10.0, 20.0, 30.0]
    const newPrice = 5.0
    const expected = [5.0, 10.0, 20.0, 30.0]
    assert.deepEqual(addNewPrice(prices, newPrice), expected)
  })

  it('should handle adding to an empty array', function () {
    const prices = []
    const newPrice = 2.99
    const expected = [2.99]
    assert.deepEqual(addNewPrice(prices, newPrice), expected)
  })
})
