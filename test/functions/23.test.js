import assert from 'assert'
import { determineSeason } from '../../functions/23.js'

describe('determineSeason', function () {
  it('should return Winter for months 12, 1, 2', function () {
    assert.strictEqual(determineSeason(12), 'Winter')
    assert.strictEqual(determineSeason(1), 'Winter')
    assert.strictEqual(determineSeason(2), 'Winter')
  })

  it('should return Spring for months 3, 4, 5', function () {
    assert.strictEqual(determineSeason(3), 'Spring')
    assert.strictEqual(determineSeason(4), 'Spring')
    assert.strictEqual(determineSeason(5), 'Spring')
  })

  it('should return Summer for months 6, 7, 8', function () {
    assert.strictEqual(determineSeason(6), 'Summer')
    assert.strictEqual(determineSeason(7), 'Summer')
    assert.strictEqual(determineSeason(8), 'Summer')
  })

  it('should return Autumn for months 9, 10, 11', function () {
    assert.strictEqual(determineSeason(9), 'Autumn')
    assert.strictEqual(determineSeason(10), 'Autumn')
    assert.strictEqual(determineSeason(11), 'Autumn')
  })
})
