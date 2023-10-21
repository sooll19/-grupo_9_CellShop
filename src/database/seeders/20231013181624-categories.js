const category =  [
  {
    name : 'celular',
    createdAt : new Date,
    updatedAt : new Date,
  },
  {
    name : 'accesorios',
    createdAt : new Date,
    updatedAt : new Date,
  }
];


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('Categories', category, {});
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Categories', null, {});
     
  }
};

