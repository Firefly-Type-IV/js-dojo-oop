import assert from 'assert'
import { canOpenBankAccount } from '../../functions/17.js'

describe('canOpenBankAccount', function () {
  it('should return true when age is 20 and isResident is true', function () {
    const result = canOpenBankAccount(20, true)
    assert.strictEqual(result, true)
  })

  it('should return false when age is 17 and isResident is true', function () {
    const result = canOpenBankAccount(17, true)
    assert.strictEqual(result, false)
  })

  it('should return false when age is 20 and isResident is false', function () {
    const result = canOpenBankAccount(20, false)
    assert.strictEqual(result, false)
  })

  it('should return false when age is 17 and isResident is false', function () {
    const result = canOpenBankAccount(17, false)
    assert.strictEqual(result, false)
  })

  it('should return true when age is 18 and isResident is true', function () {
    const result = canOpenBankAccount(18, true)
    assert.strictEqual(result, true)
  })
})
