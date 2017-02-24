// @flow

import {Topic} from 'cli-engine-command'

export const topics = [
  class CLI extends Topic { topic = 'cli'; description = 'example CLI engine topic' }
]

import CLI from './commands/cli'
export const commands = [CLI]
