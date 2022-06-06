import jsonServer from 'json-server';

const server = jsonServer.create();

const router = jsonServer.router('db.json');

const middlewares = jsonServer.defaults();

const port = process.env.PORT || 8080;

server.use(middlewares);
server.use('/v1/', router);

server.listen(port, () => {
  console.log('JSON-server rodando');
});
