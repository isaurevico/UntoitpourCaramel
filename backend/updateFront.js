// const api = require("./backendAPI.js");
// import { SeLogerAPI } from "./backendAPI.js";
// const selogerAPI = new SeLogerAPI();

// const db = require("./updateDB");
const {db, updateDB} = require("./updateDB.js");

db.query("SELECT * FROM caramel", (err, res) => {
  if (err) throw err;
  console.log(res);
});

db.end();
// let annonces = document.getElementsByClassName("annonce");

// for (annonce in annonces) {
//   let i = 0;
//   let prix = annonce.getElementsByClassName("annoncePrice")[0];
//   let ville = annonce.getElementsByClassName("annonceCity")[0];
//   let pieces = annonce.getElementsByClassName("annonceRooms")[0];
//   let desc = annonce.getElementsByClassName("annonceDesc")[0];

//   prix.innerHTML = obj["items"][i]["price"] + " €";
//   console.log(obj["items"][i]["price"]);
//   i++;
// }
