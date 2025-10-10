import assert from 'assert'
import { ingredientAmount } from '../../functions/04.js'

describe('ingredientAmount', function () {
  it('should return 8 when the base amount is 2 and the servings are 4', function () {
    const result = ingredientAmount(2, 4)
    assert.strictEqual(result, 8)
  })

  it('should return 0 when the base amount is 0 and the servings are 4', function () {
    const result = ingredientAmount(0, 4)
    assert.strictEqual(result, 0)
  })

  it('should return 0 when the base amount is 2 and the servings are 0', function () {
    const result = ingredientAmount(2, 0)
    assert.strictEqual(result, 0)
  })

  it('should return 10 when the base amount is 5 and the servings are 2', function () {
    const result = ingredientAmount(5, 2)
    assert.strictEqual(result, 10)
  })

  it('should handle floating point values correctly', function () {
    const result = ingredientAmount(1.5, 3)
    assert.strictEqual(result, 4.5)
  })
})
