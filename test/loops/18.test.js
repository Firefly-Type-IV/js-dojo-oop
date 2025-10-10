import { filterExpensiveProducts } from '../../loops/18.js'
import assert from 'assert'

describe('filterExpensiveProducts', function () {
  it('should return [50, 100] for input [50, 150, 100, 200] and maxPrice 100', function () {
    assert.deepStrictEqual(
      filterExpensiveProducts([50, 150, 100, 200], 100),
      [50, 100]
    )
  })

  it('should return [] for input [150, 200] and maxPrice 100', function () {
    assert.deepStrictEqual(filterExpensiveProducts([150, 200], 100), [])
  })

  it('should return [50, 100, 80] for input [50, 150, 100, 200, 80] and maxPrice 100', function () {
    assert.deepStrictEqual(
      filterExpensiveProducts([50, 150, 100, 200, 80], 100),
      [50, 100, 80]
    )
  })
})
