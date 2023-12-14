"use strict";

const { hash, hashSync } = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Admin",
          surname: "Cellshop",
          email: "admin@gmail.com",
          password:
            "$2a$10$uKWOC3bBSA45HufaLmHj8.dJD9mEuxZXmlzZOQVsG2rqrSes8V3Hy",
          image: null,
          roleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "User",
          surname: "Cellshop",
          email: "user@gmail.com",
          password:
            "$2a$10$uKWOC3bBSA45HufaLmHj8.dJD9mEuxZXmlzZOQVsG2rqrSes8V3Hy",
          image: null,
          roleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Eric",
          surname: "Cellshop",
          email: "eric@gmail.com",
          password: hashSync('123123', 10),
          image: null,
          roleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
