import assert from 'assert'
import { remainingSavings } from '../../functions/02.js'

describe('remainingSavings', function () {
  it('should return 60 when the savings is 100 and the cost is 40', function () {
    const result = remainingSavings(100, 40)
    assert.strictEqual(result, 60)
  })

  it('should return 0 when the savings is 100 and the cost is 100', function () {
    const result = remainingSavings(100, 100)
    assert.strictEqual(result, 0)
  })

  it('should return 100 when the savings is 100 and the cost is 0', function () {
    const result = remainingSavings(100, 0)
    assert.strictEqual(result, 100)
  })

  it('should return a negative value if the cost is greater than the savings', function () {
    const result = remainingSavings(100, 150)
    assert.strictEqual(result, -50)
  })

  it('should handle floating point numbers correctly', function () {
    const result = remainingSavings(100.5, 40.5)
    assert.strictEqual(result, 60)
  })
})
