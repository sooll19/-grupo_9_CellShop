'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Brand, {
        as: 'brand',
        foreignKey: 'brandId'
      });

      Product.belongsTo(models.Section,{
        as : 'section',
        foreignKey: 'sectionId'
      });

      Product.belongsTo(models.Category,{
        as : 'category',
        foreignKey: 'categoryId'
      });

      Product.hasMany(models.Image, {
        as: 'image',
        foreignKey: 'productId'
      })
    }
  }
  Product.init({
    model: DataTypes.STRING,
    color: DataTypes.STRING,
    year: DataTypes.INTEGER,
    description: DataTypes.STRING,
    technicalSpecifications: DataTypes.STRING,
    discount: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    brandId: DataTypes.INTEGER,
    sectionId: DataTypes.INTEGER,
    image : DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};