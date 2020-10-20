// we get data from our third party api which is the cgucknorris api

const { RESTDataSource } = require("apollo-datasource-rest");


class ChuckNorrisAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.chucknorris.io/jokes/categories/";
  }

  // we fetch all categories 
  async getAllCategories() {
    const response = await this.get("");
    return Array.isArray(response) ? response : []
  }

  // we get a random joke from a category
  async getJokebyCategory(category) {
    const res = await this.get(`https://api.chucknorris.io/jokes/random?category=${category}`);
    let newArr = []
    res.categories.forEach((cat) =>  {
      let obj = {}
      obj["category"]=cat
      newArr.push(obj)
    })
    console.log(res.categories,"resjs")
    return {
      category: newArr,
      icon: res.icon_url,
      origin_url: res.url,
      joke: res.value,
    };
  }
}

module.exports = ChuckNorrisAPI;
