'use strict';

const brands = require('../../data/brands.json');
const brandsFormatDB = brands.map(({ name }) => {
  return {
<<<<<<< HEAD
      name : brand.name,
      createdAt : new Date,
      updatedAt : new Date
=======
    name,
    createdAt: new Date,
    updatedAt: new Date
>>>>>>> 4d7927c99da4c001c4d42785713bae241fc540bc
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