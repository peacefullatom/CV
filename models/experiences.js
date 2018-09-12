'use strict'

const mongoose = require('mongoose');

const experiencesSchema = new mongoose.Schema(
    {
        role: { type: String, required: true, default: "" },
        company: { type: String, required: true, default: "" },
        location: { type: Date, required: true, default: new Date() },
        start: { type: Date, required: true, default: new Date() },
        technologies: [{ type: String, required: true, default: "" }],
        description: { type: String, required: true, default: "" }
    },
    { collection: 'experiences' }
);

module.exports = mongoose.model('experiences', experiencesSchema);