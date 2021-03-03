const express = require('express');
const router = new express.Router();
const { body, param, query, validationResult } = require('express-validator');
const createError = require('http-errors');
const { Resto, catalog } = require('../models/catalog');
// const inventory = require('../models/inventory');
const { restaurantList } = require('../models/restaurants');

router.get('/new', (req, res, next) => {
  res.render('resto_form', { title: 'Nouveau composant' });
});

router.post(
  '/',
  [body('description').not().isEmpty().trim().escape()],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(createError(404));
    }
    const description = req.body.description;
    const newResto = new Resto(description);
    catalog.add(newResto);
    console.log(catalog);
    res.redirect('/resto/new');
  }
);

// router.get(
//   '/search',
//   [query('search').optional({ checkFalsy: true }).trim().escape()],
//   (req, res, next) => {
//     const search = req.query.search;
//     let items = [];
//     if (search !== undefined && search !== '') {
//       items = catalog.search(search);
//     }
//     res.render('item_search', { title: 'Catalogue des composants', items });
//   }
// );

// router.get('/:uuid', [param('uuid').isUUID(4)], (req, res, next) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return next(createError(400));
//   }
//   try {
//     // const inventoryLines = inventory.findByItem(req.params.uuid);
//     const resto = catalog.getByUuid(req.params.uuid);
//     const restaurants = restaurantList.restaurants;
//     res.render('item_inventory', {
//       title: 'Inventaire du composant',
//       inventoryLines,
//       item,
//       containers,
//     });
//   } catch (e) {
//     next(e);
//   }
// });

router.post(
  '/:restoUuid',
  [
    param('restoUuid').isUUID(4),
    body('restaurantUuid').isUUID(4),
    body('quantity').isInt({ min: 0 }).toInt(),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(createError(400));
    }
    try {
      const restoUuid = req.params.restoUuid;
      const restaurantUuid = req.body.restaurantUuid;
      const quantity = req.body.quantity;
      const resto = catalog.getByUuid(restoUuid);
      const restaurant = restaurantList.getByUuid(restaurantUuid);
      // inventory.modify(item, container, quantity);
      res.redirect(`/restos/${restoUuid}`);
    } catch (e) {
      next(e);
    }

  }
);

module.exports = router;
