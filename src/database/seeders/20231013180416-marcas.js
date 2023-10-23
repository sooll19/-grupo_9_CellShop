'use strict';

const marcasJSON = require('../../data/brands.json');
const brandsFormatDB = marcasJSON.map(({ name }) => {
  return {
      name : brand.name,
      createdAt : new Date,
      updatedAt : new Date
  }
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Brands', brandsFormatDB, {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Brands', null, {});

  }
};