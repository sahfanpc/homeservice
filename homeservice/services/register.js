const db=require('./db')

const Register=(username,email,password,place,district)=>{
    return db.User.findOne({email})
    .then(user=>{
        console.log(user)
    if(user){
        return{
            statuscode:420,
            status:false,
            message:"already registered"
        }
    }else{
        const newUser=new db.User({
            username,
            email,
            password,
            place,
            district
        })
        newUser.save()
        return{
            statuscode:212,
            status:true,
            message:"user added seccessfully"
        }
    }
    })
}
const Login=(email,password)=>{
    return db.User.findOne({email,password})
    .then(user=>{
        console.log(user)
    if(user){
        return{
            statuscode:212,
            status:true,
            message:"login seccessfully",
            username:user.username
        }
    }else{
        return{
            statuscode:420,
            status:false,
            message:"login failed"
        }
    }
    })
}
module.exports={Register,Login}