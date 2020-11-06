//importando o pacote
const mongoose = require ('mongoose');
//definindo o "schema"
//note a semelhança com recursos de bases relacionais
const livroSchema = mongoose.Schema ({
nome: {type: String, required: true},
autor: {type: String, required: false},
paginas: {type: Number, required: true}
});
//criamos o modelo associado ao nome Cliente e exportamos
//tornando acessível para outros módulos da aplicação
module
.exports = mongoose.model('Livro', livroSchema);