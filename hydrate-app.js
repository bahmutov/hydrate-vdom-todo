const toHTML = require('vdom-to-html')
const h = require('virtual-dom/h')

const read = require('fs').readFileSync
const index = read('./index.html')

const todos = require('./src/data')
console.log('initial data has %d todo(s)', todos.length)
