'use strict'

require('../node_modules/todomvc-common/base.css')
require('../node_modules/todomvc-app-css/index.css')

const diff = require('virtual-dom/diff')
const patch = require('virtual-dom/patch')

const la = require('lazy-ass')
const is = require('check-more-types')

const appNode = document.getElementById('app')
const renderedNode = appNode.firstElementChild

var todos = require('./data.json')
la(is.array(todos), 'expected list of todos', todos)

const render = require('./render/render')
var prevView = render(todos)

function renderApp (todos) {
  console.log('rendering %d todos', todos.length)
  const view = render(todos)
  const patches = diff(prevView, view)
  patch(renderedNode, patches)
}

console.log('initial render')
renderApp(todos)

window.renderApp = renderApp
