// @flow

import type {Flag} from 'cli-engine-command'

type Options = $Shape<Flag<Date>>

export default function DurationFlag (options: Options = {}, env: typeof process.env = process.env): Flag<Date> {
  const defaultOptions: Options = {
    description: 'a duration',
    parse: (input) => {
      if (!input) {
        if (options.required) throw new Error('No org specified')
        return
      }
      return new Date(input)
    }
  }
  return Object.assign(defaultOptions, options)
}
