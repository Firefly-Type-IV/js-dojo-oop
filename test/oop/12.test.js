import { Person } from '../../oop/12.js'
import assert from 'assert'

describe('Person', function () {
  it('should get age correctly', function () {
    const person = new Person('Alice', 30)
    assert.strictEqual(person.getAge(), 30)
  })

  it('should set age correctly', function () {
    const person = new Person('Bob', 25)
    person.setAge(26)
    assert.strictEqual(person.getAge(), 26)
  })

  // it('should not allow negative age', function () {
  //   const person = new Person('Charlie', 30)
  //   person.setAge(-5)
  //   assert.strictEqual(person.getAge(), 30)
  // })
  // modify for throwing an error for invalid input
  it('should throw an errror and not change age for a negative input', () => {
    const person = new Person('Rin', 30);
    assert.throws( () => person.setAge(-5), 'setAge did not throw an expected error')

    assert.strictEqual(person.getAge(), 30, 'age was incorrectly changed after an invalid input')
  })
})
