const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/EmployeeDB', { userNewUrlParses: true }, (err) => {
    if (!err) {
        console.log('MongoDB connection succeded')
    } else {
        console.log('Error in MongoDB connection ' + err)
    }
});

require('./employee.model');