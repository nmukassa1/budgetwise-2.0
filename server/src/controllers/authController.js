import passport from 'passport';
import { createUser, getUserByEmail } from '../models/userModel.js';
import {validationResult} from 'express-validator'

export const register = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // console.log(errors);
        const errorObject = errors.array().reduce((acc, curr) => {
            acc[curr.path] = curr.msg;
            return acc;
        }, {});

        return res.status(400).json({ errors: errorObject });
    }

    try {
        const { email, password, firstName, lastName } = req.body;
        const userExist = await getUserByEmail(email)
        if(userExist){
            throw new Error('User already exists')
        }
        await createUser(email, password, firstName, lastName);
        const user = await getUserByEmail(email)
        req.logIn(user, err => {
            if (err) {return next(err)}
            console.log(user);
            
            res.status(201).json({ message: 'User registered successfully', user });
        })
    } catch (err) {
        res.status(417).json({message: err.message})
        next(err);
    }
};

export const login = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log(errors);
        const errorObject = errors.array().reduce((acc, curr) => {
            acc[curr.path] = curr.msg;
            return acc;
        }, {});

        return res.status(400).json({ errors: errorObject });
    }

    passport.authenticate('local', (err, user, info) => {
        if (err) return next(err);
        if (!user) return res.status(400).json(info);
        req.logIn(user, err => {
            // console.log(user);
            if (err) return next(err);
            res.status(200).json({ message: 'Logged in successfully', user });
        });
    })(req, res, next);
};

export const logout = (req, res) => {
    req.logout(err => {
        if (err) return res.status(500).json({ message: 'Logout failed' });
        // res.redirect('/')
        res.status(200).json({ message: 'Logged out successfully', redirectTo: '/' });
    });
};


