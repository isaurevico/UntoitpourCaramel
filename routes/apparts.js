var express = require('express')
var connection = require('../database.js')
var router = express.Router()

router.get('/', function (req, res, next) {
  connection.query('SELECT * FROM caramel ORDER BY price desc', function (err, rows) {
    if (err) {
      req.flash('error', err)
      res.render('apparts', { data: '' })
    } else {
      res.render('apparts', { data: rows })
    }
  })
})
module.exports = router