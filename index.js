const Terminal = require('./lib');
let terminal = new Terminal()

console.log(terminal)
console.log("editor", terminal.editor)
console.log("shell", terminal.shell)
console.log("bindings", terminal.bindings)
console.log("user", terminal.user)

