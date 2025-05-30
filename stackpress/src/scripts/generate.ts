//stackpress
import type Server from '@stackpress/ingest/Server';
//common
import Terminal from '../terminal/Terminal.js';

export default async function transform(server: Server<any, any, any>) {
  const terminal = new Terminal([ 'transform' ], server);
  await terminal.run();
};