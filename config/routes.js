const router = require('express').Router();
const miscController = require('../controllers/misc.controller');

// Home
router.get('/', miscController.home);

// Regalos
router.get('/presents', miscController.presents);
router.post('/presents', miscController.doNewPresent);
router.get('/presents/new', miscController.newPresent);
router.get('/presents/:id', miscController.addPresent);

// Cursos
router.get('/courses', miscController.courses);
router.get('/courses/:id', miscController.addCourse);

module.exports = router;