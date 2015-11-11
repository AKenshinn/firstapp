var express = require('express');
var router = express.Router();
var userModel = require('../model/userModel');

router.get('/', function(req, res) {
  userModel.findAll(function(err, result) {
    res.render('index', { title: 'USER', data: result });
  });
});

router.get('/:id', function(req, res) {
  var id = req.params.id; // get id form url

  userModel.findById(id, function(err, result) {
    res.json(result);
  });
});

router.post('/create', function(req, res) {
  var user = req.body; // get post data (user)

  userModel.create(user, function(err, result) {
    res.redirect('/users');
  });
});

router.post('/update', function(req, res) {
  var user = req.body;

  userModel.update(user, function(err, result) {
    res.redirect('/users');
  });
});

router.get('/delete/:id', function(req, res) {
  var id = req.params.id; // get id form url

  userModel.deleteById(id, function(err, result) {
    res.redirect('/users');
  });
});

module.exports = router;
