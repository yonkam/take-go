const express = require('express');
const router = new express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'take_go' });
});

router.get('/restaurant', (req, res, next) => {
  res.render( 'restaurant', { title: 'liste des restarants mabah', restaurantList:'blabla' });

});


module.exports = router;
