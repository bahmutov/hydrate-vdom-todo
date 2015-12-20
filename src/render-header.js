const h = require('virtual-dom/h')

function render () {
  function isEnter (e) {
    return e.keyCode === 13
  }
  function onKey (e) {
    if (isEnter(e)) {
      // Todos.add(e.target.value)
      e.target.value = ''
      // renderApp()
    }
  }

  return h('header', {className: 'header'}, [
    h('h1', {}, 'todos'),
    h('input', {
      className: 'new-todo',
      placeholder: 'What needs to be done?',
      autofocus: true,
      onkeyup: onKey
    }, [])
  ])
}

module.exports = render
