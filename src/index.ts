import { ApolloServer, gql } from "apollo-server";
import dotenv from "dotenv-safe";
import schema from "@src/graphql/schema/schema";
import { performAstCodegen } from "@src/codegen";

dotenv.config();

const server = new ApolloServer({
  schema,
});

performAstCodegen();

server.listen().then(({ url }) => {
  console.log(`🚀 Apollo server ready at ${url}`);
});