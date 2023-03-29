const mysql = require("mysql");
const dbName = "agregator";
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: dbName,
});

db.connect(function (err) {
  if (err) throw err;
  console.log("Connecté à la base de données MySQL!");
});

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
