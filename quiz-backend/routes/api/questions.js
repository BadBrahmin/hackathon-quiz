var express = require('express');
var router = express.Router();

const authToken = require('../../utils/authMiddleware');
const questionController = require('../../controllers/questionController')

// router.use(authToken.verifyToken);

/* GET all questions. */
router.get('/', questionController.getAllQuestions);

  /* Add new question. */
router.post('/question', questionController.createQuestion);

/* find 10 random questions by given category. */
router.get('/taketest/:category', questionController.getTestQuestions);

/* Edit a question. */
router.put('/question/:id', questionController.updateQuestion);
  
module.exports = router;