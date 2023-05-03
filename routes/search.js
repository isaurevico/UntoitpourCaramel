var express = require("express");
var connection = require("../database.js");
var router = express.Router();

router.get("/", function (req, res, next) {
  let query = "";

  if (!isNaN(req.query.search)) {
    updateDB(req.query.search);
  }

  switch (req.query.search) {
    case "price":
      query = `SELECT * FROM caramel ORDER BY price`;
      break;
    case "rooms":
      query = `SELECT * FROM caramel ORDER BY rooms desc`;
      break;
    case "bedrooms":
      query = `SELECT * FROM caramel ORDER BY bedrooms desc`;
      break;
    case "livingArea":
      query = `SELECT * FROM caramel ORDER BY livingArea desc`;
      break;
    default:
      query = `SELECT * FROM caramel WHERE city = '${req.query.search}'`;
      break;
  }

  connection.query(query, function (err, rows) {
    if (err) {
      req.flash("error", err);
      res.render("search", { data: "" });
    } else {
      res.render("search", { data: rows });
    }
  });
});
module.exports = router;
