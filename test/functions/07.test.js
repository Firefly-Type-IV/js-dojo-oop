import assert from 'assert'
import { didPass } from '../../functions/07.js'

describe('didPass', function () {
  it('should return true when score is 75 and passMark is 50', function () {
    const result = didPass(75, 50)
    assert.strictEqual(result, true)
  })

  it('should return false when score is 45 and passMark is 50', function () {
    const result = didPass(45, 50)
    assert.strictEqual(result, false)
  })

  it('should return true when score is 50 and passMark is 50', function () {
    const result = didPass(50, 50)
    assert.strictEqual(result, true)
  })
})
