'use strict'

const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, default: "" },
        link: { type: String, required: true, default: "" },
        start: { type: Date, required: true, default: new Date() },
        end: { type: Date, required: true, default: new Date() },
        location: { type: String, required: true, default: "" },
        description: { type: String, required: true, default: "" }
    },
    { collection: 'education' }
);

module.exports = mongoose.model('education', educationSchema);