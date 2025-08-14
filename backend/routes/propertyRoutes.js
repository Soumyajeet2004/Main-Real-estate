const express = require('express');
const router = express.Router();
const propertyController = require('../controller/propertyController');

router.post('/', propertyController.createProperty);
router.get('/', propertyController.getProperties);
router.get('/search', propertyController.searchProperties);
router.get('/:id', propertyController.getProperty);
router.put('/:id', propertyController.updateProperty);
router.delete('/:id', propertyController.deleteproperty);


module.exports = router;