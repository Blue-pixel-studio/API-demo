const bodyParser = require('body-parser');
var express = require('express');
var app = express();
const mysql = require("mysql");
const dbConfig = require("./config-db");
const customers = require("./routes");


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get("/users", customers.findAll);
app.get("/users/:id", customers.getById);

app.get('/', (req, res)=>{
    res.send("Hello World!");
})


app.listen(3000, (req, res, next) =>{

    console.log('Server running on port : 3000');
})