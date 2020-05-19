const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.render('produtos/add');
});

module.exports=router;