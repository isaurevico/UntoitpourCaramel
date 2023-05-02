const SeLogerAPI = require("./backendAPI.js");
const mysql = require("mysql");

// import { SeLogerAPI } from "./backendAPI.js";
// import mysql from "mysql.js";

const dbName = "db_caramel";
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "(R9j2H?m",
  database: dbName,
  connectionLimit: 10,
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Connecté à la base de données MySQL!");
});

/*export*/ function updateDB() {
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
      };

      // On retire les apostrophes des valeurs pour éviter les erreurs SQL
      for (let key in obj) {
        if (obj[key].toString().includes("'")) {
          obj[key] = obj[key].toString().replace("'", " ");
        }
      }

      // On insère les données dans la base de données
      let query = `INSERT IGNORE INTO \`caramel\` (\`id\`, \`bedrooms\`, \`businessUnit\`, \`city\`, \`rooms\`, \`title\`, \`livingArea\`, \`price\`) VALUES ('${obj.id}', '${obj.bedrooms}', '${obj.businessUnit}', '${obj.city}', '${obj.rooms}', '${obj.title}', '${obj.livingArea}', '${obj.price}');`;
      db.query(query, (err, res) => {
        if (err) throw err;
      });
    }
    db.end();
    console.log("DB updated!");
  });
}

module.exports = { db, updateDB };

// updateDB();

/*
===Structure de données===

bedrooms: int,
businessUnit: string,
city: string,
id: int,
isExclusiveness: bool,
isIndividual: bool,
isPriceVariationDisplayed: bool,
isNew: bool,
isSelection: bool,
level: int,
listingType: int,
livingArea: float,
livingAreaUnit: string,
medias: [],
permalink: string,
photos: [Array],
price: int,
polygon: string,
priceAnnuity: int,
priceVariation: [Object],
priceUnit: string,
professional: [Object],
publicationId: int,
realtyType: int,
rooms: int,
thirdPartyId: int,
title: string,
transactionType: int,
urlVideo: string,
zipCode: string

==========================
*/
