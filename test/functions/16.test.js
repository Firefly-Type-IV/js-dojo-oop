import assert from 'assert'
import { isLeapYear } from '../../functions/16.js'

describe('isLeapYear', function () {
  it('should return true for year 2020', function () {
    const result = isLeapYear(2020)
    assert.strictEqual(result, true)
  })

  it('should return false for year 2019', function () {
    const result = isLeapYear(2019)
    assert.strictEqual(result, false)
  })

  it('should return true for year 2000', function () {
    const result = isLeapYear(2000)
    assert.strictEqual(result, true)
  })

  it('should return false for year 1900', function () {
    const result = isLeapYear(1900)
    assert.strictEqual(result, false)
  })

  it('should return true for year 1600', function () {
    const result = isLeapYear(1600)
    assert.strictEqual(result, true)
  })
})
