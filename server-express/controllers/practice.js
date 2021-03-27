const entryModel = require( '../models/practice' );

async function getAll ( req, res ) {
  try {
    const entries = await entryModel.find();
    res.send( entries );
    res.status( 500 );
  } catch ( err ) {
    res.status( 500 );
  }
}

async function post ( req, res ) {
  try {
    await entryModel.create( req.body );
    res.send( req.body );
    res.status( 201 );
  } catch ( err ) {
    res.status( 500 );
  }
}

module.exports = { getAll, post };