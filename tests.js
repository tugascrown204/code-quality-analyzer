const { readFileAsync } = require('./utils');

test('readFileAsync reads a file', async () => {
  const data = await readFileAsync('sample.txt');
  expect(data).toBeDefined();
});
