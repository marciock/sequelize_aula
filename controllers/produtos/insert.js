const fs=require('fs');
const {Produtos}=require('../../models');


module.exports={
    save:(req,res)=>{
        const data={
            produto:req.body.produto,
            marca:req.body.marca,
            preco:req.body.preco
        }
        Produtos.create(data).then((results)=>{
            res.redirect('/produtos');
        })
    }
}