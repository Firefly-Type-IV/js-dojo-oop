import assert from 'assert'
import { perimeter } from '../../functions/13.js'

describe('perimeter', function () {
  it('should return 30 when length is 10 and width is 5', function () {
    const result = perimeter(10, 5)
    assert.strictEqual(result, 30)
  })

  it('should return 20 when length is 5 and width is 5', function () {
    const result = perimeter(5, 5)
    assert.strictEqual(result, 20)
  })

  it('should return 0 when length is 0 and width is 5', function () {
    const result = perimeter(0, 5)
    assert.strictEqual(result, 10)
  })

  it('should return 0 when length is 0 and width is 0', function () {
    const result = perimeter(0, 0)
    assert.strictEqual(result, 0)
  })
})
