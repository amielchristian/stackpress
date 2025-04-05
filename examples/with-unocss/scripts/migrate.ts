//stackpress
import type { Engine } from 'stackpress/sql';
import * as scripts from 'stackpress/scripts';
//plugins
import bootstrap from '../plugins/bootstrap';

async function migrate() {
  const server = await bootstrap();
  const database = server.plugin<Engine>('database');
  await scripts.migrate(server, database);
};

migrate()
  .then(() => process.exit(0))
  .catch(e => {
    console.error(e);
    process.exit(1);
  });