const { Router } = require('express');

const UsersController = require('./app/controllers/UsersController');
const ProfessionsController = require('./app/controllers/ProfessionsController');

const router = Router();

// Users
router.get('/users', UsersController.index);
router.get('/users/:id', UsersController.show);
router.delete('/users/:id', UsersController.delete);
router.post('/users', UsersController.store);
router.put('/users/:id', UsersController.update);

// Professions
router.get('/professions', ProfessionsController.index);
router.get('/professions/:id', ProfessionsController.show);
router.delete('/professions/:id', ProfessionsController.delete);
router.post('/professions', ProfessionsController.store);
router.put('/professions/:id', ProfessionsController.update);

module.exports = router;
