const axios=require('axios');
const Desenvolvedor=require('../models/desenvolvedores');
module.exports={
    async inicio(req,res){
        const {usuario}=req.headers;
        const desenvolvedorLogado=await Desenvolvedor.findById(usuario);
        const usuarios=await Desenvolvedor.find({
            $and:[
                {_id:{$ne:usuario}},
                {_id:{$nin:desenvolvedorLogado.curtidas}},
                {_id:{$nin:desenvolvedorLogado.naocurtidas}}
            ]
        })
        return res.json(usuarios);
    },
   async armazenar(req,res){
    const {nomedeusuario}=req.body;
    const usuarioExistente=await Desenvolvedor.findOne({usuario:nomedeusuario});
    if (usuarioExistente){
        return res.json(usuarioExistente);
    }
    console.log(nomedeusuario);
    const resposta=await axios.get(`https://api.github.com/users/${nomedeusuario}`);

    const {name:nome,bio,avatar_url:avatar}=resposta.data;

    const desenvolvedor= await Desenvolvedor.create({
        nome,
        usuario:nomedeusuario,
        bio,        
        avatar,
    })
        return res.json(desenvolvedor);
    }
}