const mongoose = require('mongoose');
const fs = require('fs');

mongoose.connect('mongodb://localhost/bracketlottery', { useMongoClient : true});
mongoose.Promise = global.Promise;

const models_path = __dirname + '/../models';
fs.readdirSync(models_path).forEach((files) => {
    if(file.includes('.js')) {
        console.log('loading ${file}...')
        require('${models_path}/${file}');
    }
});