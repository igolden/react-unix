"use strict";
var Errors = require('./terminal/helpers/errors')
Errors.InvalidCommandError

// import core
const core = require('./terminal')

/*
* Initiates the Top-level class Terminal
* that will be the parent to the core
* lib instantiations.
*
* The Terminal class should just worry 
* about rendering the general dives and 
* UI, while managing the import/exports
* of core. All logic is offloaded onto
* their classes, where Terminal gives
* us the overview.
* 
* @param  {} 
*/

console.log(core)
class Terminal {
  constructor(options) {
    this.editor          = new core.editor({})
    this.shell           = new core.shell({})
    this.users           = new core.user({})
    this.files           = new core.user({}) // should i change to system?
    this.interpreter     = new core.interpreter({})
    this.bindings        = core.bindings
  }
}

var err                  = new Errors.InvalidCommandError();

module.exports           = Terminal

