const mongoose = require('mongoose');

const RoomSchema = mongoose.Schema({
    name: { 
        type: String, 
        require: true
    },
});

module.exports = mongoose.model('room', RoomSchema);
