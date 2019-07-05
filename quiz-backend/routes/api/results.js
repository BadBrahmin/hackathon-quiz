var express = require('express');
var router = express.Router();

const authToken = require('../../utils/authMiddleware');
const resultController = require('../../controllers/resultController')

// router.use(authToken.verifyToken);

/* GET all results. */
router.get('/', resultController.getAllresults);

/* Add new result & return it. */
router.post('/', resultController.createResult);

module.exports = router;