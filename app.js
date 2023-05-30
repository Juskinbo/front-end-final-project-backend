const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
// 从config.json读取
const config = require('./config.json');

const connection = mysql.createConnection(config);

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database: ', err);
    return;
  }
  console.log('Connected to MySQL database!');
});
const app = express();
const port = 3000; // 或任何您想要使用的端口号
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/data', (req, res) => {
  const query = 'SELECT * FROM Users';
  connection.query(query, (error, results, fields) => {
    if (error) {
      console.error('Error retrieving data from MySQL database: ', error);
      res.status(500).send('Error retrieving data from MySQL database.');
      return;
    }
    res.status(200).json(results);
  });
});
app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});
