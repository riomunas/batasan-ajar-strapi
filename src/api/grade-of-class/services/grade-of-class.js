'use strict';

/**
 * grade-of-class service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::grade-of-class.grade-of-class');
