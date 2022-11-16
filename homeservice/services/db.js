const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/HOMETANANCE',{
    useNewUrlParser:true
})
  const User=mongoose.model('User',{
    username:String,
    email:String,
    password:String,
    place:String,
    district:String
})
const Admin=mongoose.model('Admin',{
    name:String,
    address:String,
    proffetion:String,
    add:String,
    address2:String,
    city:String,
    condact:Number,
    password:String
})
const Main=mongoose.model('Main',{
    email:String,
    password:String
})
module.exports={User,Admin,Main}