const db=require('./db')

const Profil=(proffetion)=>{
    return db.Admin.find({proffetion})
        .then(admin=>{
        if(admin){ 
         return admin
        }
              })
    }
    const Profile=(name,address,proffetion,add,address2,city,condact,password)=>{
        return db.Admin.findOne({name,proffetion})
        .then(admin=>{
            if(admin){
                return{
                    statuscode:420,
                    status:false,
                    message:"already registered"
                }
            }else{
                const newAdmin=new db.Admin({
                    name,
                    address,
                    proffetion,
                    add,
                    address2,
                    city,
                    condact,
                    password
                })
                newAdmin.save()
                return{
                    statuscode:212,
                    status:true,
                    message:"registered seccessfully"
                }
            }
        })
    }

    const Login1=(condact,password)=>{
        return db.Admin.find({condact,password})
        .then(admin=>{
            if(admin){
                return{
                    statuscode:212,
                    status:true,
                    message:"login seccessfully"
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
    const aprofile=(condact,password)=>{
        return db.Admin.find({condact,password})
        .then(admin=>{
        if(admin){ 
         return admin
        }
              })
    }
    const aprofile1=(condact,password)=>{
        return db.Admin.find({condact,password})
        .then(admin=>{
        if(admin){ 
         return admin
        }
              })
    }
    
    const fin=()=>{
        return db.Admin.find()
        .then(admin=>{
            return admin
        })
    }
    const aprofile12=(name,proffetion)=>{
        return db.Admin.deleteOne({name,proffetion})
        .then(admin=>{
        if(admin){ 
         return admin
        }
              })
    }
module.exports={Profil,Profile,Login1,aprofile,fin,aprofile1,aprofile12} 