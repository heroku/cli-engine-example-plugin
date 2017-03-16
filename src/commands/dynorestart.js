// @flow

import Command from 'cli-engine-command'
import { default as Duration, FLAG as DurationFlag } from '../mixins/duration'

export default class extends Command {
  static topic = 'cli'
  static command = 'dynorestart'
  static description = 'this is an example command showing duration parsing. It takes five seconds to complete.'
  static flags = [
    DurationFlag
  ]
  duration = new Duration(this)
  wait = async function wait(ms: int) {  return new Promise(resolve => setTimeout(resolve, ms)) }

  run () {
    console.log('Restarting dynos. This will take five seconds. That is too long')
    return Promise.race([this.duration.wait(), this.main()])
  }


  async main () {
    await this.wait(5000)
    console.log('Done restarting dynos')
  }
}
