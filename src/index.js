const { ApolloServer } = require("apollo-server");
const typeDefs = require("./typeDef");
const resolvers = require("./resolvers");
const { createStore } = require("./utils");

const ChuckCategoryApi = require("./dataSources/chuckCategories");
const mongoose = require("mongoose");

// initialise store
const store = createStore();

// mongo db connection 
mongoose.connect("mongodb://localhost:27017/nodelts", {
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
    CategoryApi: new ChuckCategoryApi(),
    // userAPI: new UserAPI({ store }),
  }),
});

// run server
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
