import { calculateEngagement } from '../../loops/21.js'
import assert from 'assert'

describe('calculateEngagement', function () {
  it('should return [15, 30] for input [[5, 5, 5], [10, 10, 10]]', function () {
    assert.deepStrictEqual(
      calculateEngagement([
        [5, 5, 5],
        [10, 10, 10]
      ]),
      [15, 30]
    )
  })

  it('should return [10] for input [[4, 3, 3]]', function () {
    assert.deepStrictEqual(calculateEngagement([[4, 3, 3]]), [10])
  })

  it('should return [0] for input [[0, 0, 0]]', function () {
    assert.deepStrictEqual(calculateEngagement([[0, 0, 0]]), [0])
  })
})
