const express = require('express');
const router = new express.Router();
// const { Restaurant, restaurantList } = require('../models/restaurants');


router.get('/', (req, res, next) => {
  res.render('restaurant', { title: 'les restaurants' });
});

// router.get('/noms', (req, res, next) => {
//   const noms = restaurantList.getAllNoms();
//   res.json(noms);
// });

// router.get('/drawers', (req, res, next) => {
//   const drawers = containerList.getAllDrawers();
//   res.json(drawers);
// });
// router.get('/', (req, res, next) => {
//   res.send('respond with a resource');
// });
/* GET users listing. */
//

module.exports = router;
