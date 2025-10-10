import assert from 'assert'
import { canGoPicnic } from '../../functions/10.js'

describe('canGoPicnic', function () {
  it('should return true when it is sunny and it is the weekend', function () {
    const result = canGoPicnic(true, true)
    assert.strictEqual(result, true)
  })

  it('should return false when it is not sunny and it is the weekend', function () {
    const result = canGoPicnic(false, true)
    assert.strictEqual(result, false)
  })

  it('should return false when it is sunny and it is not the weekend', function () {
    const result = canGoPicnic(true, false)
    assert.strictEqual(result, false)
  })

  it('should return false when it is not sunny and it is not the weekend', function () {
    const result = canGoPicnic(false, false)
    assert.strictEqual(result, false)
  })
})
