const express = require('express');
const { get } = require('lodash');

const app = express();

const path = require('path');

let port = 5000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());


app.get("/", (req, res)=>{
    res.render('index');
});

app.get("/novoJogo", (req,res)=>{
    res.render('novoJogo');
});

app.get("/cenarios", (req,res)=>{
    res.render('cenarios');
});

app.get("/game", (req,res)=>{
    res.render('game');
});


app.listen(port)
console.log(`http://localhost:${port}`);