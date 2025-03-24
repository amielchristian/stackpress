//stackpress
import type Response from '@stackpress/ingest/dist/Response';
import type { ServerRequest } from '@stackpress/ingest/dist/types';
//root
import type { SessionPlugin } from '../../../types';

export default async function Authorize(req: ServerRequest, res: Response) {
  const server = req.context;
  const registry = server.plugin<SessionPlugin>('session');
  registry.authorize(req, res);
};