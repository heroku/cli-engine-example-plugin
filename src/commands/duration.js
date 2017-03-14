// @ flow

import Command from 'cli-engine-command'
import DurationMixin from '../mixins/duration'

export default class extends DurationMixin(Command) {
  static topic = 'cli'
  static command = 'duration'
  static description = 'this is an example command showing duration parsing'

  static flags = [
    {name: 'foo'}
  ]

  run () {
    this.log(`duration: ${this.duration}`)
  }
}
