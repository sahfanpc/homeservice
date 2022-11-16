const express=require('express')
const app=express()
const databaseservices=require('./services/register')
// const dataservices=require('./services/condent')
const datacondent=require('./services/condent')
const datas=require('./services/admin')
app.use(express.json())
const cors=require('cors')
app.use(cors({
    origin:'http://localhost:4200'
}))
app.listen(3003,()=>{
    console.log("running")
})

app.post('/register',(req,res)=>{
    databaseservices.Register(req.body.username,req.body.email,req.body.password,req.body.place,req.body.district)
    .then(result=>{
        res.status(result.statuscode).json(result)
    })
})
app.post('/login',(req,res)=>{
    databaseservices.Login(req.body.email,req.body.password)
    .then(result=>{
        res.status(result.statuscode).json(result)
    })
})
app.get('/profile/:proffetion',(req,res)=>{
    datacondent.Profil(req.params.proffetion)
    .then(result=>{
        res.json(result)
    })
})

app.get('/profile/:condact/:password',(req,res)=>{
    datacondent.aprofile(req.params.condact,req.params.password)
    .then(result=>{
        res.json(result)
    })
})
app.get('/profile1/:condact/:password',(req,res)=>{
    datacondent.aprofile1(req.params.condact,req.params.password)
    .then(result=>{
        res.json(result)
    })
})

app.post('/profile1',(req,res)=>{
    datacondent.Profile(req.body.name,req.body.address,req.body.proffetion,req.body.add,req.body.address2,req.body.city,req.body.condact,req.body.password)
    .then(result=>{
        res.status(result.statuscode).json(result)
    })
})
app.post('/profile11',(req,res)=>{
    datacondent.Login1(req.body.condact,req.body.password)
    .then(result=>{
        res.status(result.statuscode).json(result)
    })
})

app.get('/profile',(req,res)=>{
    datacondent.fin()
    .then(result=>{
        res.json(result)
    })
})
app.post('/adminlogin',(req,res)=>{
    datas.adminlogin(req.body.email,req.body.password)
    .then(result=>{
        res.status(result.statuscode).json(result)
    })
})
app.delete('/profile/:name/:proffetion',(req,res)=>{
    datacondent.aprofile12(req.params.name,req.params.proffetion)
    .then(result=>{
        res.json(result)
    })
})

