const router = require('express').Router();
const {
  getAllClients,
  getClientsById,
  deleteClient,
  createClient,
  updateCLient

} = require('../../controllers/Clients-controller');

module.exports = router;