const express=require('express')
const authenticate = require('../middleware/authMiddleware')
const router=express.Router()
const accessChat=require("../Controller/chatController")
router.route('/').post(authenticate,accessChat)
// router.route('/').get(authenticate,fetchChat)
// router.route("/group").post(authenticate,createGroupChat)
// router.route("/rename").put(authenticate,renameGroup)
// router.route('/groupremove').put(authenticate,removeFromGroup)
// router.route('/groupadd').put(authenticate,addToGroup)
 
module.exports=router