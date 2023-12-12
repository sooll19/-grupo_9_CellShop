'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.User ,{
        as : 'user',
        foreignKey : 'userId'
      })
      Order.belongsToMany(models.Product, {
        through: "Carts",
        foreignKey: "orderId",
        otherKey: "productId",
        as: "products",
      });
    }
  }
  Order.init(
    {
      total: { type: DataTypes.INTEGER, defaultValue: 0 },
      status: {
        type: DataTypes.STRING,
        defaultValue: "pending",
        validate: {
          isIn: {
            args: [["pending", "completed", "canceled"]],
            msg: "Los valores validos son: ['pending','completed','canceled']",
          },
        },
      },
      userId: DataTypes.INTEGER,
  }, 
  {
    sequelize,
    timestamps: true,
    modelName: 'Order',
  });
  return Order;
};