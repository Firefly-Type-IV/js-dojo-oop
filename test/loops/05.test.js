import { sumSquares } from '../../loops/05.js'
import assert from 'assert'

describe('sumSquares', function () {
  it('should return 30 for input 5', function () {
    assert.strictEqual(sumSquares(5), 30)
  })

  it('should return 0 for input 1', function () {
    assert.strictEqual(sumSquares(1), 0)
  })

  it('should return 55 for input 6', function () {
    assert.strictEqual(sumSquares(6), 55)
  })
})
