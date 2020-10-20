const { ApolloServer } = require("apollo-server");
const typeDefs = require("./typeDef");
const resolvers = require("./resolvers");
const { createStore } = require("./utils");

const ChuckCategoryApi = require("./dataSources/chuckCategories");
const mongoose = require("mongoose");

// initialise store
const store = createStore();

// mongo db connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// create apollo server
const server = new ApolloServer({
  introspection: true,
  playground: true,
  typeDefs,
  resolvers,
  dataSources: () => ({
    CategoryApi: new ChuckCategoryApi(),
    // userAPI: new UserAPI({ store }),
  }),
});

var port = process.env.PORT || 4000;
// run server
server.listen(port).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
