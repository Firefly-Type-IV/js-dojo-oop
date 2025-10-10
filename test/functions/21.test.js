import assert from 'assert'
import { isWithinRangeAndEven } from '../../functions/21.js'

describe('isWithinRangeAndEven', function () {
  it('should return true when num is 8, lower is 1, and upper is 10', function () {
    const result = isWithinRangeAndEven(8, 1, 10)
    assert.strictEqual(result, true)
  })

  it('should return false when num is 7, lower is 1, and upper is 10', function () {
    const result = isWithinRangeAndEven(7, 1, 10)
    assert.strictEqual(result, false)
  })

  it('should return false when num is 11, lower is 1, and upper is 10', function () {
    const result = isWithinRangeAndEven(11, 1, 10)
    assert.strictEqual(result, false)
  })

  it('should return false when num is 0, lower is 1, and upper is 10', function () {
    const result = isWithinRangeAndEven(0, 1, 10)
    assert.strictEqual(result, false)
  })

  it('should return false when num is 10, lower is 1, and upper is 10', function () {
    const result = isWithinRangeAndEven(10, 1, 10)
    assert.strictEqual(result, false)
  })
})
