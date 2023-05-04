const mongoose = require('mongoose');

const registerSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "Please add the register name"]
    },
    email: {
        type: String,
        required: [true, "Please add the register email address"]
    },
    password: {
        type: String,
        required: [true, "Please add the register password"]
    },
    gender: {
        type: String,
        required: [true, "Please add the register gender"]
    },
    dob: {
        type: String
    },
    address: {type: String},
    state: {type: String},
    zip: {type: String},
    contact: {
        type: String,
        required: [true, "Please add the register contact number"]
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Register", registerSchema);