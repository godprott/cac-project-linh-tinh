const userModel = require('./models/User');

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const myStrategy = new LocalStrategy({
    usernameField: 'name',
    passwordField: 'pass'
  },
  (username, password, done) => {
    var user = userModel.getUser(username);
    if(!user) {
        console.log("ko tim thay user");
        return done(null, false, {message: "Khong ton tai user"});
    }

    if(!userModel.checkPass(username, password)) {
        console.log("loi pass");
        return done(null, false, {message: "Sai Password"});
    }
    console.log("ok");
    return done(null, user);
  }
);

passport.use(myStrategy);

passport.serializeUser((user, done) => {
    console.log("user dc truyen toi de luu trong session: ",user);
    done(null, user.username);
});
  
passport.deserializeUser((name, done) => {
    var user = userModel.getUser(name);
    done(null, user);
});

module.exports = passport;