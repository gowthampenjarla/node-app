const mongoose = require('mongoose');

// product Schema
const ProductSchema = mongoose.Schema({
    product: {
        type: String
    },
    category: {
        type: String
    },
});

const Product = module.exports = mongoose.model('product', ProductSchema);

module.exports.getProductByCategory = (category, callback) => {
    const query = {
        category: category,
    };
    console.log(query)
    Product.find(query, callback);
}

module.exports.deleteProducts = (category, callback) => {
    const query = {
        category: category,
    }
    Product.deleteMany(query, callback);
}