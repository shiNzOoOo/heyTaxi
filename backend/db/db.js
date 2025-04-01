const mongoose = require('mongoose');

function connectToDB () {
    mongoose.connect(process.env.DB_CONNECT)
       .then(() => console.log('MongoDB Connected...'))
       .catch(err => console.error(err));
}

module.exports = connectToDB;