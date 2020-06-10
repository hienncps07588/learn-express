"use strict";

var db = require('../db');

var md5 = require('md5');

module.exports.login = function (req, res) {
  res.render('auth/login');
};

module.exports.postLogin = function (req, res) {
  var email = req.body.email;
  var password = req.body.password;
  var user = db.get('users').find({
    email: email
  }).value();

  if (!user) {
    res.render('auth/login', {
      errors: ['User không tồn tại!'],
      values: req.body
    });
    return;
  }

  var hashedPassword = md5(password);

  if (user.password !== hashedPassword) {
    res.render('auth/login', {
      errors: ['Password không đúng!'],
      values: req.body
    });
    return;
  }

  res.cookie('userId', user.id);
  res.redirect('/users');
};