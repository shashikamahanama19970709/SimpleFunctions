const express=require('express')
// const router = require('./workouts')
const router=express.Router()

//import controller function
const {signupUser,loginUser} =require('../controllers/usercontroller')



//login route (this is post meth cause it send data to server)
router.post('/login',loginUser)


//signup route
router.post('/signup',signupUser)

module.exports=router