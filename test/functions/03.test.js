import assert from 'assert'
import { travelDistance } from '../../functions/03.js'

describe('travelDistance', function () {
  it('should return 300 when the fuel amount is 20 liters and the fuel efficiency is 15 km/l', function () {
    const result = travelDistance(20, 15)
    assert.strictEqual(result, 300)
  })

  it('should return 0 when the fuel amount is 0 liters and the fuel efficiency is 15 km/l', function () {
    const result = travelDistance(0, 15)
    assert.strictEqual(result, 0)
  })

  it('should return 0 when the fuel amount is 20 liters and the fuel efficiency is 0 km/l', function () {
    const result = travelDistance(20, 0)
    assert.strictEqual(result, 0)
  })

  it('should return 100 when the fuel amount is 10 liters and the fuel efficiency is 10 km/l', function () {
    const result = travelDistance(10, 10)
    assert.strictEqual(result, 100)
  })

  it('should handle floating point values correctly', function () {
    const result = travelDistance(20.5, 15.5)
    assert.strictEqual(result, 317.75)
  })
})
