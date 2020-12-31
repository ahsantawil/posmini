const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/dbpos', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

mongoose.connection.on('Connected', function () {
    console.log('Mongoose default connection open');
});

mongoose.connection.on('error', function (err) {
    console.log('Mongoose default connection error : ' + err);
});

mongoose.connection.on('Disconnected', function () {
    console.log('Mongoose default connection disconnected');
});

process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('Mongoose default connection disconnected through app termination');
    });
});
