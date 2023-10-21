const categories = require("../../data/categories.json");

const categoriesFormatDB = categories.map(({ name }) => {
  return {
    name,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
});

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Categories", categoriesFormatDB, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
