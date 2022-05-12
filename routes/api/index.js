const router = require('express').Router();
const commentRoutes = require('./Clients-routes');
const pizzaRoutes = require('./Groups-routes');

router.use('/Clients', clientsRoutes);
router.use('/Groups', groupsRoutes);

module.exports = router;
