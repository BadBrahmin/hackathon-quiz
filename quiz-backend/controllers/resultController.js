const Result = require('../models/result');
const Question = require('../models/question');

exports.getAllresults = (req, res, next) => {
  Result.find({user: req.user.id}, (err, results)=>{
    if(err) return res.status(500).json(err);
    res.json(results);
  })
}

exports.createResult = (req, res, next) => {
    //To do check for the Score and send it back machi..
    let questionsIds = res.body.results.map( result => {
      return result.questionId;
    })
    calculateSet()
    
    Question.find({_id: {$in : questionsIds }}, (err, questions) => {
      if(err) return res.status(500).json(err);
      let currentSet = []
      questions.forEach(question => {
        var answer = {};
        answer.question = question.id;
        answer.correct = result.answer === question.answer;
        currentSet.push(answer)
      })
      let result = {user: req.user, set: currentSet}
      Result.create(result, (err, newResult) => {
        if(err) return res.status(500).json(err);
        res.json({result: newResult});
      })
    })
}
