import { strict as assert } from 'assert'
import { adjustedSalary } from '../../functions/11.js'

describe('adjustedSalary', () => {
  it('should return 45000 when salary is 50000 and taxRate is 10', () => {
    const result = adjustedSalary(50000, 10)
    assert.equal(result, 45000)
  })

  it('should return 0 when salary is 0 and taxRate is 10', () => {
    const result = adjustedSalary(0, 10)
    assert.equal(result, 0)
  })

  it('should return the same salary when taxRate is 0', () => {
    const result = adjustedSalary(50000, 0)
    assert.equal(result, 50000)
  })

  it('should return 40000 when salary is 50000 and taxRate is 20', () => {
    const result = adjustedSalary(50000, 20)
    assert.equal(result, 40000)
  })

  it('should handle floating point tax rates correctly', () => {
    const result = adjustedSalary(50000, 12.5)
    assert.equal(result, 43750)
  })
})
