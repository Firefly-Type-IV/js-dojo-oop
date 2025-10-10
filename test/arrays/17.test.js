import { strict as assert } from 'assert'
import { prefixCategory } from '../../arrays/17.js'

describe('prefixCategory', function () {
  it('should prefix each product with the category', function () {
    const products = ['Laptop', 'Phone', 'Tablet']
    const category = 'Electronics'
    const expected = [
      'Electronics: Laptop',
      'Electronics: Phone',
      'Electronics: Tablet'
    ]
    assert.deepEqual(prefixCategory(products, category), expected)
  })

  it('should work with different categories and products', function () {
    const products = ['Shirt', 'Pants', 'Jacket']
    const category = 'Clothing'
    const expected = ['Clothing: Shirt', 'Clothing: Pants', 'Clothing: Jacket']
    assert.deepEqual(prefixCategory(products, category), expected)
  })

  it('should handle an empty array', function () {
    const products = []
    const category = 'Food'
    const expected = []
    assert.deepEqual(prefixCategory(products, category), expected)
  })
})
