
const Desenvolvedor=require('../models/desenvolvedores');




module.exports={
  async  armazenar(req,res){
        console.log(req.headers.usuario)
        const {usuario}=req.headers;
        const {desenvolvedorid}=req.params;
        
       
        const desenvolvedorLogado=await Desenvolvedor.findById(usuario);
        const desenvolvedornaocurtido=await Desenvolvedor.findById(desenvolvedorid);
       
        if(!desenvolvedornaocurtido){
            return res.status(400).json({error:"dev nao existe"})
        }
        
        desenvolvedorLogado.naocurtidas.push(desenvolvedornaocurtido);
        //desenvolvedorLogado.curtidas.pop(desenvolvedorcurtido);
        await desenvolvedorLogado.save()
        return res.json(desenvolvedorLogado);
    }
}