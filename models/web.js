'use strict'

const mongoose = require('mongoose');

const webSchema = new mongoose.Schema(
    {
        HREF: { type: String, required: true, default: "" },
        value: { type: String, required: true, default: "" }
    },
    { collection: 'web' }
);

module.exports = mongoose.model('web', webSchema);