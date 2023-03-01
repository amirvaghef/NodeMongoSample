import express from "express";
// require("dotenv").config();
import {} from "dotenv/config";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
// const {
//   ApolloServerPluginLandingPageGraphQLPlayground,
// } from "apollo-server-core");
import db from "./db.js";
import models from "./models/index.js";
import typeDefs from "./graphQL/schema.js";
import resolvers from "./graphQL/resolver/index.js";

// const app = express();
const port = Number(process.env.PORT) || 3000;
// const startApollo = async (typeDefs, resolvers) => {
const server = new ApolloServer({
  typeDefs,
  resolvers,

  // plugins: [
  //   ApolloServerPluginLandingPageGraphQLPlayground({}),
  // Install a landing page plugin based on NODE_ENV
  //   process.env.NODE_ENV === "production"
  //     ? ApolloServerPluginLandingPageProductionDefault({
  //         graphRef: "my-graph-id@my-graph-variant",
  //         footer: false,
  //       })
  //     : ApolloServerPluginLandingPageLocalDefault({ footer: false }),
  // ],
});
const { url } = await startStandaloneServer(server, {
  listen: { port },
  context: async () => {
    return models;
  },
});
// await server.start();
// server.applyMiddleware({ app, path: "/graphql" });
// };
// startApollo(typeDefs, resolvers);

try {
  db.connect(process.env.DB_HOST_DEV);
  console.log("Connect Successfully");
} catch (error) {
  console.log(error.message);
}

// app.get("/", (req, res) => res.send("Hello Worlds!!!!!" + process.env.PORT));
// app.listen({ port }, () => console.log(`Listening on port ${port}!`));
console.log(`🚀  Server ready at: ${url}`);
