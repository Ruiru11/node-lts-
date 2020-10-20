const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    Categories: [Category]!
    RandomJoke(category:String):RandomJoke
}
type Category {
    category:String
}

type RandomJoke {
  category: [Category]!
  icon: String
  origin_url: String
  joke: String
 
}


type User {
  id: ID!
  username: String!
  email: String!
  password: String!
}
type Mutation {
  login(email: String, password: String): Auth
  createUSer(email: String, password: String, username: String): Auth
}
type Auth {
  message: String
  token: String
  status: String
}
`;

module.exports = typeDefs;
