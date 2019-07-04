const express = require('express');
const router = express.Router();
const passport = require('passport');
const GithubStrategy = require('passport-github').Strategy;
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const config = require('../config/variables');
const authToken = require('../utils/authMiddleware.js');

/* GET users listing. */
// GITHUB ROUTES AND STRATEGIES


//authenticate
router.get('/github', passport.authenticate('github'));

//authenticate callback
router.get('/github/callback',
 passport.authenticate('github', {failureRedirect: '/'}),
 function(req, res) {
     console.log(req.user);
    jwt.sign({userId: req.user.id}, config.jwsSecret, (err, token) => {
        if(err) return res.status(500).json(err);
        res.status(200).json({token: token});
    })

 });

passport.use(new GithubStrategy({
        clientID: config.githubClientId,
        clientSecret: config.githubClientSecret,
        callbackURL: config.githubClientCallbackURL
    }, 
    function(accessToken, refreshToken, profile, callback) {
        //checking profile details:
        // console.log(profile);
        User.findOne({email: profile._json.email}, (err, oldUser) => {
            if(err) return callback(err, false);
            if(oldUser) {
                return callback(null, oldUser);
            } else {
                var newUser = {
                    githubId: profile.id,
                    name : profile.displayName,
                    email : profile._json.email,
                    username: profile.username,
                    photo: profile._json.avatar_url
                }
                User.create(newUser, (err, createdUser) => {
                    if(err) return callback(err, false);
                    return callback(null, createdUser);
                });
            }
            return;
        });
        
    }
));

//Serialising the user
passport.serializeUser((user, callback) => {
    // console.log('*******************In serializeUser callback ');
    callback(null, user.id);
});

//De-Serialising the user
passport.deserializeUser((id, callback) => {
    User.findById(id, (err, user) => {
        // console.log('*******************In De serializeUser callback ');
        if(err) return callback(err, false);
        callback(null, user);
    })
    
});


module.exports = router;