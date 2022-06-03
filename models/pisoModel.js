const mongoose = require('mongoose');

const PisoSchema = mongoose.Schema({
    name: { 
        type: String, 
        require: true
    },
});

module.exports = mongoose.model('piso', PisoSchema);
