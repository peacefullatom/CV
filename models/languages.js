'use strict'

const mongoose = require('mongoose');

const languagesSchema = new mongoose.Schema(
    {
        languages: [{ type: String, required: true, default: "" }]
    },
    { collection: 'languages' }
);

module.exports = mongoose.model('languages', languagesSchema);