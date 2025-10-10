import assert from 'assert'
import { canVote } from '../../functions/06.js'

describe('canVote', function () {
  it('should return true when age is 20', function () {
    const result = canVote(20)
    assert.strictEqual(result, true)
  })

  it('should return false when age is 17', function () {
    const result = canVote(17)
    assert.strictEqual(result, false)
  })

  it('should return true when age is 18', function () {
    const result = canVote(18)
    assert.strictEqual(result, true)
  })
})
