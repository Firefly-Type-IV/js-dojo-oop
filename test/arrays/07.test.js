import { strict as assert } from 'assert'
import { extractWeekdays } from '../../arrays/07.js'

describe('extractWeekdays', function () {
  it('should return an array containing temperatures for the weekdays only', function () {
    const temps = [15, 16, 18, 20, 21, 19, 17]
    const expected = [15, 16, 18, 20, 21]
    assert.deepEqual(extractWeekdays(temps), expected)
  })

  it('should work with different temperatures', function () {
    const temps = [10, 12, 14, 16, 18, 20, 22]
    const expected = [10, 12, 14, 16, 18]
    assert.deepEqual(extractWeekdays(temps), expected)
  })

  it('should handle arrays with exactly five temperatures', function () {
    const temps = [5, 10, 15, 20, 25]
    const expected = [5, 10, 15, 20, 25]
    assert.deepEqual(extractWeekdays(temps), expected)
  })
})
