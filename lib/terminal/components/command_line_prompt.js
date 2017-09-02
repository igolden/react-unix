class CommandLinePrompt {
  constructor(options) {
    this.config = options;
    this.username = "root"
    this.host = 'localhost' 
    this.git = ''
  }
  load() {

  }
  /*
  * Reloads the prompt config if changed
  * 
  * @param  {} 
  */
  reload() {
    // exec $SHELL
  }
}

module.exports = Prompt;
