const bindings    = require('./helpers/bindings')
const interpreter = require('./helpers/interpreter')

const editor      = require('./components/editor')
const console     = require('./components/console')

const files       = require('./models/file_system')
const shell       = require('./models/shell')
const user        = require('./models/user')

console.log(",", editor)
console.log(user)
console.log(user)
console.log(user)
console.log(user)



module.exports = {
  bindings,
  console,
  files,
  interpreter,
  shell,
  user,
  editor
}

// export default Terminal
