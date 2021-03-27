const Router = require( 'koa-router' );
const router = new Router();

const controller = require( './controllers/practice' );

router.get( '/something', controller.getAll );
router.post( '/something', controller.post );

module.exports = router;