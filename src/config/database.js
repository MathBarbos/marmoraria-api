const mongoose = require('mongoose');

const connectMongoDB = mongoose.connect('mongodb://localhost:27017/meubanco', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Conectou'))
    .catch(err => {
        console.error('Não conectou', err)
        process.exit(1);
    })

module.exports = connectMongoDB;