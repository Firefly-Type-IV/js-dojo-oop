import assert from 'assert'
import { ticketPrice } from '../../functions/20.js'

describe('ticketPrice', function () {
  it('should return 8 when age is 17 and isMember is false', function () {
    const result = ticketPrice(17, false)
    assert.strictEqual(result, 8)
  })

  it('should return 6 when age is 17 and isMember is true', function () {
    const result = ticketPrice(17, true)
    assert.strictEqual(result, 6)
  })

  it('should return 10 when age is 30 and isMember is false', function () {
    const result = ticketPrice(30, false)
    assert.strictEqual(result, 10)
  })

  it('should return 8 when age is 30 and isMember is true', function () {
    const result = ticketPrice(30, true)
    assert.strictEqual(result, 8)
  })

  it('should return 6 when age is 65 and isMember is false', function () {
    const result = ticketPrice(65, false)
    assert.strictEqual(result, 6)
  })

  it('should return 4 when age is 65 and isMember is true', function () {
    const result = ticketPrice(65, true)
    assert.strictEqual(result, 4)
  })
})
