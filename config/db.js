'use strict'

const configGlobal = require('./global');

module.exports = {
    db: `mongodb+srv://cv_user:cv_pass@scipios-hm1so.mongodb.net/${configGlobal.project}`
};