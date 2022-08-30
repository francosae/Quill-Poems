import { typeDefs } from "./graphql/schema";
import { resolvers } from "./graphql/resolvers";
import { PORT } from "./config"
const express = require('express');
const http = require('http')
const cors = require('cors')
const { ApolloServer } = require('apollo-server-express');
const {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault
} = require('apollo-server-core');

async function startApolloServer() {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
  });

  await server.start();

  // Additional middleware can be mounted at this point to run before Apollo.
  app.use(cors())

  // Mount Apollo middleware here.
  server.applyMiddleware({ app, path: '/api/graphql' });
  await new Promise<void>(resolve => httpServer.listen({ port: PORT }, resolve));
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
  return { server, app };
}
startApolloServer();