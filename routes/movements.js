const express = require('express');
const router = express.Router();
const movements = require('../data/movements');

/* GET a single movement */
router.get('/:id', function(req, res, next) {
  res.json();
});


/* EDIT a movement */
router.post('/:id', (req, res, next) => {

});

/* DELETE a movement */
router.delete('/:id', (req, res, next) => {

});

/* GET all movements */
router.get('/', function(req, res, next) {
  res.json(movements);
});


/* CREATE new movement */
router.post('/', (req, res, next) => {

});

module.exports = router;