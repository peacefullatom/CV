'use strict'

const mongoose = require('mongoose');

const phonesSchema = new mongoose.Schema(
    {
        HREF: { type: String, required: true, default: "" },
        value: { type: String, required: true, default: "" }
    },
    { collection: 'phones' }
);

module.exports = mongoose.model('phones', phonesSchema);