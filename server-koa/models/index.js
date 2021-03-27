const Sequelize = require( 'sequelize' );
const fs = require( 'fs' );
const path = require( 'path' );
const config = require( '../config' );



const sequelize = new Sequelize( config.db.database, config.db.user, config.db.password, config.db.config );

const db = {};

const models = fs.readdirSync( __dirname );

for ( const file of models ) {

  if ( file !== 'index.js' && file.indexOf( '.' !== 0 ) && file.slice( -3 ) === '.js' ) {
    const model = require( path.join( __dirname, file ) )( sequelize, Sequelize.DataTypes );
    db[ model.name ] = model;
  }
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;