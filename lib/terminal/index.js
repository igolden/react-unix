const bindings = require('./bindings')
const console = require('./console')
const interpreter = require('./interpreter')
const shell = require('./shell')
const user = require('./user')
const editor = require('./editor')

module.exports = {
  bindings,
  console,
  interpreter,
  shell,
  user,
  editor
}

// export default Terminal
