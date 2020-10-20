const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const { createStore } = require("./utils");

const TVShowAPI = require("./datasources/tv");
const UserAPI = require("./datasources/user");
const mongoose = require("mongoose");

// initialise store
const store = createStore();

// connect to mongo db
mongoose.connect("mongodb+srv://nic:nic@cluster0.n20mo.mongodb.net/tv-mazer?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// create apollo server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    tvShowAPI: new TVShowAPI(),
    userAPI: new UserAPI({ store }),
  }),
});

// run server
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
