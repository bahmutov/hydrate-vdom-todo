const render = require('./src/render/render')
const Todos = require('./src/todos')
const rendered = render(Todos)

const toHTML = require('vdom-to-html')
const beautify = require('js-beautify').html
const appMarkup = beautify(toHTML(rendered), { indent_size: 2 })

const read = require('fs').readFileSync
const index = read('./index.html', 'utf-8')

const outputIndexFilename = './dist/index.html'
const write = require('fs').writeFileSync

const appId = '<div id="app">'
const appDiv = appId + '</div>'
const hydratedIndex = index.replace(appDiv, appId + '\n' + appMarkup + '\n' + '</div>')

write(outputIndexFilename, hydratedIndex)
console.log('saved hydrated index', outputIndexFilename)
