'use strict'

const configGlobal = require('./global');

// db: `mongodb://localhost/${configGlobal.project}`,
module.exports = {
    db: `mongodb+srv://cv_user:cv_pass@scipios-hm1so.mongodb.net/${configGlobal.project}?retryWrites=true`
};