const express=require('express')
const app=express()
const port=3000
const exphbs=require('express-handlebars')
// 載入mongoose
const mongoose=require('mongoose')
// 非正式環境下使用dotenv
if(process.env.NODE_ENV !=='production'){
    require('dotenv').config()
}
// 連線到MongoDB
mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true,useUnifiedTopology:true})
// 取得連線狀況
const db=mongoose.connection
db.on('error',()=>{console.log(error)})
db.once('open',()=>{console.log('mongoose connected')})

// 載入model
const restaurants=require('./models/restaurant')
const restaurant = require('./models/restaurant')
// body-parser
app.use(express.urlencoded({extended:true}))
// 設定handlebar
app.engine('handlebars',exphbs({defaultLayout:'main'}))
app.set('view engine','handlebars')

// 設定靜態檔案路由
app.use(express.static('public'))

// 顯示index局部樣版(restaurant list)
app.get('/',(req,res)=>{
    restaurants.find()
    .lean()
    .then(restaurant=>res.render('index',{restaurant}))
    .catch(error=>console.log(error))
})

// 新增餐廳表單路由
app.get('/restaurants/new',(req,res)=>{
    res.render('new')
})
// 新增餐廳資料路由
app.post('/restaurants',(req,res)=>{
 const newrestaurant =req.body
    return restaurants.create(newrestaurant)
    .then(()=>res.redirect('/'))
    .catch(error=>{console.log(error)})
})

// 設定動態路由顯示show局部樣版(restaurant detail)
app.get('/restaurants/:restaurant_id',(req,res)=>{
  const restaurantDetail=restaurant.results.find(function(restaurants){
      return req.params.restaurant_id === restaurants.id.toString()
  })
    res.render('show', { restaurant: restaurantDetail })
})


// 啟動伺服器並監聽
app.listen(port,()=>{
    console.log(`localhost:${port}`)
})