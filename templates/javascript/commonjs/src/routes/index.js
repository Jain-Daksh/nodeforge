const { Router } = require('express');
const healthRoute = require('./health');

const router = Router();

router.use('/health', healthRoute);

module.exports = router;
