import assert from 'assert'
import { celsiusToFahrenheit } from '../../functions/14.js'

describe('celsiusToFahrenheit', function () {
  it('should return 32 when celsius is 0', function () {
    const result = celsiusToFahrenheit(0)
    assert.strictEqual(result, 32)
  })

  it('should return 68 when celsius is 20', function () {
    const result = celsiusToFahrenheit(20)
    assert.strictEqual(result, 68)
  })

  it('should return -4 when celsius is -20', function () {
    const result = celsiusToFahrenheit(-20)
    assert.strictEqual(result, -4)
  })

  it('should handle floating point values correctly', function () {
    const result = celsiusToFahrenheit(25.5)
    assert.strictEqual(result, 77.9)
  })
})
