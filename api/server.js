import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { default: handler } = require('../dist/server/server.js');

export default handler;
