var express = require("express");
var connection = require("../database.js");
var router = express.Router();

router.get("/", function (req, res) {
  let query = "SELECT * FROM caramel ORDER BY price desc";

  // if (req.url != "/") {
  //   var filter = {
  //     dep: "",
  //     city: "",
  //     bedrooms: "",
  //     rooms: "",
  //     livingArea: "",
  //     priceMin: "",
  //     priceMax: "",
  //   };

  //   filter.dep = req.query.dep;
  //   filter.city = req.query.city;
  //   filter.bedrooms = req.query.bedrooms;
  //   filter.rooms = req.query.rooms;
  //   filter.livingArea = req.query.livingArea;
  //   filter.priceMin = req.query.priceMin;
  //   filter.priceMax = req.query.priceMax;

  //   query = `SELECT * FROM caramel WHERE city = '${filter.city}'`;
  // }

  connection.query(query, function (err, rows) {
    if (err) {
      req.flash("error", err);
      res.render("apparts", { data: "" });
    } else {
      res.render("apparts", { data: rows });
    }
  });
});

// document.getElementById("search").addEventListener("keyup", function (e) {
//   var searchInput = document.getElementById("search");
//   console.log(searchInput.value);
// });

module.exports = router;
