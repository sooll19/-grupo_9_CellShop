'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
User.hasMany(models.Order,{
  as : 'orders',
  foreignKey : 'orderId'
});

User.hasMany(models.Address,{
        foreignKey:'userId',
        as:"addresses"
      })
    }
  }
  User.init({
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
    birthday: DataTypes.DATE,
    about: DataTypes.TEXT,
    roleId: {
      type:DataTypes.INTEGER,
      defaultValue:2
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};