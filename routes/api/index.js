const router = require('express').Router();
const clientsRoutes = require('./Clients-routes');
const groupsRoutes = require('./Groups-routes');

router.use('/Clients', clientsRoutes);
router.use('/Groups', groupsRoutes);

module.exports = router;
