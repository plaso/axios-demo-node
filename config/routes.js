const router = require('express').Router();
const miscController = require('../controllers/misc.controller');

// Home
router.get('/', miscController.home);

// Cities
router.get('/cities', miscController.cities);
router.post('/cities', miscController.doCreateCity);
router.get('/cities/new', miscController.createCity);
router.get('/cities/:id', miscController.getCity);

// Courses
router.get('/courses', miscController.courses);
router.get('/courses/:id', miscController.getCourse);

module.exports = router;