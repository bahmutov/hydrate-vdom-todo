'use strict'

require('../node_modules/todomvc-common/base.css')
require('../node_modules/todomvc-app-css/index.css')

const diff = require('virtual-dom/diff')
const patch = require('virtual-dom/patch')
// const html2vdom = require('html2hscript')

const la = require('lazy-ass')
const is = require('check-more-types')

const appNode = document.getElementById('app')
var renderedNode = appNode.firstElementChild

const VNode = require('virtual-dom/vnode/vnode')
const VText = require('virtual-dom/vnode/vtext')
var convertHTML = require('html-to-vdom')({
  VNode: VNode,
  VText: VText
})
const render = require('./render/render')
var prevView = convertHTML(renderedNode.outerHTML)

const uuid = require('./uuid')

var Todos = {
  add: function (what) {
    Todos.items.push({
      what: what,
      done: false,
      id: uuid()
    })
    renderApp()
  },
  mark: function (id, done) {
    Todos.items.forEach(function (todo) {
      if (todo.id === id) {
        todo.done = done
      }
    })
    renderApp()
  },
  remove: function (todo) {
    Todos.items = Todos.items.filter(function (t) {
      return t.id !== todo.id
    })
    renderApp()
  },
  items: require('./data.json')
}

la(is.array(Todos.items), 'expected list of todos', Todos.items)

function renderApp () {
  console.log('rendering %d todos', Todos.items.length)
  const view = render(Todos)
  const patches = diff(prevView, view)
  renderedNode = patch(renderedNode, patches)
  prevView = view
}

console.log('initial render')
renderApp()

window.renderApp = renderApp
