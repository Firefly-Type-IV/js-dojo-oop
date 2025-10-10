import assert from 'assert'
import { canVote } from '../../functions/18.js'

describe('canVote', function () {
  it('should return true when age is 20, isCitizen is true, and isRegistered is true', function () {
    const result = canVote(20, true, true)
    assert.strictEqual(result, true)
  })

  it('should return false when age is 17, isCitizen is true, and isRegistered is true', function () {
    const result = canVote(17, true, true)
    assert.strictEqual(result, false)
  })

  it('should return false when age is 20, isCitizen is false, and isRegistered is true', function () {
    const result = canVote(20, false, true)
    assert.strictEqual(result, false)
  })

  it('should return false when age is 20, isCitizen is true, and isRegistered is false', function () {
    const result = canVote(20, true, false)
    assert.strictEqual(result, false)
  })

  it('should return false when age is 20, isCitizen is false, and isRegistered is false', function () {
    const result = canVote(20, false, false)
    assert.strictEqual(result, false)
  })
})
