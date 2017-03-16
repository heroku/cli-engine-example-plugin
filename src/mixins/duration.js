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

  constructor(cmd: Command) {
    this.cmd = cmd
  }

  parse(arg: string) {
    let result = arg.match(/^(\d+) ?(ms|[sm]|milliseconds?|seconds?|minutes?)$/);
    if (result) {
      let magnitude = parseInt(result[1]);
      let unit = result[2];
      let multiplier = 1;
      switch (unit) {
        case 'ms':
        case 'millisecond':
        case 'milliseconds':
          multiplier = 1;
          break;
        case 's':
        case 'second':
        case 'seconds':
          multiplier = 1000;
          break;
        case 'm':
        case 'minute':
        case 'minutes':
          multiplier = 1000 * 60;
          break;
        default:
      }
      return magnitude * multiplier;
    }
  }

  wait() {
    return new Promise(resolve => setTimeout(() => {
      console.log('operation did not complete in provided duration');
      resolve()
    }, this.parse(this.cmd.flags.duration)))
  }

  get duration(): number {
    let duration = this.parse(this.cmd.flags.duration)
    return Number(duration)
  }
}
