const mongoose = require('mongoose');
const { createSearchIndex } = require('./User');

const leadSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
    },
    status : {
        type: String,
        enum: ['New', 'Contacted', 'Lost'],
        default: 'New',
    },
    createAt : {
        type : Date,
        default : Date.now, 
    }
});

module.exports = mongoose.model('Lead', leadSchema);