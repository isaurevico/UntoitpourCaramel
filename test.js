const axios = require("axios");

const options = {
  method: "GET",
  url: "https://seloger.p.rapidapi.com/properties/list",
  params: {
    zipCodes: "75",
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

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
