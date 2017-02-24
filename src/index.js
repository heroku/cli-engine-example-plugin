// @flow

import Command, {Topic} from 'cli-engine-command'

export class CLI extends Topic {
  topic = 'cli'
  description = 'example CLI engine topic'
}

export class CLICommand extends Command {
  static topic = 'cli'
  static command = 'test'

  run () {
    this.log('ran cli:test')
  }
}
