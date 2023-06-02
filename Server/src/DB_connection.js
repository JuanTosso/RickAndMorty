require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const FavoriteModel = require('./models/Favorite')
const UserModel = require('./models/User')

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
   { logging: false, native: false } // Ese loggin en false deja de imprimir en la consola todo el lenguaje de sql
);

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.
FavoriteModel(sequelize)
UserModel(sequelize)
//

//

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
const { User, Favorite } = sequelize.models;// esto trae los modelos desde sequelize.models.
//sequelize.models: sequelize, en su propiedad models, trae todos los modelos.
User.belongsToMany(Favorite,{through: 'user_favorite'})
Favorite.belongsToMany(User,{through: 'user_favorite'})// aca se hace la relacion de muchos a muchos
//para la relacion de uno a muchos se utiliza el hasone, y no se pone el through

module.exports = {
    User,
    Favorite,
   conn: sequelize,
};
