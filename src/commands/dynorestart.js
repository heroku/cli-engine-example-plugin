// @flow

import Command from 'cli-engine-command'
import { Duration, FLAG as DurationFlag } from '../mixins/duration'

export default class extends Command {
  static topic = 'cli'
  static command = 'dynorestart'
  static description = 'this is an example command showing duration parsing. It takes five seconds to complete.'
  static flags = [
    DurationFlag
  ]
  duration = new Duration(this)

  run () {
    console.log('Restarting dynos. This will take five seconds. That is too long')
    return Promise.race([this.duration.wait(), this.main()])
  }

  main () {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('Done restarting dynos');
        resolve()
      }, 5000)
    })
  }
}
