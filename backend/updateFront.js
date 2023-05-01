// const api = require("./backendAPI.js");
// import { SeLogerAPI } from "./backendAPI.js";
// const selogerAPI = new SeLogerAPI();

const { db, updateDB } = require("./updateDB.js");
// import updateDB, {db} from "./updateDB.js";

let obj_list = new Array();
let obj = {};

db.query("SELECT * FROM caramel", (err, res) => {
  if (err) throw err;

  for (let i = 0; i < res.length; i++) {
    obj.id = res[i].id;
    obj.bedrooms = res[i].bedrooms;
    obj.businessUnit = res[i].businessUnit;
    obj.city = res[i].city;
    obj.rooms = res[i].rooms;
    obj.title = res[i].title;
    obj.livingArea = res[i].livingArea;
    obj.price = res[i].price;

    obj_list.push(obj);
  }
  console.log(obj_list);
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
