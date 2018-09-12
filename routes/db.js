'use strict';

const express = require('express');
const router = express.Router();
const configGlobal = require('../config/global');
const fs = require('fs');

let models = [];

// read all models
fs.readdirSync(`./${configGlobal.folder.models}/`).forEach(fileName => {
    const file = fileName.replace(/\.js$/, '');
    models.push(require(`../${configGlobal.folder.models}/${file}`));
});

/**
 * collection find wrapper
 * @param {Model} model mongodb model
 * @param {Response} res response object
 * @param {NextFunction} next next function handler
 */
const find = (model, res, next) => {
    model.find((err, entries) => {
        if (err)
            return next(err);

        res.json(entries);
    });
};

// assign routes to models
for (let model of models) {
    router.get(`/${model.modelName}`, (req, res, next) => {
        find(model, res, next);
    });
}

module.exports = router;