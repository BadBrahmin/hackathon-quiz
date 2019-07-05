const Result = require('../models/result');
const Question = require('../models/question');

exports.getAllresults = (req, res, next) => {
  Result.find({user: req.user.id}, (err, results)=>{
    if(err) return res.status(500).json(err);
    response.json(results);
  })
}

exports.createResult = (req, res, next) => {
    //To do check for the Score and send it back machi...

    // GET an array of obj with
    // results = [{
      // questionId:
      // answer:
    // }, ]
    
    let set = [];
    let score = 0;

    req.body.reults.forEach(result => {
      // var answer = {};
      Question.findById( result.questionId, (err, question)=>{
        if(err) return res.status(500).json(err);
        answer.question = question.id;
        answer.correct = result.answer === question.answer;
        set.push(answer);
      });
    });

    // calculateSet(results, (err, set) => {

    // })
    console.log(set)
		res.status(201).json({result: result});
}

function calculateSet (results, cb) {
  let set = [];

    req.body.reults.forEach(result => {
      var answer = {};
      Question.findById( result.questionId, (err, question)=>{
        if(err) return cb(err, null)
        answer.question = question.id;
        answer.correct = result.answer === question.answer;
        set.push(answer)
      });
    });
  cb(null, set)
}
  