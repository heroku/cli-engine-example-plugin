// @flow

import {Topic} from 'cli-engine-command'

export const topics = [
  {name: 'cli', description: 'example CLI engine topic'}
]

import CLI from './commands/cli'
export const commands = [CLI]
