var express = require('express');
var router = express.Router();

const usersRouter = require('./users');
const resultsRouter = require('./results');
const questionsRouter = require('./questions');

router.use('/users', usersRouter);
router.use('/results', resultsRouter);
router.use('/questions', questionsRouter);

module.exports = router;