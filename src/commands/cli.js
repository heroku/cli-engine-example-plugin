// @flow

import Command from 'cli-engine-command'

export default class extends Command {
  static topic = 'cli'
  static command = 'test'
  static help = 'this is an example command for cli-engine'

  run () {
    this.log('ran cli:test')
  }
}
