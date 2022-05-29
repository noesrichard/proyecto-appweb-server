const mongoose = require('mongoose');

const IncomeSchema = mongoose.Schema({
    type: { 
        type: String, 
        require: true
    },
    description: { 
        type: String, 
        require: true
    }, 
    
    date: { 
        type: Date, 
        require: true
    },
    account: { 
        type: String, 
        require: true
    }, 
    total: { 
        type: Number, 
        require: true
    }


});

module.exports = mongoose.model('income', IncomeSchema);
