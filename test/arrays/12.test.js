import { strict as assert } from 'assert'
import { addHashtags } from '../../arrays/12.js'

describe('addHashtags', function () {
  it('should add a hashtag to each topic', function () {
    const topics = ['coding', 'javascript', 'webdev']
    const expected = ['#coding', '#javascript', '#webdev']
    assert.deepEqual(addHashtags(topics), expected)
  })

  it('should work with different topics', function () {
    const topics = ['news', 'sports', 'entertainment']
    const expected = ['#news', '#sports', '#entertainment']
    assert.deepEqual(addHashtags(topics), expected)
  })

  it('should handle an empty array', function () {
    const topics = []
    const expected = []
    assert.deepEqual(addHashtags(topics), expected)
  })
})
