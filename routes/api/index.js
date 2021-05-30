const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('../../seeds/product-routes');
const tagRoutes = require('./tag-routes');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

module.exports = router;
