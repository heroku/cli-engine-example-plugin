// @flow

import type Command from 'cli-engine-command'

export const FLAG = {
  name: 'duration',
  description: 'a duration',
  required: true,
  hasValue: true
}

export default class Duration {
  cmd: Command
  constructor (cmd: Command) {
    this.cmd = cmd
  }

  get duration (): Date {
    let duration = this.cmd.flags.duration
    return new Date(duration)
  }
}
