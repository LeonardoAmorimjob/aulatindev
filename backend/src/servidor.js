const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const rotas=require('./rotas');
servidor=express();
mongoose.connect('mongodb+srv://easyplan:1234@cluster0-t7lrb.mongodb.net/devt?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true});
servidor.use(cors());
servidor.use(express.json());
servidor.use(rotas);

servidor.listen(3333);