'use strict'

const mongoose = require('mongoose');

const skillsSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, default: "" },
        start: { type: Date, required: true, default: new Date() },
        end: { type: Date, default: new Date() }
    },
    { collection: 'skills' }
);

module.exports = mongoose.model('skills', skillsSchema);