// @flow

import Command from 'cli-engine-command'

export default class extends Command {
  static topic = 'cli'
  static command = 'test'

  run () {
    this.log('ran cli:test')
  }
}
