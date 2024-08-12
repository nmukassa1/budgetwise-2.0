import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcrypt';
import db from '../db/index.js';
import { getUserByEmail } from '../models/userModel.js';
import supabase from './supabase.js';

passport.use(new LocalStrategy({
    usernameField: 'email'
}, async (email, password, done) => {
    try {
        const user = await getUserByEmail(email);
        // console.log('Passpoer: ', user);
        if (!user) {
            return done(null, false, { errors: {email: 'Incorrect email.' }});
        }
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return done(null, false, { errors: {password: 'Incorrect password.' }});
        }
        return done(null, user);
    } catch (err) {
        console.log(err);
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
        const {data, error} = await supabase.from('users').select('id').eq('id', id).single()
        const user = data;
        // console.log(data);
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
