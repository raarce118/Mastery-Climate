const router = require('express').Router();
const {
  getAllClients,
  getClientsById,
  createClients,
  updateClients,
  deleteClients
} = require('../../controllers/Clients-controller');

// /api/Clients
router
  .route('/')
  .get(getAllClients)
  .post(createClients);

// /api/Clients/:id
router
  .route('/:id')
  .get(getClientsById)
  .put(updateClients)
  .delete(deleteClients);

module.exports = router;
