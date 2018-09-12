'use strict'

const mongoose = require('mongoose');

const messengersSchema = new mongoose.Schema(
    {
        HREF: { type: String, required: true, default: "" },
        value: { type: String, required: true, default: "" },
        messenger: { type: String, required: true, default: "" }
    },
    { collection: 'messengers' }
);

module.exports = mongoose.model('messengers', messengersSchema);