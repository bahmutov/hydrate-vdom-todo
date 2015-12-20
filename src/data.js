const uuid = require('./uuid')
const generateFakeTodos = require('./generate-fake-todos')

function addId (todo) {
  todo.id = uuid()
  return todo
}

const fakeTodos = generateFakeTodos(100).map(addId)
module.exports = fakeTodos
