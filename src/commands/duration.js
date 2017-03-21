// @flow

import Command from 'cli-engine-command'
import DurationFlag from '../flags/duration'

export default class extends Command {
  static topic = 'cli'
  static command = 'duration'
  static description = 'this is an example command showing duration parsing'
  static flags = {duration: DurationFlag()}

  async run () {
    this.log('duration:')
    this.inspect(this.flags.duration)
  }
}
