const mongoose = require('mongoose');

// Category Schema
const CategorySchema = mongoose.Schema({
    category: {
        type: String
    },
    date: {
        type: String
    }
});

const Category = module.exports = mongoose.model('Categorie', CategorySchema);

// getcategories functionality
module.exports.getCategories = (callback) => {
    // console.log('in cat model')
    Category.find(callback);
}

// Delete categorie functonality
module.exports.deleteCategory = (category, callback) => {
    const query = {
        category: category,
    }
    Category.deleteOne(query, callback);
}