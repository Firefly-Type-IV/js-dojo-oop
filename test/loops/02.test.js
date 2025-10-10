import { productSmallerNumbers } from '../../loops/02.js'
import assert from 'assert'

describe('productSmallerNumbers', function () {
  it('should return 24 for input 5', function () {
    assert.strictEqual(productSmallerNumbers(5), 24)
  })

  it('should return 1 for input 2', function () {
    assert.strictEqual(productSmallerNumbers(2), 1)
  })

  it('should return 120 for input 6', function () {
    assert.strictEqual(productSmallerNumbers(6), 120)
  })
})
