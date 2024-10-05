const express = require('express')
const app = express()
const mongoose = require('mongoose')

const cors = require('cors')
const LoginRouter = require('./Routes/LoginRouter')
const UserRegisterRouter = require('./Routes/UserRegisterRouter')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

// setting headers
app.use((req, res, next) => {
    res.setHeader('Access-Controll-Allow-Origin', '*');
    res.setHeader('Access-Controll-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Controll-Allow-Headers', 'Content-Type,Authorization');
    next();
});

const mongoDBurl = "mongodb+srv://jidhinsyam:am123@cluster0.p6u8y.mongodb.net/"
mongoose.connect(mongoDBurl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("database connected");
}).catch((error) => {
    console.log(error);

})

app.use('/register', UserRegisterRouter),
    app.use('/login', LoginRouter),




    app.listen(1000, () => { console.log("server started at http://localhost:1000"); })