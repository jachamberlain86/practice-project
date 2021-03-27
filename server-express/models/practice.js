const mongoose = require( './index' );

const Schema = mongoose.Schema;

const entrySchema = new Schema( {
  content: String
} );

const Entry = mongoose.model( 'Entry', entrySchema );

module.exports = Entry;