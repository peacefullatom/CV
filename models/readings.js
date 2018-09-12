'use strict'

const mongoose = require('mongoose');

const readingsSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, default: "" },
        link: { type: String, required: true, default: "" },
        description: { type: String, required: true, default: "" }
    },
    { collection: 'readings' }
);

module.exports = mongoose.model('readings', readingsSchema);