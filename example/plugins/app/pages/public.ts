//node
import fs from 'node:fs';
import path from 'node:path';
//stackpress
import { action } from 'stackpress/server';

const mime: Record<string, string> = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

export default action(async function StaticFile(req, res, ctx) {
  const resource = req.url.pathname.substring(1).replace(/\/\//, '/'); 
  if (resource.length === 0) return;
  const assets = ctx.config.get<string>('assets');
  const environment = ctx.config.get<string>('server', 'environment');
  const development = environment === 'development';
  const file = development 
    ? path.resolve(assets, resource)
    : path.resolve(assets, resource); 
  if (fs.existsSync(file)) {
    const ext = path.extname(file);
    const type = mime[ext] || 'application/octet-stream';
    res.setBody(type, fs.createReadStream(file));
  }
});