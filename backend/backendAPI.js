const axios = require("axios");
class SeLogerAPI {
  constructor() {
    this.options = {
      method: "GET",
      url: "https://seloger.p.rapidapi.com/properties/list",
      params: {
        zipCodes: "59",
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

  getPropertiesList(codePostaux) {
    this.options.params.zipCodes = codePostaux;
  
    return axios
      .request(this.options)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  
}

let selogerAPI = new SeLogerAPI();

selogerAPI.getPropertiesList("59").then(function (properties59) {
  console.log(properties59);
});

// let properties59 = selogerAPI.getPropertiesList("59");
// console.log(properties59);
