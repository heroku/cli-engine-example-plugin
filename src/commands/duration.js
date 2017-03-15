// @flow

import Command from 'cli-engine-command'
import Duration from '../mixins/duration'

export default class extends Command {
  static topic = 'cli'
  static command = 'duration'
  static description = 'this is an example command showing duration parsing'

  duration = new Duration(this)

  run () {
    this.log(`duration: ${this.duration.toString()}`)
  }
}
