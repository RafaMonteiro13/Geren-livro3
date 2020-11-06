const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Livro = require('./models/livro');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://user:123456@cluster0.toqy2.mongodb.net/app-mean?retryWrites=true&w=majority')
.then(() => {
  console.log ("Conexão OK")
  }).catch(() => {
  console.log("Conexão N rolou")
  });

app.post('/api/livros',(req,res,next)=>{
  const livro = new Livro({
nome:req.body.nome,
autor:req.body.autor,
paginas:req.body.paginas
  })
  console.log(livro);
  res.status(201).json({mensagem: 'Livro inserido com sucesso'})
});
app.get('/api/livros',(req,res,next)=>{
  Livro.find(then(documents =>{
    res.status(200).json({
      mensagem: "Tudo , Oka",
      livros: documents
    });
  }))
});

const livros = [
  {
    id: '1',
    nome: 'Senhor dos aneis',
    autor: 'tolkien',
    paginas: 578
  },
  {
    id: '2',
    nome: 'Harry porter',
    autor: 'não sei',
    paginas: 345
  }
]

app.use(bodyParser.json());

app.use ((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type,Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  next();
  });

app.post('/api/livros',(req, res, next) =>{

})

app.use('/api/livros',(req,res, next) => {
  res.status(200).json({
    mensagem: "Tudo OK",
    clientes: clientes
    });
});

module.exports = app;

