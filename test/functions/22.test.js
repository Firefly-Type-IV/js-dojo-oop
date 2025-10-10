import assert from 'assert'
import { determineGrade } from '../../functions/22.js'

describe('determineGrade', function () {
  it('should return A for scores between 90 and 100', function () {
    assert.strictEqual(determineGrade(95), 'A')
    assert.strictEqual(determineGrade(90), 'A')
  })

  it('should return B for scores between 80 and 89', function () {
    assert.strictEqual(determineGrade(85), 'B')
    assert.strictEqual(determineGrade(80), 'B')
  })

  it('should return C for scores between 70 and 79', function () {
    assert.strictEqual(determineGrade(75), 'C')
    assert.strictEqual(determineGrade(70), 'C')
  })

  it('should return D for scores between 60 and 69', function () {
    assert.strictEqual(determineGrade(65), 'D')
    assert.strictEqual(determineGrade(60), 'D')
  })

  it('should return F for scores below 60', function () {
    assert.strictEqual(determineGrade(55), 'F')
    assert.strictEqual(determineGrade(0), 'F')
  })
})
