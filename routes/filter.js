var express = require("express");
var connection = require("../database.js");
var router = express.Router();

router.get("/", function (req, res, next) {

    if (req.url == "/") {
        res.redirect("/apparts");
    } 

  let query = `SELECT * FROM caramel WHERE city = '${req.query.city}' AND rooms >= '${req.query.rooms}' AND bedrooms >= '${req.query.bedrooms}' AND livingArea >= '${req.query.livingArea}' AND price BETWEEN '${req.query.priceMin}' AND '${req.query.priceMax}'`;

  connection.query(query, function (err, rows) {
    if (err) {
      req.flash("error", err);
      res.render("filter", { data: "" });
    } else {
      res.render("filter", { data: rows });
    }
  });
});
module.exports = router;
