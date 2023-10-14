'use strict';

const marcasJSON =  require('../../data/marcas.json');
const brands = marcasJSON.map((brand) => {
  return {
      name : brand.name,
      createdAt : new Date,
      updatedAt : new Date
  }
})

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('Brands', brands, {});
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Brands', null, {});
     
  }
};