"use strict";
const products = require("../../data/products.json");
const sections = require("../../data/sections.json");
const categories = require("../../data/categories.json");
const brands = require("../../data/brands.json");

const productsFormatDB = products.map(
    ({
        model,
        color,
        year,
        description,
        technicalSpecifications,
        discount,
        price,
        image,
        section,
        category,
        brand,
    }) => {
        return {
            model,
            color,
            year,
            image,
            description,
            technicalSpecifications: JSON.stringify(technicalSpecifications),
            discount,
            price,
            categoryId: categories.find(({ name }) => name === category)?.id || null,
            brandId: brands.find(({ name }) => name === brand)?.id || 1,
            sectionId: sections.find(({ name }) => name === section)?.id || 1,
            createdAt: new Date,
            updatedAt: new Date
        };
    }
);

 /**@type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("Products", productsFormatDB, {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Products", null, {});
    },
};