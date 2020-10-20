// const { paginateResults } = require("./utils");
// const jwt = require("jsonwebtoken");
// const User = require("./models/users");
// const WatchSchedule = require("./models/watchSchedule");
// const CommentTvShow = require("./models/commentTvShow");

module.exports = {
  Query: {
    Categories: async (_, { }, { dataSources }) => {
    let newArr = []
      const allCategories = await dataSources.CategoryApi.getAllCategories();
      allCategories.forEach((cat) =>  {
        let obj = {}
        obj["category"]=cat
        newArr.push(obj)
      }
      )

      return newArr;
    },
    RandomJoke: async (_, { category }, { dataSources }) => {
      return await dataSources.CategoryApi.getJokebyCategory(category);
    },
    // users: (_, __, { dataSources }) => dataSources.userAPI.getUsers(),
  },
  Mutation: {
    // login: async (_, { email, password }, {}) => {
    //   let response = {};
    //   await User.findOne({ email }).then((user) => {
    //     if (!user) {
    //       response = { message: "Email Does not exists", status: "failed" };
    //       return response;
    //     }
    //     // ensure password match
    //     if (user.password !== password) {
    //       response = { message: "Wrong Password", status: "failed" };
    //       return response;
    //     }
    //     // details correct, generate token and login user
    //     const token = jwt.sign(
    //       { id: user._id, email: user.email },
    //       "secret_key",
    //       { expiresIn: 60 * 60 }
    //     );
    //     response = { token, message: "Login successful", status: "success" };
    //     return response;
    //   });
    //   return response;
    // },
    // createUSer: async (_, { email, password, username }, {}) => {
    //   let response = {};
    //   // check if user exist
    //   await User.findOne({ email }).then((user) => {
    //     if (user) {
    //       response = { message: "Email Already exists" };
    //       return response;
    //     }
    //     // create/register new user
    //     const newUser = new User({ email, password, username });
    //     newUser.save();
    //     response = {
    //       message: "User Created Successfully",
    //     };
    //     return response;
    //   });
    //   return response;
    // },
  },
};
