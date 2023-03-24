const axios = require("axios");
class SeLogerAPI {
  constructor(codesPostaux) {
    this.options = {
      method: "GET",
      url: "https://seloger.p.rapidapi.com/properties/list",
      params: {
        zipCodes: codesPostaux,
        pageIndex: "1",
        pageSize: "50",
        realtyTypes: "1",
        transactionType: "1",
        sortBy: "0",
        includeNewConstructions: "true",
      },
      headers: {
        "X-RapidAPI-Key": "1dfeb33feemshd1ffb63572a1339p1e89b4jsn287f125ec49c",
        "X-RapidAPI-Host": "seloger.p.rapidapi.com",
      },
    };
  }

  getPropertiesList() {
    axios
      .request(this.options)
      .then(function (response) {
        // console.log(response.data);
        return response.data;
      })
      .catch(function (error) {
        console.error(error);
      });
  }
}


let selogerAPI = new SeLogerAPI("59");
let properties59 = selogerAPI.getPropertiesList();

console.log(properties59);