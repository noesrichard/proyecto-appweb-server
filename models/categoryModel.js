const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
    name: { 
        type: String,
        require: true
    },
    description: { 
        type: String, 
        require: true
    }, 
    expense: { 
        type: Number, 
        require: true
    }
});

module.exports = mongoose.model('category', CategorySchema);
