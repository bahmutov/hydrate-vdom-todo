const h = require('virtual-dom/h')

function render(todo) {
  return h('li', {className: todo.done ? 'completed' : '', key: todo.id}, [
    h('div', {className: 'view'}, [
      h('input', {
        className: 'toggle',
        type: 'checkbox',
        checked: todo.done,
        onchange: function (e) {
          console.log('nothing')
          // Todos.mark(todo.id, e.target.checked);
          // renderApp();
        }
      }),
      h('label', todo.what),
      h('button', {
        className: 'destroy',
        onclick: function (e) {
          console.log('nothing')
          // Todos.remove(todo);
          // renderApp();
        }
      })
    ])
  ]);
}

module.exports = render
