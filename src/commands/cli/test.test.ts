import CLITest from './test'

test('it says hello to the world', async () => {
  const { stdout } = await CLITest.mock()
  expect(stdout).toEqual('ran cli:test\n')
})
