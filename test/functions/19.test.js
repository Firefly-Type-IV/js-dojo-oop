import assert from 'assert'
import { totalPay } from '../../functions/19.js'

describe('totalPay', function () {
  it('should return 950 when hoursWorked is 45 and hourlyRate is 20', function () {
    const result = totalPay(45, 20)
    assert.strictEqual(result, 950)
  })

  it('should return 800 when hoursWorked is 40 and hourlyRate is 20', function () {
    const result = totalPay(40, 20)
    assert.strictEqual(result, 800)
  })

  it('should return 600 when hoursWorked is 30 and hourlyRate is 20', function () {
    const result = totalPay(30, 20)
    assert.strictEqual(result, 600)
  })

  it('should return 1000 when hoursWorked is 50 and hourlyRate is 20', function () {
    const result = totalPay(50, 20)
    assert.strictEqual(result, 1100)
  })
})
