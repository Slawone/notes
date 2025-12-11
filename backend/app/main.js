import createServer from 'fastify';
import { initController } from './controller.js';
import { diContainer } from './diContainer.js';

const serverOptions = {
  logger: true,
};

const server = createServer(serverOptions);
const routes = initController(diContainer);

for (const route of routes) server.route(route);

server.listen({ port: 5000 });
