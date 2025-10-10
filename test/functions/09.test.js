import assert from 'assert'
import { isSpeeding } from '../../functions/09.js'

describe('isSpeeding', function () {
  it('should return true when speed is 80 and speedLimit is 70', function () {
    const result = isSpeeding(80, 70)
    assert.strictEqual(result, true)
  })

  it('should return false when speed is 60 and speedLimit is 70', function () {
    const result = isSpeeding(60, 70)
    assert.strictEqual(result, false)
  })

  it('should return false when speed is 70 and speedLimit is 70', function () {
    const result = isSpeeding(70, 70)
    assert.strictEqual(result, false)
  })
})
