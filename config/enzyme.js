/* eslint-disable @typescript-eslint/no-require-imports */
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({adapter: new Adapter()});
