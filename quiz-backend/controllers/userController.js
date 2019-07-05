var User = require('../models/user');

exports.logout = (req, res, next) => {
  req.session.destroy(err => {
    if(err) return next(err);
    res.redirect('/');
  })
}

exports.getCurrentUser = (req, res, next) => {
  res.status(201).json({user: res.user});
}

exports.updateUser = (req, res, next) => {
  const {name, email, newPassword} = req.body;

  User.findByIdAndUpdate(req.user.id, {name: name, email: email, password: newPassword}, { new: true, runValidators: true }, (err, updatedUser) => {
    updatedUser.save();
    if(err) return next(err);
    console.log(updatedUser);
    res.redirect('/');
  });

}

exports.createAdmin = (req, res, next) => {
  const newUser = request.body || {
    name: "abc abc",
    email: "abc@acb.in",
    age: 33,
    damnit: "Karen"
    };
  User.create(newUser, (err,user)=> {
      err?console.log(err):console.log(user);
      response.json(user);
  })
}