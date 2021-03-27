const express = require( 'express' );
const app = express();

const router = require( './router' );
const config = require( './config' );

app.use( express.static( config.clientPath ) );
app.use( express.json() );
app.use( router );

app.listen( config.port );