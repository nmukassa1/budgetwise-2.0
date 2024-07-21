import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcrypt';
import db from '../db/index.js';

function validate(email, password){
    const tempErrors = {}
    let isValid = true;
    //EMAIL
    if(!email){
        tempErrors["email"] = "Email is required.";
        isValid = false;
    }
    if(!/\S+@\S+\.\S+/.test(email)) { 
        tempErrors["email"] = "Email is not valid.";
        isValid = false;
    }

    //PASSWORD
    if(!password){
        tempErrors["email"] = "Email is required.";
        isValid = false;
    }
    if(password.length < 8){
        tempErrors["password"] = "Password must be at least 8 characters long.";
        isValid = false
    }

    return isValid
}

passport.use(new LocalStrategy({
    usernameField: 'email'
}, async (email, password, done) => {
    try {
      if(validate(email, password)){
        const res = await db.query('SELECT * FROM users WHERE email = $1', [email]);
        const user = res.rows[0];
        if (!user) {
            return done(null, false, { message: 'Incorrect email.' });
        }
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      } else{
        throw new Error(validate())
      }
    } catch (err) {
        return done(err);
    }
}));

// passport.use(new LocalStrategy({
//     usernameField: 'email'
// }, async (email, password, done) => {
//     try {
//         const res = await db.query('SELECT * FROM users WHERE email = $1', [email]);
//         const user = res.rows[0];
//         if (!user) {
//             return done(null, false, { message: 'Incorrect email.' });
//         }
//         const match = await bcrypt.compare(password, user.password);
//         if (!match) {
//             return done(null, false, { message: 'Incorrect password.' });
//         }
//         return done(null, user);
//     } catch (err) {
//         return done(err);
//     }
// }));

passport.serializeUser((user, done) => {
    // console.log('Serializing user:', user);
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    // console.log(id);
    try {
        const res = await db.query('SELECT * FROM users WHERE id = $1', [id]);
        const user = res.rows[0];
        if (user) {
            // console.log('Deserialized user:', user);
            done(null, user);
        } else {
            done(new Error('User not found'));
        }
    } catch (err) {
        done(err);
    }
});

export default passport;
