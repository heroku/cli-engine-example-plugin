import { Command } from '@cli-engine/command'
import { cli } from 'cli-ux'

export default class extends Command {
  static topic = 'cli'
  static command = 'test'
  static description = 'this is an example command for cli-engine'
  static help = `it just prints some output

Example:

 $ cli-engine-example cli:test
 ran cli:test`

  async run() {
    cli.log('ran cli:test')
  }
}
