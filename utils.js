import fs from 'fs';
import { promisify } from 'util';

const readFileAsync = promisify(fs.readFile);

export { readFileAsync };