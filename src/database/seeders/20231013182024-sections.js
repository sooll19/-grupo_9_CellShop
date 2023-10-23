"use strict";

const sections = require("../../data/sections.json");
const sectionFormatDB = sections.map(({ name }) => {
  return {
    name,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
});

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Sections", sectionFormatDB, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Sections", null, {});
  },
};




