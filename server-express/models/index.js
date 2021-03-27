const mongoose = require( 'mongoose' );
const config = require( '../config' );

mongoose.connect( `mongodb://localhost:27017/${ config.db }`, { useNewUrlParser: true, useUnifiedTopology: true } );

module.exports = mongoose;