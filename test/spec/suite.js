'use strict';

let march = require('../../march.js');
let _ = require('lodash');

module.exports = (test, Promise) => {

    return march.data()
    .then(data => {
        test.equal(_.isString(data), true, 'Fetching #data');
        return march.images();
    })
    .then(images => {
        return test.equal(_.isArray(images), true, 'Fetching #images');
    })
    .catch(err => test.fail(err))
};


