// @flow

import Command from 'cli-engine-command'

export default class extends Command<*> {
  static topic = 'cli'
  static command = 'test'
  static description = 'this is an example command for cli-engine'
  static help = `it just prints some output

Example:

 $ cli-engine-example cli:test
 ran cli:test`

  async run () {
    this.out.log('ran cli:test')
  }
}
