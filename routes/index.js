const { Router } = require("express");

const router = Router();

router.use(require('./cart.route.js'));
router.use(require('./review.route.js'))

module.exports = router;