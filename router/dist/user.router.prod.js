"use strict";var shortid=require("shortid"),express=require("express"),db=require("../db"),router=express.Router();router.get("/",function(e,r){r.render("users/index",{users:db.get("users").value()})}),router.get("/create",function(e,r){r.render("users/create")}),router.post("/create",function(e,r){e.body.id=shortid.generate(),db.get("users").push(e.body).write(),r.redirect("/users")}),router.get("/:id",function(e,r){var s=e.params.id,t=db.get("users").find({id:s}).value();r.render("users/view",{user:t})}),router.get("/search",function(e,r){var s=e.query.q,t=users.filter(function(e){return-1!==e.name.toLowerCase().indexOf(s.toLowerCase())});r.render("users/index",{users:t})}),module.exports=router;