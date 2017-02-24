// @flow
/* globals
   test
   expect
 */

import {CLICommand as CLI} from '.'

test('it runs the command', async () => {
  let cli = new CLI({mock: true})
  await cli._run()
  expect(cli.stdout.output).toContain('ran cli:test')
})
