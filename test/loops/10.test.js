import { stringOfNums } from '../../loops/10.js'
import assert from 'assert'

describe('stringOfNums', function () {
  it('should return "12345" for input 5', function () {
    assert.strictEqual(stringOfNums(5), '12345')
  })

  it('should return "1" for input 1', function () {
    assert.strictEqual(stringOfNums(1), '1')
  })

  it('should return "123456789" for input 9', function () {
    assert.strictEqual(stringOfNums(9), '123456789')
  })
})
