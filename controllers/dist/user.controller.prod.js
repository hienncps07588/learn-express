"use strict";var db=require("../db"),shortid=require("shortid");module.exports.index=function(e,r){r.render("users/index",{users:db.get("users").value()})},module.exports.create=function(e,r){r.render("users/create")},module.exports.postCreate=function(e,r){e.body.id=shortid.generate(),db.get("users").push(e.body).write(),r.redirect("/users")},module.exports.get=function(e,r){var s=e.params.id,t=db.get("users").find({id:s}).value();r.render("users/view",{user:t})},module.exports.search=function(e,r){var s=e.query.q,t=db.get("users").value().filter(function(e){return-1!==e.name.toLowerCase().indexOf(s.toLowerCase())});r.render("users/index",{users:t})};