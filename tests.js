const { readFileAsync } = require('./utils');

test('should correctly read the contents of a file using readFileAsync', async () => {
  const data = await readFileAsync('sample.txt');
  expect(data).toBeDefined();
  expect(data).toMatch(/expected content/); // Add an expectation to verify content
});