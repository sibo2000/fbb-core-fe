const User = require('../models/user');
const jwt = require('jwt-simple');
const config = require('../config');

function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.encode({ sub : user.id, iat: timestamp}, config.secret );
}

exports.signin = function(request, response, next) {
    response.send({ token : tokenForUser(request.user)});
}

exports.signup = function(request, response, next) {
    const email = request.body.email;
    const password = request.body.password;

    if (!email || !password ) {
        return response.status(422).send({error : 'You must supply a username and password'})
    }

    User.findOne({email: email}, function(err, existingUser)
    {
        if( err ){ return next(err);}

        if(existingUser) {
            return response.status(422).send({ error : 'Email is in use'});
        }

        const user = new User({
            email: email,
            password:password
        })
        user.save(function(err){
            if(err) {return next(err);}

            response.json({token:tokenForUser(user)})
        })
    })
}