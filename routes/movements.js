const express = require('express');
const router = express.Router();
const movements = require('../data/movements');

/* GET a single movement */
router.get('/:id', function(req, res, next) {
  const myMovement = movements.filter(movement => movement.id === Number(req.params.id));
  res.json(myMovement);
});

/* EDIT a movement */
router.post('/:id', (req, res, next) => {
  const index = movements.findIndex(movement => movement.id === Number(req.params.id));
  movements[index] = req.body.data;
  res.send("Done");
});

/* DELETE a movement */
router.delete('/:id', (req, res, next) => {
  const myId = movements.findIndex(movement => movement.id === Number(req.params.id));
  if (myId >= 0) {
    movements.splice(myId, 1);
    res.status(204).send("Deletion successful");
  } else {
    res.status(404).send('The movement to be deleted cannot be found');
  }
});

/* GET all movements */
router.get('/', function(req, res, next) {
  res.json(movements);
});


/* CREATE new movement */
router.post('/', (req, res, next) => {
  const nextId = movements[movements.length - 1].id + 1;
  const newMovement = Object.assign(req.body.data, {id: nextId});
  movements.push(newMovement);
  res.send("Done");
});

module.exports = router;