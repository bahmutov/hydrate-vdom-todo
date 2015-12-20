const h = require('virtual-dom/h')

function hashFragment () {
  return typeof window !== 'undefined' && window.location.hash.split('/')[1] || ''
}

function render (todos) {
  // const remaining = todos ? todos.countRemaining() : 0;
  const remaining = 0
  const route = hashFragment()

  return h('footer', {className: 'footer'}, [
    h('span', {className: 'todo-count'}, [
      h('strong', {}, String(remaining)),
      ' items left'
    ]),
    h('ul', {className: 'filters'}, [
      h('li', [
        h('a', {
          className: !route ? 'selected' : '',
          href: '#/'
        }, 'All')
      ]),
      h('li', [
        h('a', {
          className: route === 'active' ? 'selected' : '',
          href: '#/active'
        }, 'Active')
      ]),
      h('li', [
        h('a', {
          className: route === 'completed' ? 'selected' : '',
          href: '#/completed'
        }, 'Completed')
      ])
    ]),
    h('button', {
      className: 'clear-completed',
      style: {
        display: true /* todos && todos.hasCompleted() */ ? 'block' : 'none'
      },
      onclick: function () {
        // todos && todos.clearCompleted();
        // renderApp();
      }
    }, 'Clear completed')
  ])
}

module.exports = render
