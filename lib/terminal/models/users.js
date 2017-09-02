"use strict";

/*
* Class to repsent the user that is logged
* into a shell. Configuration should strive
* to match UNIX users.
*
* @param  {} 
*/
class User {
  constructor(options) {
    this.config = options;
  }
  setHome(path) {
    // set $HOME in state
  }
  setUsername(username) {
    // set $USERNAME
  }
  setUser(username) {
    // check password
    // if authenticated, set user
  }
}

module.exports = User;
