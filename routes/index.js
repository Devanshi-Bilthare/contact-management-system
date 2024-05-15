var express = require('express');
var router = express.Router();


const User = require('../models/userModel')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/register',(req,res)=>{
  res.render('register')
})

router.post('/register',async(req,res)=>{
  try{
    const newUser = await User(req.body)
    await newUser.save()
    res.redirect('/contacts')
  }catch(err){
    res.send(err)
  }
})

router.get('/contacts',async(req,res)=>{
  try{
    const userData = await User.find()
    res.render('contacts',{userData})
  }catch(err){
    res.send(err)
  }
})

router.get('/contact/:id/update',async(req,res)=>{
  try{
    const {id} = req.params
    const user = await User.findById(id)
    res.render('update',{user})
  }catch(err){
    res.send(err)
  }
})

router.post('/contact/:id/update',async (req,res)=>{
  try{
    const {id} = req.params
    await User.findByIdAndUpdate(id,req.body)
    res.redirect('/contacts')
  }catch(err){
    res.send(err)
  }
})

router.get('/contact/:id/delete',async(req,res)=>{
  try{
    const {id} = req.params
    await User.findByIdAndDelete(id)
    res.redirect('/contacts')
  }catch(err){
    res.send(err)
  }
})

router.get('/delete/:id',(req,res)=>{
  const {id} = req.params
  res.render('delete',{id})
})

module.exports = router;
