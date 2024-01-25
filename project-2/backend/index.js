const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const UserModel = require('./models/user')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://vishunpawar21:ekwi25T!e4$-nJE@cluster0.ejtliin.mongodb.net/user");

app.post('/login', (req, res) => {
    const {username, password} = req.body;
    UserModel.findOne({username: username})
    .then(user => {
        if(user) {
            if(user.password === password){
                res.json("Success")
            } else{
                res.json("The password is incorrect ")
            }
        } else{
            res.json("No Record found")
        }
    })
});

app.post('/signup', (req, res) => {
    UserModel.create(req.body)
        .then(user => {
            console.log("User created:", user);
            res.json(user);
        })
        .catch(err => {
            console.error("Error creating user:", err);
            res.status(500).json({ error: "Internal Server Error" });
        });
});


app.listen(3001, () => {
    console.log("server running")
})