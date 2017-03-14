// @flow

import Command, {type Flag} from 'cli-engine-command' // eslint-disable-line

const FLAG: Flag = {
  name: 'duration',
  description: 'a duration',
  required: true,
  hasValue: true
}

declare class App extends Command {
  duration: Date
}

export default function <T: Class<Command>> (Base: T): $Shape<Class<App>> {
  return class DurationMixin extends Base {
    static get flags (): Flag[] { return this._flags.concat([FLAG]) }
    static set flags (flags: Flag[]) { this._flags = flags }

    get duration (): Date {
      this.inspect(this.constructor.flags)

      // this is a little gross but I think needed to cast it to a string
      let duration = (((this.flags.duration): any): string)
      return new Date(duration)
    }
  }
}
