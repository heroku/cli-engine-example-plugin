// @flow

import type Command from 'cli-engine-command'

export const FLAG = {
  name: 'duration',
  description: 'a duration',
  required: true,
  hasValue: true
}

export default class DurationMixin {
  cmd: Command
  constructor (cmd: Command) {
    this.cmd = cmd
  }

  get duration (): Date {
    // this is a little gross but I think needed to cast it to a string
    let duration = this.cmd.flags.duration
    return new Date(duration)
  }
}
