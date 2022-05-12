const router = require('express').Router();
const {

  getAllGroups,
  getGroupsById,
  addClients,
  removeClients

} = require('../../controllers/Groups-controller');

// /api/Thought
router
  .route('/')
  .get(getAllGroups)
  

// /api/Thought/:id
router
  .route('/:id')
  .get(getGroupsById)


 
router
.route('/:id/Clients')
.post(addClients);


router
.route('/:id/Clients/:ClientsId')
.delete(removeClients);



module.exports = router;