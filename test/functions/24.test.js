import assert from 'assert'
import { dayType } from '../../functions/24.js'

describe('dayType', function () {
  it('should return Weekend for Saturday and Sunday', function () {
    assert.strictEqual(dayType('Saturday'), 'Weekend')
    assert.strictEqual(dayType('Sunday'), 'Weekend')
  })

  it('should return Weekday for Monday to Friday', function () {
    assert.strictEqual(dayType('Monday'), 'Weekday')
    assert.strictEqual(dayType('Tuesday'), 'Weekday')
    assert.strictEqual(dayType('Wednesday'), 'Weekday')
    assert.strictEqual(dayType('Thursday'), 'Weekday')
    assert.strictEqual(dayType('Friday'), 'Weekday')
  })
})
