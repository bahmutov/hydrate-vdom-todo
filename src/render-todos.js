const h = require('virtual-dom/h')
const renderTodo = require('./render-todo')

function render (todos) {
  return h('section', {className: 'main'}, [
    h('input', {
      className: 'toggle-all',
      type: 'checkbox',
      onclick: function (e) {
        console.log('nothing')
        // Todos.mark(e.target.checked);
        // renderApp();
      }
    }),
    h('label', {htmlFor: 'toggle-all'}, 'Mark all as complete'),
    h('ul', {className: 'todo-list'}, todos.map(renderTodo))
  ])
}

module.exports = render
