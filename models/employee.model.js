const mongoose = require('mongoose');

let employeeSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: 'This filed is required'
    },
    email: {
        type: String,
        required: 'This filed is required'
    },
    mobile: {
        type: String
    },
    city: {
        type: String
    }
});

employeeSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

mongoose.model('Employee', employeeSchema);