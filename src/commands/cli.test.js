// @flow

import CLI from './cli'

test('it runs the command', async () => {
  let cli = await CLI.run([], {mock: true})
  expect(cli.stdout.output).toContain('ran cli:test')
})
