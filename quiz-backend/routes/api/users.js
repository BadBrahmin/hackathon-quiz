var express = require('express');
var router = express.Router();

const authToken = require('../../utils/authMiddleware');
const userController = require('../../controllers/userController')



// router.use(authToken.verifyToken);

/* GET current user. */
router.get('/user', userController.getCurrentUser);

/* Edit a user. */
router.put('/user', userController.updateUser);



module.exports = router;
