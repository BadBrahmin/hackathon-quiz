const Question = require('../models/question');

exports.getAllQuestions = (req, res, next) => {

  Question.find({}, (err, questions)=>{
    if(err) return res.status(500).json(err);
    res.json(questions);
  });
}

exports.getTestQuestions = (req, res, next) => {

  //TODO use aggregat to get 10 random sample
  Question.aggregate({ $match : { 'category': req.body.category }}, {'$sample': {'size': 10 } }, (err, questions)=>{
    if(err) return res.status(500).json(err);
    let testSet = questions.map(question => {
      return  {
          id: question.id,
          title: question.title ,
          options: question.options,
          category:question.category
        }
    })
    res.json(testSet);
  });
}

exports.createQuestion = (req, res, next) => {
  let {title, option1, option2, option3, option4, answer, category}  = req.body;
  let newQuestion = {
    title,
    answer,
    category,
    options: [option1, option2, option3, option4]
  }
  Question.create(newQuestion, (err, question)=>{
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
  