// @flow

export const topics = [
  {name: 'cli', description: 'example CLI engine topic'}
]

export const commands = [
  require('./commands/cli'),
  require('./commands/duration')
]
