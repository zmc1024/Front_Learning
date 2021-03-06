// mysql的连接
var mysql = require('mysql')
var config = require('../config/default.js')

// 创建线程池的连接
var pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE
})

// 数据库查找语句
let query = function(sql, values) {
  // 数据库的连接
  return new Promise((resolve, reject) => {
    pool.getConnection(function(err, connection) {
      if(err) { // 连接报错
        reject(err)
      } else {
        connection.query(sql, values, (err, rows) => {
          if(err) { // 查找报错
            reject(err)
          } else {
            resolve(rows)
          }
          connection.release()  //释放连接
        })
      }
    })
  })
}

let users =
    `create table if not exists users(
     id INT NOT NULL AUTO_INCREMENT,
     name VARCHAR(100) NOT NULL,
     pass VARCHAR(100) NOT NULL,
     avator VARCHAR(100) NOT NULL,
     moment VARCHAR(100) NOT NULL,
     PRIMARY KEY ( id )
    );`

let posts =
    `create table if not exists posts(
     id INT NOT NULL AUTO_INCREMENT,
     name VARCHAR(100) NOT NULL,
     title TEXT(0) NOT NULL,
     content TEXT(0) NOT NULL,
     md TEXT(0) NOT NULL,
     uid VARCHAR(40) NOT NULL,
     moment VARCHAR(100) NOT NULL,
     comments VARCHAR(200) NOT NULL DEFAULT '0',
     pv VARCHAR(40) NOT NULL DEFAULT '0',
     avator VARCHAR(100) NOT NULL,
     PRIMARY KEY ( id )
    );`

let comment =
    `create table if not exists comment(
     id INT NOT NULL AUTO_INCREMENT,
     name VARCHAR(100) NOT NULL,
     content TEXT(0) NOT NULL,
     moment VARCHAR(40) NOT NULL,
     postid VARCHAR(40) NOT NULL,
     avator VARCHAR(100) NOT NULL,
     PRIMARY KEY ( id )
    );`


// 建表
let createTable = function(sql){
  return query(sql, [])
}
createTable(users)
createTable(posts)
createTable(comment)

// 注册用户
let insertData = function(value) {  //value:数组形式
  let _sql = "insert into users set name=?,pass=?,avator=?,moment=?;"
  return query(_sql, value)
}

module.exports = {
  insertData
}
