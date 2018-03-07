const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
    match: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Team'
    }]
 }, { timestamps : true } );

    mongoose.model('game', GameSchema);