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
  const processedData = req.body;
  for (const key of Object.keys(processedData)) {
    if (!isNaN(Number(processedData[key]))) {
      processedData[key] = Number(processedData[key]);
    };
  };
  const index = movements.findIndex(movement => movement.id === Number(req.params.id));
  movements[index] = processedData;
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
  const processedData = req.body.data;
  for (const key of Object.keys(processedData)) {
    if (!isNaN(Number(processedData[key]))) {
      processedData[key] = Number(processedData[key]);
    };
  };
  const nextId = Number(movements[movements.length - 1].id) + 1;
  const newMovement = Object.assign(processedData, {id: nextId});
  movements.push(newMovement);
  res.send("Done");
});

module.exports = router;