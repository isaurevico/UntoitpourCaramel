// import updateDB from "./updateDB.js";

const db = require("./updateDB.js")
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
    // this.db = updateDB.db;
  }

  getPropertiesList(codePostaux) {
    this.options.params.zipCodes = codePostaux;

    return axios
      .request(this.options)
      .then(function (response) {
        // console.log(response.data[0]['id']);
        return response.data;
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  // insertToDb(properties) {
  //   this.db.query(`INSERT INTO 'caramel' ('id' `properties` , 'bedrooms' INT NOT NULL , 'businessUnit' TEXT NOT NULL , 'city' TEXT NOT NULL , 'rooms' INT NOT NULL , 'title' TEXT NOT NULL , 'livingArea'`);
  // }
}

module.exports = SeLogerAPI;

// let properties59 = selogerAPI.getPropertiesList("59");
// console.log(properties59);

let selogerAPI = new SeLogerAPI();

selogerAPI.getPropertiesList("59").then(function (properties59) {
  const res = JSON.parse(JSON.stringify(properties59));

  for (let i = 0; i < res["items"].length; i++) {
    let obj = {
      id: res["items"][i]["id"],
      bedrooms: res["items"][i]["bedrooms"],
      businessUnit: res["items"][i]["businessUnit"],
      city: res["items"][i]["city"],
      rooms: res["items"][i]["rooms"],
      title: res["items"][i]["title"],
      livingArea: res["items"][i]["livingArea"],
      price: res["items"][i]["price"],
    };

    for (let key in obj) {
      if (obj[key].toString().includes("'")) {
        obj[key] = obj[key].toString().replace("'", " ");
      }
    }

    let query = `INSERT INTO \`caramel\` (\`id\`, \`bedrooms\`, \`businessUnit\`, \`city\`, \`rooms\`, \`title\`, \`livingArea\`, \`price\`) VALUES ('${obj.id}', '${obj.bedrooms}', '${obj.businessUnit}', '${obj.city}', '${obj.rooms}', '${obj.title}', '${obj.livingArea}', '${obj.price}');`;
    db.query(query, (err, res) => {
      if (err) throw err;
    });
  }
  db.end();
  console.log("DB updated!");
});
