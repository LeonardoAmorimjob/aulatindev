const express=require('express');
const controledeDesenvovedor=require('./controles/controledeDesenvolvedor');
const controledecurtidas=require('./controles/controledecurtidas');
const controledenaocurtidas=require('./controles/controledenaocurtidas');
const rotas=express.Router();

rotas.get('/devs',controledeDesenvovedor.inicio);
rotas.post('/devs',controledeDesenvovedor.armazenar);
rotas.post('/devs/:desenvolvedorid/curtidas',controledecurtidas.armazenar);
rotas.post('/devs/:desenvolvedorid/naocurtidas',controledenaocurtidas.armazenar);

module.exports=rotas;