const fs=require('fs');
const {Produtos}=require('../../models');

module.exports={
    show:(req,res)=>{
        Produtos.findAll({
            attributes:['id','produto','marca','preco'],
            include:['m']
        }).then((results)=>{
            res.render('produtos/produtos',{data:results});
        })
    }
}