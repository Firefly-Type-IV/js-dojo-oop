import { strict as assert } from 'assert'
import { appendYear } from '../../arrays/14.js'

describe('appendYear', function () {
  it('should append the year to each book title', function () {
    const titles = ['Book One', 'Book Two']
    const year = 2024
    const expected = ['Book One (2024)', 'Book Two (2024)']
    assert.deepEqual(appendYear(titles, year), expected)
  })

  it('should work with different titles and years', function () {
    const titles = ['Title A', 'Title B']
    const year = 2022
    const expected = ['Title A (2022)', 'Title B (2022)']
    assert.deepEqual(appendYear(titles, year), expected)
  })

  it('should handle an empty array', function () {
    const titles = []
    const year = 2023
    const expected = []
    assert.deepEqual(appendYear(titles, year), expected)
  })
})
