'use strict';

const sections =  [
  {
    name : 'oferta',
    createdAt : new Date,
    updatedAt : new Date,
  },
  {
    name : 'nuevo',
    createdAt : new Date,
    updatedAt : new Date,
  }
];


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('Sections', sections, {});
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Sections', null, {});
     
  }
};
