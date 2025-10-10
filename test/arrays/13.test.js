import { strict as assert } from 'assert'
import { doubleLikes } from '../../arrays/13.js'

describe('doubleLikes', function () {
  it('should double the number of likes on each video', function () {
    const likes = [100, 200, 300]
    const expected = [200, 400, 600]
    assert.deepEqual(doubleLikes(likes), expected)
  })

  it('should work with different like counts', function () {
    const likes = [50, 150, 250]
    const expected = [100, 300, 500]
    assert.deepEqual(doubleLikes(likes), expected)
  })

  it('should handle an empty array', function () {
    const likes = []
    const expected = []
    assert.deepEqual(doubleLikes(likes), expected)
  })
})
