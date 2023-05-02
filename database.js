var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', //
  password: '(R9j2H?m', //
  database: 'db_caramel',
})
connection.connect((err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('Database connected')
})
module.exports = connection
