const express = require( 'express' );
const router = express.Router();

const controller = require( './controllers/practice' );

router.get( '/something', controller.getAll );
router.post( '/something', controller.post );

module.exports = router;