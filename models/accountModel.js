const mongoose = require('mongoose');

const AccountSchema = mongoose.Schema({
    type: { 
        type: String, 
        require: true
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

module.exports = mongoose.model('account', AccountSchema);
