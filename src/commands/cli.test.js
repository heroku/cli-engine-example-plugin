// @flow

import CLI from './cli'

test('it runs the command', async () => {
  let cli = await CLI.mock()
  expect(cli.out.stdout.output).toContain('ran cli:test')
})
