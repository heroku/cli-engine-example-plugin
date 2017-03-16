// @flow

import Command from 'cli-engine-command'
import Duration from '../mixins/duration'
import { FLAG as DurationFlag } from '../mixins/duration'

export default class extends Command {
  static topic = 'cli'
  static command = 'printbricks'
  static description = 'this is an example command showing duration parsing'
  static flags = [
    DurationFlag
  ]
  run() {
    let duration = new Duration(this)
    for(let i = 1; i <= 10; i++){
      console.log('#')
    }
    console.log(`Hypothetically, you could have this command abort if it took longer than your supplied ${duration.duration} ms`)
  }
}
