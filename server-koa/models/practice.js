module.exports = function ( sequelize, DataTypes ) {
  return sequelize.define( 'Entry',
    {
      content: {
        type: DataTypes.STRING,
        allowNull: false
      }
    } );
};