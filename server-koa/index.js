const Koa = require( 'koa' );
const app = new Koa();

const serve = require( 'koa-static' );
const bodyParser = require( 'koa-bodyparser' );

const config = require( './config' );
const router = require( './router' );
const db = require( './models/index' );

app.use( serve( config.clientPath ) );
app.use( bodyParser() );
app.use( router.routes() );

( async () => {
  try {
    await db.sequelize.sync();
    app.listen( config.port );
  } catch ( err ) {
    console.error( err );
  }
} )();