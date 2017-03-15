// @flow

import type Command from 'cli-engine-command'

export const DurationFlag = {
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

  get value (): Date {
    let duration = this.cmd.flags.duration
    return new Date(duration)
  }
}
