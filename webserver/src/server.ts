import { createServer, IncomingMessage, ServerResponse } from 'http';

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
  console.log(`Request received: ${req.method} ${req.url}`);

  // Set header
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Handle routes
  if (req.url === '/' && req.method === 'GET') {
    res.end('Hello, TypeScript + Node.js!');
  } else if (req.url === '/about' && req.method === 'GET') {
    res.end('This is a simple TypeScript web server.');
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
