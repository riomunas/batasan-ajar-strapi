'use strict';

/**
 * grade-of-school service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::grade-of-school.grade-of-school');
