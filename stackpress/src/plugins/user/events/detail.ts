//stackpress
import type Response from '@stackpress/ingest/dist/Response';
import type { ServerRequest } from '@stackpress/ingest/dist/types';
import { isHash } from '@stackpress/ingest/dist/helpers';
//root
import type { AuthExtended } from '../../../types';
//session
import { decrypt } from '../../../session/helpers';

export default async function AuthDetail(req: ServerRequest, res: Response) {
  //if there is no result object
  if (!isHash(res.body)) return;
  const server = req.context;
  //get the session seed
  const seed = server.config.path('session.seed', 'abc123');
  const results = res.body as Partial<AuthExtended>;
  //decode token
  try {
    results.token = decrypt(results.token as string, seed);
  } catch (e) {}
  //remove sensitive data
  delete results.secret;
};