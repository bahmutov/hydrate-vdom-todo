const uuid = require('./src/uuid')
const generateFakeTodos = require('./src/generate-fake-todos')

function addId (todo) {
  todo.id = uuid()
  return todo
}

const fakeTodos = generateFakeTodos(100).map(addId)
const outputFilename = './src/data.json'
const write = require('fs').writeFileSync
write(outputFilename, JSON.stringify(fakeTodos, null, 2))

console.log('wrote fake data to', outputFilename)
