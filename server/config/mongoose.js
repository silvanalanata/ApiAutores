const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/autores_db', {useNewUrlParser: true});

module.exports = mongoose