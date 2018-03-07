const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
    Name: {
        type: String, 
        required: true
    },
    Seed: {
        type: Number,
        required: true
    }
 }, { timestamps : true } );

    mongoose.model('team', TeamSchema);