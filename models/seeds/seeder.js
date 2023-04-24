const mongoose=require('mongoose')
const restaurants=require('../restaurant')
// 載入餐廳JSON檔
const restaurant = require('../../restaurant.json')

if(process.env.NODE_ENV !=="production"){
    require('dotenv').config()
}

mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true,useUnifiedTopology:true})

const db=mongoose.connection
db.on('error',()=>{
    console.log('error')
})
db.once('open',()=>{
    for(let i=0;i<8;i++){
      restaurants.create(restaurant.results[i])
  }  console.log('mongodb connected')
})