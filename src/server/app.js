const express = require('express')
const path = require('path')
const app = express()
// const CategoryDB = require('./scripts/model/category')
const categoryController = require('./scripts/controller/category')

//设置跨域访问
app.all('*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  // res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
app.use(express.static(path.resolve(__dirname,'../assets/')))
app.get('/api/category',categoryController.getCategory);
app.listen(3000)
console.log('listening port 3000')