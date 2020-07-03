const express=require('express');
const router=express.Router();
const marcas=require('../../controllers/marcas/view');
const select=require('../../controllers/marcas/select');

router.get('/',marcas.show);
router.get('/select',select.show);


module.exports=router;