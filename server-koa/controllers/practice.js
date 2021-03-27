const db = require( '../models/index' );

async function getAll ( ctx ) {
  try {
    ctx.body = await db.Entry.findAll();
    ctx.status = 200;
  } catch ( err ) {
    ctx.status = 500;
    console.log( 'Something fucked up' );
  }
}

async function post ( ctx ) {
  try {
    const entry = ctx.request.body;
    await db.Entry.create( {
      content: entry.content
    } );
    ctx.body = entry;
    ctx.status = 201;
  } catch ( err ) {
    console.log( 'Something fucked up' );
    ctx.status = 500;
  }
}

module.exports = { getAll, post };