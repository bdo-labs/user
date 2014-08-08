
/**
 * Module dependencies.
 */
require('angular');
require('services');
require('custom-elements');

/**
 * Expose user.
 */
var user = module.exports = angular.module('user', [
		'services',
		'customElements'
	]);

/**
 * Module dependencies.
 */


require('./userMenu.js');

module.exports = user;
