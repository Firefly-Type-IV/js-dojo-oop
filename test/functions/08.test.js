import assert from 'assert'
import { isAboveFreezing } from '../../functions/08.js'

describe('isAboveFreezing', function () {
  it('should return true when temperature is 5', function () {
    const result = isAboveFreezing(5)
    assert.strictEqual(result, true)
  })

  it('should return false when temperature is -1', function () {
    const result = isAboveFreezing(-1)
    assert.strictEqual(result, false)
  })

  it('should return false when temperature is 0', function () {
    const result = isAboveFreezing(0)
    assert.strictEqual(result, false)
  })
})
