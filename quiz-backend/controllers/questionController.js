const Question = require('../models/question');

exports.getAllQuestions = (req, res, next) => {

  Question.find({}, (err, questions)=>{
    if(err) return res.status(500).json(err);
    response.json(questions);
  });
}

exports.getTestQuestions = (req, res, next) => {
    res.render('editUser');
    //TODO use aggregat to get 10 random sample
    Question.aggregate({ $match : { 'category': req.body.category }}, {'$sample': {'size': 10 } }, (err, questions)=>{
      if(err) return res.status(500).json(err);
      response.json(questions);
    });
}

exports.createQuestion = (req, res, next) => {
  Question.create(req.body, (err, question)=>{
		if(err) return res.status(500).json(err);
		res.status(201).json({question: question});
  });
}

exports.updateQuestion = (req, res, next) => {
  Question.findByIdAndUpdate(req.params.id, req.body,{new: true}, (err, updatedQuestion)=>{
    if(err) return next(err);
    res.status(201).json({question: updatedQuestion});
  });
}
  