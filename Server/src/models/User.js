const { DataTypes } = require('sequelize');

// aca se definin los modelos, tablas o entidades
module.exports = (sequelize) => {
   sequelize.define('User', {
      id: {
         type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
      },
      email: {
         type: DataTypes.STRING,
         allowNull: false,
         isEmail: true
      },
      password: {
         type: DataTypes.STRING,
         allowNull: false,
      }
     

   }, { timestamps: false });
};
