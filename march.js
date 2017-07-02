'use strict';

let march = require('wikijs').default().page('march');

module.exports = {
	data : () => march.then(page => page.content()),
	images : () => march.then(page => page.images())
};