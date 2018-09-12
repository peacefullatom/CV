'use strict'

const mongoose = require('mongoose');

const emailsSchema = new mongoose.Schema(
    {
        HREF: { type: String, required: true, default: "" },
        value: { type: String, required: true, default: "" }
    },
    { collection: 'emails' }
);

module.exports = mongoose.model('emails', emailsSchema);