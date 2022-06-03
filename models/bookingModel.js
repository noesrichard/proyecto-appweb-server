const mongoose = require('mongoose');

const BookingSchema = mongoose.Schema({
    cedula: { 
        type: String, 
        require: true
    },
    nombre: { 
        type: String,
        require: true
    },
    apellido: { 
        type: String, 
        require: true
    }, 
    piso: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'piso', 
        require: true
    }, 
    fechaEntrada: { 
        type: String, 
        require: true
    },  
    fechaSalida: { 
        type: String, 
        require: true
    },  

});

module.exports = mongoose.model('booking', BookingSchema);
