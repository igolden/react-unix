"use strict";

class Shell {
  constructor(options) {
    this.config = options;
  }
  path() {
    return {
      hello: "world",
      goodye: "world",
    }
  }
}
module.exports = Shell;
