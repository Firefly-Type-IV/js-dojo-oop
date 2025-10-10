import { countDivisibleBy3 } from '../../loops/06.js'
import assert from 'assert'

describe('countDivisibleBy3', function () {
  it('should return 1 for input 5', function () {
    assert.strictEqual(countDivisibleBy3(5), 1)
  })

  it('should return 0 for input 2', function () {
    assert.strictEqual(countDivisibleBy3(2), 0)
  })

  it('should return 2 for input 7', function () {
    assert.strictEqual(countDivisibleBy3(7), 2)
  })
})
