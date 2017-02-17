const {Topic, Command} = require('heroku-cli-command')

class CLI extends Topic {}
CLI.topic = 'cli'
CLI.description = 'example CLI engine topic'

exports.topic = CLI

class CLICommand extends Command {
  async run () {
    this.log('ran cli:test')
  }
}

CLICommand.topic = 'cli'
CLICommand.command = 'test'

exports.commands = [CLICommand]
