import assert from 'assert'
import { itemsPerPerson } from '../../functions/05.js'

describe('itemsPerPerson', function () {
  it('should return 4 when totalItems is 24 and people is 8', function () {
    const result = itemsPerPerson(24, 8)
    assert.strictEqual(result, 3)
  })

  it('should return 0 when totalItems is 0 and people is 8', function () {
    const result = itemsPerPerson(0, 8)
    assert.strictEqual(result, 0)
  })
})
