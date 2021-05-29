const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product}]
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
  // find all categories
  // be sure to include its associated Products
  // Category.findAll().then((categorydata) => {
  //   res.json(categorydata);
  // })
});

router.get('/:id', async(req, res) => {
  try {
    const bookData = await Category.findByPk(req.params.id, {
      include: [{ model: Product}]
    });
    res.status(200).json(bookData);
  } catch (err) {
    res.status(500).json(err);
  }
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findByPk(req.params.id).then((categorydata) => {
    res.json(categorydata);
  })
});


//26:47
router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  })
  .then((newCategory) => {
    res.json(newCategory);
  })
  .catch((err) => {
    res.json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      category_name: req.body.category_name
    },
    {
      where: {
        id: req.params.id
      }
    }).then((updateCategory) => {
      res.json(updateCategory);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    },
  })
  .then((deletedcategory) => {
    res.json(deletedcategory);
  })
  .catch((err) => {
    res.json(err);
  });
});

module.exports = router;
