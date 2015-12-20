const toHTML = require('vdom-to-html')

const read = require('fs').readFileSync
const index = read('./index.html', 'utf-8')

const todos = require('./src/data')
console.log('initial data has %d todo(s)', todos.length)

const renderTodos = require('./src/render-todos')
const rendered = renderTodos(todos)

const beautify = require('js-beautify').html
const appMarkup = beautify(toHTML(rendered), { indent_size: 2 })
console.log(appMarkup)

const outputIndexFilename = './dist/index.html'
const write = require('fs').writeFileSync

const appId = '<div id="app">'
const appDiv = appId + '</div>'
const hydratedIndex = index.replace(appDiv, appId + '\n' + appMarkup + '\n' + '</div>')

write(outputIndexFilename, hydratedIndex)
console.log('saved hydrated index', outputIndexFilename)
