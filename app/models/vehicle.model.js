const mongoose = require('mongoose');

const vehicleDensitySchema = mongoose.Schema({
    lane: Number,
    count: Number,
    time: Date
}, {
    timestamp: true
});

module.exports = mongoose.model('vehicle' , vehicleDensitySchema)