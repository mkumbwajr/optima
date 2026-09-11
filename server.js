import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const base = path.join(path.dirname(fileURLToPath(import.meta.url)), 'public');
const mime = { '.html':'text/html; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.css':'text/css; charset=utf-8', '.svg':'image/svg+xml', '.png':'image/png', '.woff2':'font/woff2' };
http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, 'http://localhost');
    const name = decodeURIComponent(url.pathname === '/' ? '/index.html' : url.pathname);
    const file = path.resolve(base, `.${name}`);
    if (!file.startsWith(`${base}${path.sep}`)) { res.writeHead(403); return res.end('Forbidden'); }
    const data = await fs.readFile(file);
    res.writeHead(200, { 'Content-Type':mime[path.extname(file)] || 'application/octet-stream', 'X-Content-Type-Options':'nosniff', 'Referrer-Policy':'no-referrer', 'Cache-Control':'no-store', 'Content-Security-Policy':"default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; connect-src 'self'; object-src 'none'; base-uri 'none'; frame-ancestors 'none'" });
    res.end(data);
  } catch { res.writeHead(404); res.end('Not found'); }
}).listen(Number(process.env.PORT || 4173), '127.0.0.1', () => console.log(`Optima is ready at http://127.0.0.1:${process.env.PORT || 4173}`));
