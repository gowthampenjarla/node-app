const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const Category = require('../models/category');

// categories
router.get('/', (req, res) => {
    // console.log('In Categories');
    Category.getCategories((err, cat) => {
        if (err) throw err;
        res.json(cat);
    })
})

// Get products for the respective category
router.get(`/:cat`, (req, res) => {
    const cat = req.params.cat;
    Product.getProductByCategory(cat, (err, product) => {
        if (err) throw err;
        res.json(product);
    })
})

// Delete Products
router.delete('/delcat/:cat', (req, res) => {
    const cat = req.params.cat;
    // delete category from categories collection
    Category.deleteCategory(cat, (err, res) => {
        if (err) throw err;
        console.log(res)
        console.log(`${res.deletedCount} category is deleted from category collection`);
    });
    // delete product from products collection
    Product.deleteProducts(cat, (err, resp) => {
        if (err) throw err;
        console.log(`${resp.deletedCount} products are deleted from product collection`);
        res.json(resp);
    })
})

module.exports = router;