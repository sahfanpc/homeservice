const db=require('./db')

const adminlogin=(email,password)=>{
    return db.Main.findOne({email,password})
    .then(user=>{
        console.log(user)
    if(user){
        return{
            statuscode:212,
            status:true,
            message:"login seccessfully",
            
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
module.exports={adminlogin}