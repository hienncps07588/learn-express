"use strict";var express=require("express"),validate=require("../validate/users.validate"),controller=require("../controllers/user.controller"),router=express.Router();router.get("/",controller.index),router.get("/create",controller.create),router.post("/create",validate.postCreate,controller.postCreate),router.get("/:id",controller.get),router.get("/search",controller.search),module.exports=router;