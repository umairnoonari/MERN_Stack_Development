const express=require("express")
const authenticate=require('../middleware/authMiddleware')
const router=express.Router()
const {registerUser,authUser,allUsers}=require("../Controller/userController")
router.route('/').post(registerUser).get(authenticate,allUsers)
router.post('/login',authUser)
module.exports=router