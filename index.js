const express = require('express');
const app = express();

app.use(express.json());

const usuario = {
    id: 123456,
    nome: "helio",
    email: "helio@gmail.com",
}

app.listen(4000,() => {
    console.log("Porta: 4000");
});