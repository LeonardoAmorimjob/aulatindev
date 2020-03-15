const{Schema,model}=require('mongoose');
const EsquemaDesenvolvedor=new Schema({
    nome:{
        type:String,
        required:true
    },
    usuario:{
        type:String,
        required:true,

    },
    bio:String,
    avatar:{
        type:String,
        required:true
    },
    curtidas:[{
        type:Schema.Types.ObjectId,
        ref:'Dev'
    }],
    naocurtidas:[{
        type:Schema.Types.ObjectId,
        ref:'Dev'
    }]

}, 
{
    timestamps:true
})
module.exports= model('Desenvolvedor',EsquemaDesenvolvedor)