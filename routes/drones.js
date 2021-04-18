const express = require('express');
const router = express.Router();

// require the Drone model here

const Drone = require('../models/Drone.model')

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find()
  .then((data) => {
    res.render('drones/list.hbs', {data})
  })
  .catch((err) => {
    console.log(err)
  });
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render('drones/create-form.hbs')
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const {name, propellers, maxSpeed} = req.body
 
  Drone.create({name, propellers, maxSpeed})
  .then((data) => {
    res.redirect("/drones")
  })
  .catch((err) => {
    console.log(err)
    res.render('drones/create-form.hbs')
    
  });
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { id } = req.params
  Drone.findById(id)
  .then((data) => {
    res.render('drones/update-form.hbs', {data})
  })
  .catch((err) => {
    console.log(err)
  });
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { id } = req.params
  const {name, propellers, maxSpeed} = req.body
  Drone.findByIdAndUpdate(id, {name, propellers, maxSpeed})
  .then((data) => {
    res.redirect('/drones')
  })
  .catch((err) => {
    console.log(err)
    res.render('drones/update-form.hbs')
  });
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const { id } = req.params


  Drone.findByIdAndDelete(id)
  .then(() => {
    res.redirect("/drones")
  })
  .catch((err) => {
    console.log(err)
  });
});

module.exports = router;
