import assert from 'assert'
import { isEven } from '../../functions/15.js'

describe('isEven', function () {
  it('should return true when num is 4', function () {
    const result = isEven(4)
    assert.strictEqual(result, true)
  })

  it('should return false when num is 5', function () {
    const result = isEven(5)
    assert.strictEqual(result, false)
  })

  it('should return true when num is 0', function () {
    const result = isEven(0)
    assert.strictEqual(result, true)
  })

  it('should return true when num is -2', function () {
    const result = isEven(-2)
    assert.strictEqual(result, true)
  })

  it('should return false when num is -3', function () {
    const result = isEven(-3)
    assert.strictEqual(result, false)
  })
})
