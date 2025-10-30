const express = require('express');

const app = express();
app.use(express.json());

app.listen(3000);

let cadastrados = [];

app.get("/pets", (req, res) => {
    res.json({
        cadastrados
    })
})

app.post("/adicionar-pets", (req, res) => {
    const nome = req.body.nome;
    const especie = req.body.especie;
    const idade = req.body.idade;

    cadastrados.push(
        {
            nome,
            especie,
            idade
        }
    )

    res.json({
        msg: "Pet cadastrado"
    })
})