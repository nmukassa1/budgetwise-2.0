import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcrypt';
import db from '../db/index.js';

passport.use(new LocalStrategy({
    usernameField: 'email'
}, async (email, password, done) => {
    try {
        const res = await db.query('SELECT * FROM users WHERE email = $1', [email]);
        const user = res.rows[0];
        if (!user) {
            return done(null, false, { errors: {email: 'Incorrect email.' }});
        }
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return done(null, false, { errors: {password: 'Incorrect password.' }});
        }
        return done(null, user);
    } catch (err) {
        return done(err);
    }
}));

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
