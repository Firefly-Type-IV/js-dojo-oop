import assert from 'assert'
import { isBetween } from '../../functions/12.js'

describe('isBetween', function () {
  it('should return true when num is 5, lower is 1, and upper is 10', function () {
    const result = isBetween(5, 1, 10)
    assert.strictEqual(result, true)
  })

  it('should return false when num is 1, lower is 1, and upper is 10', function () {
    const result = isBetween(1, 1, 10)
    assert.strictEqual(result, false)
  })

  it('should return false when num is 10, lower is 1, and upper is 10', function () {
    const result = isBetween(10, 1, 10)
    assert.strictEqual(result, false)
  })

  it('should return false when num is 0, lower is 1, and upper is 10', function () {
    const result = isBetween(0, 1, 10)
    assert.strictEqual(result, false)
  })
})
