const toHTML = require('vdom-to-html')
const h = require('virtual-dom/h')

const read = require('fs').readFileSync
const index = read('./index.html')

const todos = require('./src/data')
console.log('initial data has %d todo(s)', todos.length)

const renderTodos = require('./src/render-todos')
const rendered = renderTodos(todos)

const beautify = require('js-beautify').html
console.log(beautify(toHTML(rendered), { indent_size: 2 }))
