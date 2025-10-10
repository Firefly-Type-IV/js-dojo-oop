import { calculatePopulationGrowth } from '../../loops/09.js'
import assert from 'assert'

describe('calculatePopulationGrowth', function () {
  it('should return 1331 for initialPopulation 1000, growthRate 0.10, years 3', function () {
    assert.strictEqual(calculatePopulationGrowth(1000, 0.1, 3), 1331)
  })

  it('should return 1100 for initialPopulation 1000, growthRate 0.10, years 1', function () {
    assert.strictEqual(calculatePopulationGrowth(1000, 0.1, 1), 1100)
  })

  it('should return 1000 for initialPopulation 1000, growthRate 0.00, years 5', function () {
    assert.strictEqual(calculatePopulationGrowth(1000, 0.0, 5), 1000)
  })
})
