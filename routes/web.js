
const express=require('express');
const router=express.Router();
const webController=require('../controllers/webController');

router.get('/',webController.home);
router.get('/about',webController.about);
router.get('/resume',webController.resume);
router.get('/portfolio',webController.portfolio);
router.get('/contact',webController.contact);
router.post('/contact',webController.createDoc);

module.exports=router;

