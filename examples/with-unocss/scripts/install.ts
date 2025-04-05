//stackpress
import type { Engine } from 'stackpress/sql';
import * as scripts from 'stackpress/scripts';
//plugins
import bootstrap from '../plugins/bootstrap';

async function install() {
  const server = await bootstrap();
  const database = server.plugin<Engine>('database');
  await scripts.install(server, database);
};

install()
  .then(() => process.exit(0))
  .catch(e => {
    console.error(e);
    process.exit(1);
  });