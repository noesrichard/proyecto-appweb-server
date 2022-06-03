const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
userid: { 
        type: String, 
        require: true,
    },
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
