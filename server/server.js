var express=require('express')
var mongoose=require('mongoose')
const dotenv=require('dotenv')
const cors=require('cors')


var app=express()

dotenv.config()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use((req,res,next)=>{
    res.setHeader('Access-Controll-Allow-Origin','*');
    res.setHeader('Access-Controll-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Controll-Allow-Headers','Content-Type,Authorization');
    next();
});


mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log('database connected');
})
.catch(()=>{
    console.log('not connected');
    
})


app.use(process.env.PORT,()=>{
    console.log('running on',process.env.PORT);
})
