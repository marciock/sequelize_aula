const fs=require('fs');
const {Produtos}=require('../../models');


module.exports={

    edit:(req,res)=>{
        Produtos.findOne({
            where:{id:req.query.id},
            include:['m']
        }).then((results)=>{
            res.render('produtos/edit',{data:results})
        })
    }


}