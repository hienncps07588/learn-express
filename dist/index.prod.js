"use strict";var express=require("express"),userRouter=require("./router/user.router"),app=express(),port=3e3;app.use(express.json()),app.use(express.urlencoded({extended:!0})),app.set("view engine","pug"),app.set("views","./views"),app.get("/",function(e,r){r.render("index",{name:"Hiến Nguyễn"})}),app.use("/users",userRouter),app.listen(port,function(){console.log("Server learning on port"+port)});