var express = require("express");
var connection = require("../database.js");
var router = express.Router();

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

function updateDB() {
  let selogerAPI = new SeLogerAPI();

  selogerAPI.getPropertiesList("59").then(function (properties59) {
    const res = JSON.parse(JSON.stringify(properties59));

    // On stocke les données voulues dans un objet
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
        permalink: res["items"][i]["permalink"],
      };

      // On retire les apostrophes des valeurs pour éviter les erreurs SQL
      for (let key in obj) {
        if (obj[key].toString().includes("'")) {
          obj[key] = obj[key].toString().replace("'", " ");
        }
      }

      // On insère les données dans la base de données
      let query = `INSERT IGNORE INTO \`caramel\` (\`id\`, \`bedrooms\`, \`businessUnit\`, \`city\`, \`rooms\`, \`title\`, \`livingArea\`, \`price\`, \`permalink\`) VALUES ('${obj.id}', '${obj.bedrooms}', '${obj.businessUnit}', '${obj.city}', '${obj.rooms}', '${obj.title}', '${obj.livingArea}', '${obj.price}', '${obj.permalink}');`;
      connection.query(query, (err, res) => {
        if (err) throw err;
      });
    }
    console.log("DB updated!");

    connection.query(
      `INSERT INTO updates (timestamp) VALUES (${Date.now()})`,
      (err, res) => {
        if (err) throw err;
      }
    );
  });
}

router.get("/", function (req, res, next) {
  // verifier que last update pas ya 5min
  connection.query(
    "SELECT timestamp FROM updates ORDER BY id DESC",
    function (err, rows) {
      let timestamp = Date.now();
      // si oui, update
      if (timestamp - rows[0].timestamp > 1024) {
        console.log("Updating DB...");
        updateDB();
      } else {
        console.log("DB already up to date!");
      }
    }
  );
  res.redirect("/apparts");
});
module.exports = router;
