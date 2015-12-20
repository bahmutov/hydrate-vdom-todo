const faker = require('faker')

function generateFakeTodos (n) {
  var todos = []
  var k
  for (k = 0; k < n; k += 1) {
    todos.push({
      what: faker.lorem.sentence(),
      done: false
    })
  }
  return todos
}

module.exports = generateFakeTodos

if (!module.parent) {
  console.log('2 fake todos',
    generateFakeTodos(2))
}
