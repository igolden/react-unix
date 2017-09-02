/*
* The Interpreter parses and interprets
* console input. It then send the 
* feedback back to the console for the
* user to see.
*
* let interpreter = new Interpreter()
* interpreter()
* 
* It takes no configuration params, and
* strictly serves as a conduit for console
* input. It provides argument handling, 
* string parsing, and any other regex 
* logic needed for console input.
*/
// custom error classes
const Errors      = require('./errors')

class Interpreter {
  /*
  * General console input parsing 
  * 
  * @param  {} 
  */
  parseInput(args) {
    // let cmd = args.split("\n")
    // valid_cmd = validCMD(cmd)
    // valid_cmd ? send(cmd) : invalidCMD(cmd)
  }
  /*
  * Handles parsing of flags
  * 
  * @param  {} 
  */
  parseFlags() {

  }
  /*
  * When ending an unfinished input,
  * continue the command
  * 
  * @param  {} 
  */
  continuedInput() {
  }

  validateCMD() {
  }

  /*
  * Prepares output for sending to console.
  * 
  * @param  {} 
  */
  In(cmd) {

  }

  /*
  * Sends a msg back to console
  * 
  * @param msg {} 
  */
  send() {

  }
}

module.exports = Interpreter;
