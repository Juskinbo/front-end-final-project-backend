const express = require("express")
const mysql = require("mysql2")
const bodyParser = require("body-parser")
// 从config.json读取
const config = require("./config.json")

const connection = mysql.createConnection(config)

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database: ", err)
    return
  }
  console.log("Connected to MySQL database!")
})
const app = express()
const port = 3000 // 或任何您想要使用的端口号
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.get("/api/news", (req, res) => {
  // 新闻动态
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "X-Requested-With")
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild"
  )
  res.header("X-Powered-By", " 3.2.1")
  res.header("Content-Type", "application/json;charset=utf-8")
  // 只获取最新的前十条
  const query =
    "SELECT * FROM Articles WHERE category_id = 15 ORDER BY publish_time DESC LIMIT 9"
  connection.query(query, (error, results, fields) => {
    if (error) {
      console.error("Error retrieving data from MySQL database: ", error)
      res.status(500).send("Error retrieving data from MySQL database.")
      return
    }
    res.status(200).json(results)
  })
})

app.get("/api/notice/:id", (req, res) => {
  // 通知公告
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "X-Requested-With")
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild"
  )
  res.header("X-Powered-By", " 3.2.1")
  res.header("Content-Type", "application/json;charset=utf-8")
  const id = req.params.id
  // 判断是否为数字
  if (isNaN(id)) {
    res.status(400).send("Invalid ID supplied.")
    return
  }
  // 根据数字1,2,3,4
  let query
  if (id == 1) {
    // 通知公告
    query = `SELECT * FROM Articles WHERE category_id = 19 ORDER BY publish_time DESC LIMIT 8`
  } else if (id == 2) {
    // 本科生教育
    query = `SELECT * FROM Articles WHERE category_id = 23 ORDER BY publish_time DESC LIMIT 8`
  } else if (id == 3) {
    // 科研通知
    query = `SELECT * FROM Articles WHERE category_id = 28 ORDER BY publish_time DESC LIMIT 8`
  } else if (id == 4) {
    // 学校动态
    query = `SELECT * FROM Articles WHERE category_id = 16 ORDER BY publish_time DESC LIMIT 8`
  } else {
    res.status(400).send("Invalid ID supplied.")
    return
  }
  connection.query(query, (error, results, fields) => {
    if (error) {
      console.error("Error retrieving data from MySQL database: ", error)
      res.status(500).send("Error retrieving data from MySQL database.")
      return
    }
    res.status(200).json(results)
  })
})
// app.get("/api/news/:id/comments", (req, res) => {
//   res.header("Access-Control-Allow-Origin", "*");
app.get("/api/researches", (req, res) => {
  // 科研成果
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "X-Requested-With")
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild"
  )
  res.header("X-Powered-By", " 3.2.1")
  res.header("Content-Type", "application/json;charset=utf-8")
  const query = `SELECT * FROM Articles WHERE category_id = 32 ORDER BY publish_time DESC LIMIT 9`
  connection.query(query, (error, results, fields) => {
    if (error) {
      console.error("Error retrieving data from MySQL database: ", error)
      res.status(500).send("Error retrieving data from MySQL database.")
      return
    }
    res.status(200).json(results)
  })
})
app.get("/api/academics", (req, res) => {
  // 教学科研动态
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "X-Requested-With")
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild"
  )
  res.header("X-Powered-By", " 3.2.1")
  res.header("Content-Type", "application/json;charset=utf-8")
  const query = `SELECT * FROM Articles WHERE category_id = 29 ORDER BY publish_time DESC LIMIT 9`
  connection.query(query, (error, results, fields) => {
    if (error) {
      console.error("Error retrieving data from MySQL database: ", error)
      res.status(500).send("Error retrieving data from MySQL database.")
      return
    }
    res.status(200).json(results)
  })
})
app.get("/api/innovations", (req, res) => {
  // 创新创业
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "X-Requested-With")
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild"
  )
  res.header("X-Powered-By", " 3.2.1")
  res.header("Content-Type", "application/json;charset=utf-8")
  const query = `SELECT * FROM Articles WHERE category_id = 45 ORDER BY publish_time DESC LIMIT 9`
  connection.query(query, (error, results, fields) => {
    if (error) {
      console.error("Error retrieving data from MySQL database: ", error)
      res.status(500).send("Error retrieving data from MySQL database.")
      return
    }
    res.status(200).json(results)
  })
})
app.get("/api/information", (req, res) => {
  // 党务信息
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "X-Requested-With")
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild"
  )
  res.header("X-Powered-By", " 3.2.1")
  res.header("Content-Type", "application/json;charset=utf-8")
  const query = `SELECT * FROM Articles WHERE category_id = 17 ORDER BY publish_time DESC LIMIT 9`
  connection.query(query, (error, results, fields) => {
    if (error) {
      console.error("Error retrieving data from MySQL database: ", error)
      res.status(500).send("Error retrieving data from MySQL database.")
      return
    }
    res.status(200).json(results)
  })
})
app.get("/article:id", (req, res) => {
  // 党务信息
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "X-Requested-With")
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild"
  )
  res.header("X-Powered-By", " 3.2.1")
  res.header("Content-Type", "application/json;charset=utf-8")
  const article_id = req.params.id
  console.log(article_id)
  const query = `SELECT * FROM Articles WHERE article_id = ${article_id} ORDER BY publish_time DESC LIMIT 9`

  connection.query(query, (error, results, fields) => {
    if (error) {
      console.error("Error retrieving data from MySQL database: ", error)
      res.status(500).send("Error retrieving data from MySQL database.")
      return
    }
    res.status(200).json(results)
  })
})
app.get("/list:id", (req, res) => {
  // 党务信息
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "X-Requested-With")
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild"
  )
  res.header("X-Powered-By", " 3.2.1")
  res.header("Content-Type", "application/json;charset=utf-8")
  const category_id = req.params.id
  console.log(category_id)
  const query = `SELECT * FROM Articles WHERE category_id = ${category_id} ORDER BY publish_time`
  connection.query(query, (error, results, fields) => {
    if (error) {
      console.error("Error retrieving data from MySQL database: ", error)
      res.status(500).send("Error retrieving data from MySQL database.")
      return
    }
    res.status(200).json(results)
  })
})
app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`)
})
