import 'graphql-import-node';
import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';

import * as schema from '../graphql/schema.graphql';
import database from './configs/database.config';
import config from './configs/config';
import User from './resolvers/user.resolver';

const app = express();

database
  .connect()
  .then(() => {
    console.log('postgresql database connected');
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = new ApolloServer({
  typeDefs: schema,
  resolvers: [User],
});

const run = async () => {
  await server.start();
  server.applyMiddleware({ app, path: '/api/graphql' });

  app.listen(config.port, () => {
    console.log(`server already running on port ${config.port}`);
    console.log(`http://localhost:${config.port}/api/graphql`);
  });
};

run();
