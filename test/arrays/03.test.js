import { strict as assert } from 'assert'
import { addTemperature } from '../../arrays/03.js'

describe('addTemperature', function () {
  it('should add a new temperature to the end of the array', function () {
    const temperatures = [22, 23, 19, 25, 21]
    const newTemp = 26
    const expected = [22, 23, 19, 25, 21, 26]
    assert.deepEqual(addTemperature(temperatures, newTemp), expected)
  })

  it('should work with different temperatures', function () {
    const temperatures = [10, 20, 30]
    const newTemp = 40
    const expected = [10, 20, 30, 40]
    assert.deepEqual(addTemperature(temperatures, newTemp), expected)
  })

  it('should handle adding to an empty array', function () {
    const temperatures = []
    const newTemp = 15
    const expected = [15]
    assert.deepEqual(addTemperature(temperatures, newTemp), expected)
  })
})
