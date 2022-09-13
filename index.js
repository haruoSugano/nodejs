const express = require('express');
const bodyParser = require('body-parser');
const usuarios = require('./usuarios.json');
const app = express();

app.use(bodyParser.json());

app.get("/rede/usuarios", (req, res) => {
    res.json(usuarios);
});

app.post("rede/usuarios", (req, res) => {
    console.log("POST");
});

app.listen(4000,() => {
    console.log("Porta: 4000");
});