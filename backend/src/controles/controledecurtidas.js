
const Desenvolvedor=require('../models/desenvolvedores');




module.exports={
  async  armazenar(req,res){
        console.log(req.headers.usuario)
        const {usuario}=req.headers;
        const {desenvolvedorid}=req.params;
        
       
        const desenvolvedorLogado=await Desenvolvedor.findById(usuario);
        const desenvolvedorcurtido=await Desenvolvedor.findById(desenvolvedorid);
       
        if(!desenvolvedorcurtido){
            return res.status(400).json({error:"dev nao existe"})
        }
        if(desenvolvedorcurtido.curtidas.includes(usuario)){
            console.log('deu match');
        }
        desenvolvedorLogado.curtidas.push(desenvolvedorcurtido);
        //desenvolvedorLogado.curtidas.pop(desenvolvedorcurtido);
        await desenvolvedorLogado.save()
        return res.json(desenvolvedorLogado);
    }
}